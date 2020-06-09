## react-cli

[![Build Status](https://travis-ci.org/Yechuanjie/react-cli.svg?branch=master)](https://travis-ci.org/Yechuanjie/react-cli)

该脚手架基于 [Create React App](https://github.com/facebook/create-react-app) 创建，方便快速搭建规范的、可直接进入业务开发的 react 移动端项目

项目技术栈: react + antd-moblie + typescript + react-router + redux + sass

### <span id="top">目录</span>

- [✔ typescript 开发语言](#)

- [✔ redux 状态管理](#)

- [✔ react-router 路由管理](#)

- [✔ 路由懒加载](#)

- [✔ axios 封装及接口管理](#)

- [✔ 本地 mock server 支持](#)

- [✔ sass 支持，全局样式](#)

- [✔ esint + prettier 统一开发规范](#)

- [✔ rem 适配方案 ](#)

- [✔ 支持自定义 webpack 配置 ](#)

- [✔ antd-moblie 组件按需加载](#)

- [✔ 配置 alias 别名](#alias)

- [✔ 配置多环境变量](#env)

#### <span id="alias">✅ 配置 alias 别名</span>

通过 `customize-cra` 暴露 webpack 配置的`config-overrides.js`文件中，使用`addWebpackAlias`设置

```javascript
const { override, addWebpackAlias } = require('customize-cra')
const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = override(
  addWebpackAlias({
    '@/': resolve('src'),
    '@/components': resolve('./src/components'),
    '@/utils': resolve('./src/utils'),
    '@/pages': resolve('./src/pages'),
    '@/store': resolve('./src/store'),
    '@/api': resolve('./src/api'),
    '@/router': resolve('./src/router'),
    '@/assets': resolve('./src/assets'),
    '@/reducer': resolve('./src/reducer'),
    '@/action': resolve('./src/action'),
    '@/constant': resolve('./src/constant'),
    '@/config': resolve('./src/config')
  })
)
```

#### tsconfig.json

根目录的 `tsconfig.json` 文件中也需要设置别名的支持，否则 ts 会提示无法识别别名

```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@/*": ["*"]
    }
  }
}
```

`Tips:` 推荐使用 `vscode` 开发，安装 `path-intellisense`插件, 并在 `setting.json` 中设置别名映射，就能在使用别名时提示文件路径

```JSON
"path-intellisense.mappings": {
  "@": "\${workspaceRoot}/src"
}
```

#### <span id="env">✅ 配置多环境变量 </span>

`package.json` 里的 `scripts` 配置 `build:dev` `build:sta` `build:pro`来执行不同环境

- `yarn start` 启动本地 , 默认执行 `development`
- `yarn build:dev` 打包测试环境 , 执行 `development`
- `yarn build:sta` 打包预发布环境 , 执行 `staging`
- `yarn build:pro` 打包正式环境 , 执行 `production`

```json
"scripts": {
  "start": "react-app-rewired start",
  "build:dev": "dotenv -e .env.development react-app-rewired build",
  "build:sta": "dotenv -e .env.staging react-app-rewired build",
  "build:pro": "dotenv -e .env.production react-app-rewired build"
}
```

##### 配置详情

在 **根目录** 下创建不同的环境变量文件，如 `.env.development` ，`.env.staging`， `.env.production`，就如你所看到的 `scripts` ，通过 `dotenv` 可以指定不同的环境变量文件。

在代码中可以通过 `process.env.REACT_APP_ENV` 访问所在的环境变量。除了 `REACT_APP_*` 变量之外，在你的应用代码中始终可用的还有两个特殊的变量`NODE_ENV` 和`BASE_URL`

- **.env.development**

  ```javascript
  # 测试环境
  # must start with REACT_APP_
  REACT_APP_ENV = 'development'
  ```

- **.env.staging**

  ```javascript
  # 预发布环境
  # must start with REACT_APP_
  REACT_APP_ENV = 'staging'
  ```

- **.env.production**

  ```javascript
  # 正式环境
  # must start with REACT_APP_
  REACT_APP_ENV = 'production'
  ```

这里我们并没有定义全部环境变量，只定义了基础的环境类型 REACT_APP_ENV `development`，`staging`， `production` 。变量我们统一在 `src/config/env.*.ts` 里进行管理

`question:` 为什么要在 `config` 中新建三个文件，而不是直接写在环境变量文件里呢？

- **修改变量方便，无需重新启动项目**

- **引入方式更符合模块化标准**

config/index.ts

```javascript
// 根据build命令指定的环境，引入不同配置
const config = require('./env.' + process.env.REACT_APP_ENV)
export default config.default
```

每种环境单独去配置公共变量，以测试环境配置为例

`config/.env.development.ts`

```javascript
// 测试环境配置
export default {
  ENV_TYPE: '测试环境',
  BASE_URL: '//test.xxx.com' // api请求地址
  OTHER_GLOBAL_VAR: 'xxx' // 可添加自定义的公共变量
}
```

根据环境变量不同，`config` 配置就会不同

```javascript
import config from '@/config'
console.info(config)
// config
{
  ENV_TYPE: '测试环境',
  BASE_URL: '//xxx.xxx.com'
  OTHER_GLOBAL_VAR: 'xxx'
}
```
