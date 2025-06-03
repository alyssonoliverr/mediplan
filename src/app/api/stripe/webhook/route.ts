import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import Stripe from "stripe";

import { db } from "@/db";
import { usersTable } from "@/db/schema";

export const POST = async (request: Request) => {
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    throw new Error("Stripe secret key not found");
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    throw new Error("Stripe signature not found");
  }

  // Pega o body exatamente cru, do jeito que chegou
  const buf = await request.arrayBuffer();
  const rawBody = Buffer.from(buf).toString("utf8");

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-05-28.basil",
  });

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET,
    );
  } catch (err) {
    console.error("⚠️ Webhook signature verification failed.", err);
    return new NextResponse("Invalid signature", { status: 400 });
  }

  switch (event.type) {
    case "invoice.paid": {
      const invoice = event.data.object as Stripe.Invoice;
      if (!invoice.id) {
        throw new Error("Subscription ID not found");
      }

      // Pega os detalhes do subscription e userId da metadata
      const subscriptionDetails = invoice.parent?.subscription_details;
      if (!subscriptionDetails) {
        throw new Error("Subscription details not found");
      }

      const subscription = subscriptionDetails.subscription;
      const userId = subscriptionDetails.metadata?.userId;

      if (!subscription) {
        throw new Error("Subscription not found");
      }
      if (!userId) {
        throw new Error("User ID not found");
      }

      await db
        .update(usersTable)
        .set({
          stripeSubscriptionId:
            typeof subscription === "string" ? subscription : subscription.id,
          stripeCustomerId: invoice.customer as string,
          plan: "essential",
        })
        .where(eq(usersTable.id, userId));
      break;
    }

    case "customer.subscription.deleted": {
      const subscriptionObj = event.data.object as Stripe.Subscription;

      if (!subscriptionObj.id) {
        throw new Error("Subscription ID not found");
      }

      const subscription = await stripe.subscriptions.retrieve(
        subscriptionObj.id,
      );
      if (!subscription) {
        throw new Error("Subscription not found");
      }

      const userId = subscription.metadata?.userId;
      if (!userId) {
        throw new Error("User ID not found");
      }

      await db
        .update(usersTable)
        .set({
          stripeSubscriptionId: null,
          stripeCustomerId: null,
          plan: null,
        })
        .where(eq(usersTable.id, userId));
      break;
    }
  }

  return NextResponse.json({
    received: true,
  });
};
