# Mediplan - Sistema de Gestão de Planos Médicos

![Mediplan Logo](/public/logo.svg)

O Mediplan é uma plataforma moderna e intuitiva para gestão de planos médicos, desenvolvida durante o bootcamp da Full-Stack Club. O projeto foi construído utilizando as mais recentes tecnologias web e melhores práticas de desenvolvimento, oferecendo uma solução completa para operadoras de saúde gerenciarem seus beneficiários, médicos credenciados e consultas.

## 💡 Sobre o Projeto

Este projeto foi desenvolvido durante o bootcamp da [Full-Stack Club](https://fullstack.club/), onde aprendemos e aplicamos conceitos avançados de desenvolvimento web moderno, incluindo:

- Arquitetura de software moderna com Next.js App Router
- Desenvolvimento orientado a componentes
- Padrões de design e clean code
- Integração com serviços externos (Stripe, Auth)
- Gerenciamento de estado e cache com TanStack Query
- Validação de formulários com React Hook Form e Zod
- Estilização moderna com Tailwind CSS
- Práticas de UI/UX com shadcn/ui

## 🚀 Funcionalidades

- **Gestão de Beneficiários**

  - Cadastro completo de beneficiários
  - Histórico médico
  - Gestão de dependentes

- **Médicos Credenciados**

  - Cadastro de médicos
  - Gerenciamento de especialidades
  - Controle de agenda e disponibilidade

- **Consultas**

  - Agendamento inteligente
  - Confirmação automática
  - Histórico de atendimentos

- **Dashboard Analítico**
  - Métricas em tempo real
  - Gráficos de desempenho
  - Relatórios personalizados

## 🛠️ Stack Técnica

### Frontend

- **Next.js 15 (App Router)**

  - Server Components
  - Server Actions
  - Route Groups
  - Middleware para autenticação
  - Layout compartilhado
  - Metadata API

- **React 19**

  - Hooks personalizados
  - Context API
  - Componentes reutilizáveis
  - Error Boundaries

- **Estilização**
  - Tailwind CSS para estilos
  - shadcn/ui para componentes base
  - CSS Modules para estilos isolados
  - Design System consistente

### Formulários e Validação

- **React Hook Form**

  - Validação em tempo real
  - Campos controlados e não controlados
  - Integração com Zod

- **Zod**
  - Schemas de validação
  - TypeScript integration
  - Custom validations

### Autenticação e Autorização

- **BetterAuth**
  - Autenticação com email/senha
  - OAuth (Google)
  - Proteção de rotas
  - Middleware de autenticação

### Banco de Dados e ORM

- **PostgreSQL**

  - Relacionamentos
  - Índices otimizados
  - Constraints

- **Drizzle ORM**
  - Migrations
  - Type safety
  - Query builder
  - Relacionamentos

### Pagamentos

- **Stripe**
  - Checkout
  - Portal do cliente
  - Webhooks
  - Gestão de assinaturas

## 📦 Pré-requisitos

- Node.js 18+
- PostgreSQL
- pnpm (recomendado)

## 🚀 Como executar

1. Clone o repositório:
   \`\`\`bash
   git clone https://github.com/yureicode/mediplan.git
   cd mediplan
   \`\`\`

2. Instale as dependências:
   \`\`\`bash
   pnpm install
   \`\`\`

3. Configure as variáveis de ambiente:
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`

4. Execute as migrações do banco de dados:
   \`\`\`bash
   pnpm drizzle-kit push:pg
   \`\`\`

5. Inicie o servidor de desenvolvimento:
   \`\`\`bash
   pnpm dev
   \`\`\`

O projeto estará disponível em `http://localhost:3000`

## 📝 Variáveis de Ambiente

```env
# Database
DATABASE_URL=

# Auth
NEXTAUTH_URL=
NEXTAUTH_SECRET=

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL=
```

## 🔒 Planos e Preços

### Plano Essential

- R$59/mês
- Até 3 médicos cadastrados
- Consultas ilimitadas
- Métricas básicas
- Suporte via e-mail

## 📚 Estrutura do Projeto

```
src/
├── actions/         # Server Actions
├── app/             # App Router pages
├── components/      # Componentes React
├── db/             # Configuração do banco e schemas
├── lib/            # Utilitários e configurações
├── providers/      # Providers React
└── styles/         # Estilos globais
```

## 🧪 Boas Práticas

- **TypeScript**

  - Types bem definidos
  - Interfaces para props
  - Enums para valores constantes
  - Utility types

- **Clean Code**

  - Nomes descritivos
  - Funções pequenas e focadas
  - DRY (Don't Repeat Yourself)
  - SOLID principles

- **Performance**
  - Lazy loading de componentes
  - Otimização de imagens
  - Caching com TanStack Query
  - Memoização quando necessário

## 👨‍💻 Contribuição

1. Faça o fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Suporte

Para suporte e dúvidas, por favor abra uma issue no GitHub ou entre em contato através do e-mail de suporte.

---

Desenvolvido com ❤️ por [YureiCode](https://github.com/yureicode) durante o bootcamp da [Full-Stack Club](https://fullstack.club/)

## Roteiro Aula 01: Setup do Projeto

- [x] Inicialização do projeto Next.js
- [x] Configuração de ferramentas (ESlint, Prettier, Tailwind)
- [x] Configuração do Drizzle e banco de dados
- [x] Configuração do shadcn/ui

## Roteiro Aula 02: Autenticação e Configurações do Estabelecimento

- [x] Tela de login e criação de conta
- [x] Login com e-mail e senha
- [x] Login com o Google
- [x] Fundamentos do Next.js (Rotas, Páginas, Layouts)
- [x] Criação de clínica

## Roteiro Aula 03: Gerenciamento de Profissionais e Disponibilidade

- [x] Sidebar e Route Groups
- [x] Página de médicos
- [x] Criação de médicos & NextSafeAction
- [x] Listagem de médicos
- [x] Atualização de médicos
- [x] Deleção de médicos

## Roteiro Aula 04: Gerenciamento de Pacientes e Agendamentos

- [] Criação de pacientes
- [] Edição de pacientes
- [] Listagem de pacientes
- [] Deleção de pacientes
- [] Criação de agendamentos
- [] Listagem de agendamentos
- [] Deleção de agendamentos

---
