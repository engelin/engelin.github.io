---
title: Airbnb linter and tester for React & Symfony webapp
date: '2022-02-14T14:49:37.121Z'
---

```bash
yarn add jest enzyme enzyme-adapter-react-16 --dev
```

Overriding default Encore configuration
Webpack Encore fills in webpack.config.js file with initial instructions to configure the asset system. We need to modify the file slightly, cause Jest & Enzyme require instructions from babel.config.js to load js modules. To do so, remove or just comment the lines below:

Webpack Encore amendment inside webpack.config.js

```javascript
// enables @babel/preset-env polyfills
// .configureBabelPresetEnv((config) => {
//     config.useBuiltIns = 'usage';
//     config.corejs = 3;
// })
```

https://airbnb.io/projects/enzyme/
https://github.com/KamilKubicki/symfony-react-jest-enzyme/

. https://www.zerocho.com/category/React/post/583231469a87ec001834a0ec
