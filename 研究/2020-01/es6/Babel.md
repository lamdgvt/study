```
Babel 转码器

npm install --save-dev @babel/core
# Babel 的配置文件是.babelrc，存放在项目的根目录下.

# 最新转码规则
npm install --save-dev @babel/preset-env

# react 转码规则
npm install --save-dev @babel/preset-react

# .babelrc 文件
{
    "presets": [
      "@babel/env",
      "@babel/preset-react"
    ],
    "plugins": []
}

# Babel 默认只转换新的 JavaScript 句法（syntax），
# 而不转换新的 API，比如Iterator、Generator、Set、Map、Proxy、Reflect、Symbol、Promise等全局对象，
# 以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。

npm install --save-dev core-js regenerator-runtime
import 'core-js';
import 'regenerator-runtime/runtime';


```
