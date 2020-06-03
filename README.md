该脚手架使用 [Create React App](https://github.com/facebook/create-react-app) 创建。

## react-cli

该脚手架基于 Create React App 创建，方便快速搭建规范的、可直接进入业务开发的 react 移动端项目

项目技术栈: react + antd-moblie + typescript + react-router + redux + sass

### <span id="top">目录</span>

- [✔ typescript 开发语言](#)

- [✖ redux 状态管理](#)

- [✔ react-router 路由管理](#)

- [✔ 路由懒加载](#)

- [✖ axios 封装及接口管理](#)

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
const { override, addWebpackAlias} = require('customize-cra')
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

根目录的 `tsconfig.json` 文件中也需要设置别名的支持，否则ts会提示无法识别别名

```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@/*": [
        "*"
      ]
    }
  }
}
```

`Tips:` 推荐使用 `vscode ` 开发，安装 `path-intellisense `插件, 并在  `setting.json ` 中设置别名映射，就能在使用别名时提示文件路径

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

在**根目录**下创建不同的环境变量文件，就如你所看到的`scripts`，通过 `dotenv` 可以指定不同的环境变量文件，

- .env.development

- .env.staging

- .env.production
