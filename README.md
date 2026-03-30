# Calculator App

React + TypeScript monorepo

It contains:

- `packages/ui` - reusable UI component library
- `packages/app` - calculator demo application consuming the UI package

## Tech Stack

- React
- TypeScript
- Vite
- SCSS
- React Router
- Vitest + Testing Library

## Project Structure

```text
packages/
  app/
    src/
      app/
      pages/
      components/
      hooks/
      services/
      types/
      utils/
  ui/
    src/
      components/
        primitives/
        composed/
      styles/
```

## Setup

```bash
npm install
```

## Run The App

```bash
npm run dev
```


## Build

```bash
npm run build
```

## Test

Run all workspace tests:

```bash
npm run test
```

The calculator is available on:

- `/calculator`
- `/history`
