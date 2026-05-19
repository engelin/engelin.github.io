---
title: How to Test Vite + React application (Vitest)
date: "2023-11-15T13:26:37.121Z"
tags:
  - Vite
  - React
  - Testing
  - Vitest
---

## Vitest
Jest can be used in vite project, [but it is not fully supported](https://jestjs.io/docs/getting-started#using-vite). Vitest is a test runner for vite project.

## Install

```bash
yarn add -D vitest @testing-library/react jest-dom
```

## Configuration

```js
// vite.config.js
 import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            ssr: 'resources/js/ssr.jsx',
            refresh: true
        }),
        react(),
        eslint({
            include: ['/resources/js/**/*.jsx', '/public/assets/*'],
            exclude: ['node_modules/**']
        })
    ],
+   test: {
+       globals: true,
+       files: ['resources/js/**/*.test.js'],
+       environment: 'jsdom'
+   },
    resolve: {
        alias: {
            '@hoil': '/resources/js',
            '@assets': '/public/assets'
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    ssr: {
        noExternal: ['@inertiajs/react', '@inertiajs/react/server']
    }
});
```

## Usage

```bash
yarn vitest
```

## Reference
- [Vitest](https://vitest.dev/guide/)
- [Testing a react application with vitest](https://www.eternaldev.com/blog/testing-a-react-application-with-vitest/)
