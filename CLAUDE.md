# Internship Tracker

A React app for tracking internship applications — status, contacts, deadlines, and notes.

## Tech Stack

- **React** with **TypeScript** (strict mode)
- **Vite** — dev server and bundler
- **CSS Modules** or plain CSS — no CSS-in-JS libraries
- No UI component libraries unless explicitly added

## Project Structure

```
src/
  components/   # Reusable UI components
  pages/        # Route-level components
  hooks/        # Custom React hooks
  types/        # Shared TypeScript types/interfaces
  utils/        # Pure helper functions
```

## Coding Conventions

- Use functional components and hooks only — no class components.
- Type all props with explicit interfaces; avoid `any`.
- Name component files `PascalCase.tsx`, hooks `useCamelCase.ts`, utilities `camelCase.ts`.
- Co-locate a component's styles and sub-components in its folder when they grow beyond a single file.
- Extract reusable logic into custom hooks; extract reusable UI into shared components.
- Keep components small and single-purpose. If a component needs more than ~150 lines, split it.
- Prefer `type` over `interface` for props and local shapes; use `interface` for extensible contracts.
- Use `const` arrow functions for components; avoid default exports except for pages.

## Dependencies

- Do **not** install packages to solve problems solvable with native browser APIs or a few lines of code.
- Justify every new dependency before adding it. Prefer zero-dependency solutions for small utilities.
- Do not add testing libraries, linters, or formatters unless the user asks.

## What Claude Must Not Do

- **Do not modify tests to make them pass.** Fix the implementation instead.
- **Do not rewrite working code** during a bug fix unless the change is directly necessary.
- **Do not add comments** that describe what the code does — only add them when the *why* is non-obvious.
- **Do not create new abstractions** (hooks, helpers, components) unless the task requires them.
- **Do not add error handling** for scenarios that cannot happen in this app's flow.
- **Do not scaffold placeholder files** or TODO stubs — only create files with real content.

## Commands

```bash
npm run dev      # start dev server
npm run build    # type-check + build
npm run preview  # preview production build
```
