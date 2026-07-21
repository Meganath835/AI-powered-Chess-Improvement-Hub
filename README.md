# Checkmate AI *(Working Title)*

Your personal AI chess coach — a premium, AI-powered chess improvement platform.

Full product documentation lives in [`docs/`](./docs), starting with [`00_PROJECT_STATUS.md`](./docs/00_PROJECT_STATUS.md).

## Tech Stack

- [Next.js 15](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://motion.dev)
- [Lucide React](https://lucide.dev) icons
- Geist + Inter fonts

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                     |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the development server     |
| `npm run build` | Create a production build        |
| `npm run start` | Serve the production build       |
| `npm run lint`  | Run ESLint                       |

## Project Structure

```
app/                  Next.js App Router routes, layouts, pages
components/ui/        shadcn/ui primitives (Button, Card, Badge, ...)
components/layout/    Structural pieces (Navbar, Footer, containers)
components/common/    App-specific composites (StatCard, FeatureCard, ...)
lib/                  Framework-agnostic helpers and site config
hooks/                Reusable React hooks
types/                Shared TypeScript types
```

## Status

This repository currently contains the frontend foundation only: design system, layout primitives, and a homepage skeleton. No backend, authentication, chess logic, or AI features are implemented yet.
