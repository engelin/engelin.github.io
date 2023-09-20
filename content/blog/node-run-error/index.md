---
title: Vite build error
date: "2023-09-20T11:02:01.121Z"
---

## Vite build error

1) Error  
```bash
$ yarn dev
yarn run v1.22.19
$ vite
failed to load config from /Users/xxx/workspace/code/ooo/vite.config.js
error when starting dev server:
TypeError: Cannot redefine property: File
    at Function.defineProperty (<anonymous>)
    at Object.<anonymous> (/Users/xxx/workspace/code/ooo/node_modules/@babel/core/lib/index.js:7:8)
    at Module._compile (node:internal/modules/cjs/loader:1241:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1295:10)
    at Module.load (node:internal/modules/cjs/loader:1091:32)
    at Module._load (node:internal/modules/cjs/loader:938:12)
    at Module.require (node:internal/modules/cjs/loader:1115:19)
    at require (node:internal/modules/helpers:130:18)
    at Object.<anonymous> (/Users/xxx/workspace/code/ooo/node_modules/@babel/core/lib/config/helpers/config-api.js:16:9)
    at Module._compile (node:internal/modules/cjs/loader:1241:14)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

2) Node verion  
```bash
$ node -v
v20.6.0
```

## Solution
1) Upgrade node version  
```bash
$ brew upgrade node
```

2) Run again  
```bash
$ node -v          
v20.7.0
$ yarn dev
yarn run v1.22.19
$ vite

  VITE v4.4.7  ready in 380 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help

  LARAVEL v10.15.0  plugin v0.7.8

  ➜  APP_URL: http://localhost
```

## Reference
- [[Issue] Cannot redefine property: crypto](https://github.com/sveltejs/kit/issues/10252)
