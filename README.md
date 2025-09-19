<h1 align="center">MediPlan</h1>


Aplicação web desenvolvida utilizando **Next.js (React + TypeScript)**.  
O projeto tem como objetivo a criação de um sistema simples e funcional para gestão de clínicas médicas, abrangendo:

- Cadastro de clínicas  
- Cadastro de médicos 
- Cadastro de pacientes  
- Agendamento de consultas  
- Dashboard de faturamento  
- Visualização clara das consultas do dia

Deploy: [https://mediplan-ten.vercel.app/](https://mediplan-ten.vercel.app/)

---

## Tecnologias

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Better Auth](https://better-auth.com/) – autenticação com Google
- [Stripe](https://stripe.com/) – integração para pagamentos (desativada no deploy atual)
- [PostCSS](https://postcss.org/)
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)

---

## Estrutura do Projeto

```
mediplan-main/
│── public/           # Arquivos estáticos
│── src/              # Código fonte da aplicação
│── drizzle.config.ts # Configuração ORM
│── next.config.ts    # Configuração do Next.js
│── package.json      # Dependências e scripts
│── tsconfig.json     # Configuração do TypeScript
```

---

## Instalação e Uso

### 1. Clonar o repositório
```bash
git clone https://github.com/alyssonoliverr/mediplan.git
cd mediplan
```

### 2. Instalar dependências
```bash
npm install
# ou
yarn install
```

### 3. Configurar variáveis de ambiente
Crie um arquivo **.env.local** na raiz com as variáveis necessárias (exemplo):

```env
DATABASE_URL="sua_connection_string"

# Better Auth - Google
GOOGLE_CLIENT_ID="sua_client_id"
GOOGLE_CLIENT_SECRET="seu_client_secret"
AUTH_SECRET="chave_unica_para_tokens"
NEXT_PUBLIC_API_URL="http://localhost:3000"
```

### 4. Rodar o projeto em desenvolvimento
```bash
npm run dev
```
Acesse em: http://localhost:3000

### 5. Build para produção
```bash
npm run build
npm run start
```

---

# Boas Práticas de Desenvolvimento

O desenvolvimento segue princípios consolidados de engenharia de software e boas práticas para aplicações web modernas, incluindo:

- **[KISS (Keep It Simple, Stupid)](https://medium.com/@Masoncoding/understanding-the-kiss-principle-in-software-design-keep-it-simple-stupid-6f5fcd8913f3)** – manter o código simples e direto  
- **[Clean Code](https://blog.codacy.com/what-is-clean-code)** – legibilidade e clareza como prioridade  
- **[SOLID](https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design)** – princípios de orientação a objetos para código extensível e de fácil manutenção  
- **[DRY (Don't Repeat Yourself)](https://www.getdbt.com/blog/dry-principles)** – evitar duplicação de lógica  
- **[YAGNI (You Aren't Gonna Need It)](https://martinfowler.com/bliki/Yagni.html)** – implementar apenas o que é realmente necessário  
- **[Código padronizado com Prettier](https://prettier.io/)** – formatação consistente e automatizada  
- **[Análise estática e linting com ESLint](https://medium.com/@fokusman/how-linting-and-eslint-improve-code-quality-fa83d2469efe)** – identificar e corrigir problemas no código sem executá-lo

---

## Licença

Este projeto está licenciado sob a licença [MIT](./LICENSE).
