# Mediplan

![Mediplan Logo](/public/logo.svg)

Sistema de agendamento de consultas desenvolvido durante o bootcamp da [Full-Stack Club](https://fullstack.club/). Permite que clínicas e consultórios gerenciem seus pacientes, médicos e consultas de forma simples e eficiente.

## Funcionalidades

- Cadastro e gestão de pacientes
- Cadastro de médicos e especialidades
- Agendamento de consultas com verificação de disponibilidade
- Dashboard com métricas e relatórios

## Tecnologias

- Next.js 15 (App Router)
- React 19 + TypeScript
- PostgreSQL + Drizzle ORM
- Tailwind CSS + shadcn/ui

## Como Executar

```bash
# Clone o projeto
git clone https://github.com/yureicode/mediplan.git
cd mediplan

# Instale as dependências
pnpm install

# Configure o ambiente
cp .env.example .env.local

# Execute
pnpm drizzle-kit push:pg
pnpm dev
```

## Licença

MIT - [LICENSE](LICENSE)

---

Desenvolvido por [YureiCode](https://github.com/yureicode) durante o bootcamp da [Full-Stack Club](https://fullstack.club/)
