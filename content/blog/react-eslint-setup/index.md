---
title: React ESLint Setup
date: "2023-06-30T10:27:06.121Z"
---

# Install ESLint

### [Install ESLint](https://eslint.org/docs/user-guide/getting-started)

```bash
$ yarn add --dev eslint prettier
```

### 1. [Install ESLint CLI](https://eslint.org/docs/user-guide/command-line-interface)

```bash
$ yarn add --dev eslint-cli
```

### 2. [Setup ESLint]

```bash
$ yarn run eslint --init
yarn run v1.22.19
$ /Users/xxx/workspace/yyy/zzz/node_modules/.bin/eslint --init
You can also run this command directly using 'npm init @eslint/config'.
Need to install the following packages:
  @eslint/create-config@0.4.5
Ok to proceed? (y) y
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · airbnb
✔ What format do you want your config file to be in? · JavaScript
Checking peerDependencies of eslint-config-airbnb@latest
The config that you've selected requires the following dependencies:
...
```

### 3. Downloaded Packages
```diff
diff --git a/package.json b/package.json
index 5abcf3a8..31ad26aa 100644
--- a/package.json
+++ b/package.json
@@ -3,26 +3,43 @@
     "type": "module",
     "scripts": {
         "dev": "vite",
-        "build": "vite build && vite build --ssr"
+        "serve": "vite preview",
+        "build": "vite build && vite build --ssr",
+        "lint": "eslint resources/js --ext .js,.jsx,.ts,.tsx",
+        "lint:fix": "eslint resources/js --ext .js,.jsx,.ts,.tsx --fix",
+        "format": "prettier --write resources/js"
     },
     "devDependencies": {
-        "@headlessui/react": "^1.4.2",
-        "@inertiajs/react": "^1.0.0",
         "@tailwindcss/forms": "^0.5.3",
-        "@vitejs/plugin-react": "^3.0.0",
         "autoprefixer": "^10.4.12",
-        "axios": "^1.1.2",
-        "laravel-vite-plugin": "^0.7.5",
+        "eslint": "^7.32.0 || ^8.2.0",
+        "eslint-config-airbnb": "^19.0.4",
+        "eslint-config-prettier": "^8.8.0",
+        "eslint-config-react-app": "^7.0.1",
+        "eslint-plugin-import": "^2.27.5",
+        "eslint-plugin-jsx-a11y": "^6.7.1",
+        "eslint-plugin-prettier": "^4.2.1",
+        "eslint-plugin-react": "^7.28.0",
+        "eslint-plugin-react-hooks": "^4.3.0",
         "postcss": "^8.4.18",
-        "react": "^18.2.0",
-        "react-dom": "^18.2.0",
+        "prettier": "^2.8.8",
         "tailwindcss": "^3.2.1",
-        "vite": "^4.0.0"
+        "vite-plugin-eslint": "^1.8.1"
     },
     "dependencies": {
         "@emotion/react": "^11.11.1",
         "@emotion/styled": "^11.11.0",
+        "@headlessui/react": "^1.7.15",
+        "@inertiajs/react": "^1.0.9",
+        "@mui/icons-material": "^5.11.16",
         "@mui/material": "^5.13.6",
-        "mui-image": "^1.0.7"
+        "@vitejs/plugin-react": "^4.0.1",
+        "axios": "^1.4.0",
+        "laravel-vite-plugin": "^0.7.8",
+        "mui-image": "^1.0.7",
+        "prop-types": "^15.8.1",
+        "react": "^18.2.0",
+        "react-dom": "^18.2.0",
+        "vite": "^4.3.9"
     }
}
```

### 4. ESLint & prettier Config
1) .eslintrc.cjs
```cjs
module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:react/recommended'
    ],
    settings: {
        react: {
            version: 'detect'
        },
        'import/resolver': {
            node: {
                path: ['node_modules', 'resources/js'],
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    },
    overrides: [
        {
            env: {
                node: true
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['react', 'import', 'prettier'],
    rules: {
        'no-unused-vars': 'warn',
        'import/extensions': 'off',
        'import/no-unresolved': 'warn',
        'import/no-extraneous-dependencies': 'warn',
        'react/jsx-props-no-spreading': 'warn',
        'react/prop-types': 'warn',
        'react/require-default-props': 'warn'
    }
};
```

2) .prettierrc
```json
{
    "semi": true,
    "tabWidth": 4,
    "printWidth": 100,
    "singleQuote": true,
    "trailingComma": "none"
}
```

### 5. Vite Config
This is for SSR build.

```diff
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
+       eslint({
+           include: ['/resources/js/**/*.jsx', '/public/assets/*'],
+           exclude: ['node_modules/**']
+       })
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
            '@assets': '/public/assets'
        },
+       extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
});
```
