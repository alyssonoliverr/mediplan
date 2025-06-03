import { ArrowRight, Clock, Heart, Users } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navbar */}
      <header className="border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="text-primary h-6 w-6" />
              <span className="text-xl font-bold">Mediplan</span>
            </div>
            <nav>
              <Button asChild variant="default">
                <Link href="/authentication">
                  Acessar Sistema
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Gerencie seus Planos Médicos
              </h1>
              <p className="text-muted-foreground mt-6 max-w-[700px] text-lg sm:text-xl">
                Sistema completo para gestão de planos médicos, atendimentos e
                organização da sua operadora de saúde.
              </p>
              <div className="mt-8 flex gap-4">
                <Button asChild size="lg">
                  <Link href="/authentication?tab=register">
                    Começar Agora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/authentication">Fazer Login</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted/40 border-t py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Recursos Principais
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-2">
                <CardHeader>
                  <Heart className="text-primary h-6 w-6" />
                  <CardTitle className="mt-4">
                    Gestão de Planos Médicos
                  </CardTitle>
                  <CardDescription className="text-base">
                    Mantenha um histórico completo e organizado de todos os seus
                    planos médicos.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-2">
                <CardHeader>
                  <Users className="text-primary h-6 w-6" />
                  <CardTitle className="mt-4">
                    Gestão de Beneficiários
                  </CardTitle>
                  <CardDescription className="text-base">
                    Controle completo de beneficiários, dependentes e histórico
                    de atendimentos.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-2">
                <CardHeader>
                  <Clock className="text-primary h-6 w-6" />
                  <CardTitle className="mt-4">Controle de Carências</CardTitle>
                  <CardDescription className="text-base">
                    Acompanhamento automático de carências e coberturas dos
                    planos de saúde.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Pronto para Começar?
              </h2>
              <p className="text-muted-foreground mt-6 max-w-[600px] text-lg sm:text-xl">
                Experimente gratuitamente e descubra como podemos ajudar a
                organizar sua operadora de saúde.
              </p>
              <Button asChild size="lg" className="mt-8">
                <Link href="/authentication?tab=register">
                  Criar Conta Gratuita
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-1">
            <p className="text-muted-foreground text-sm">© 2024</p>
            <Link
              href="https://github.com/yureicode"
              target="_blank"
              className="text-primary text-sm hover:underline"
            >
              @yureicode
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
