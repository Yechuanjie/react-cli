## react-cli

[![Build Status](https://travis-ci.org/Yechuanjie/react-cli.svg?branch=master)](https://travis-ci.org/Yechuanjie/react-cli)

🎉 `react` 移动端开发脚手架，技术栈 `react` + `antd-moblie` + `typescript` + `react-router` + `redux`

该脚手架基于 [Create React App](https://www.html.cn/create-react-app/) 创建，方便快速搭建 react 移动端项目。[仓库地址](https://github.com/Yechuanjie/react-cli) && [项目地址（请在移动端查看）](https://yechuanjie.com/react-cli/index)

### <span id="top">目录</span>

[✅ TypeScript 开发语言](#ts)

[✅ redux 状态管理](#redux)

[✅ react-router 路由管理](#router)

[✅ axios 封装及接口管理](#axios)

[✅ 本地 mock server 支持](#mock)

[✅ 本地跨域配置](#proxy)

[✅ esint + prettier 统一开发规范](#eslint)

[✅ 支持自定义 webpack 配置](#webpack)

[✅ rem 适配方案 ](#rem)

[✅ antd-moblie 组件按需加载](#antd)

[✅ 配置 alias 别名](#alias)

[✅ 配置打包分析](#analyze)

[✅ 配置多环境变量](#env)

#### <span id="ts">✅ TypeScript 开发语言</span>

`TypeScript` 是 `JavaScript` 类型的超集，它可以编译成纯 `JavaScript`。它的最大特点就是支持强类型和 [ES6 Class](http://es6.ruanyifeng.com/#docs/class)

[▲  回顶部](#top)

#### <span id="redux">✅ redux  状态管理</span>

目录结构

```
├─store
│  │ index.ts
│  │
│  ├─actions
│  │   user.ts
│  │
│  └─reducers
│      index.ts
│      user.ts
```

拆分 reducer

`store/index` 中 `combineReducers()` 方法将多个小的 reducer 组合成一个 rootReducer，而每个小的 reducer 只关心自己负责的 `action.type`

`src/index.tsx` 中引入

```js
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
```

使用

```js
import { useSelector, useDispatch } from 'react-redux'
import { setAppUserInfo } from '@/store/actions/user'

function Index() {
  const userInfo = useSelector((state: PageStateProps) => state.user)
  const dispath = useDispatch()

  const updateInfo = () => {
    dispath(
      setAppUserInfo({
        userId: '413',
        nickName: 'developer',
        sex: 1
      })
    )
  }
  return (
    <div className="page">
      <div onClick={updateInfo}>
        <Logo></Logo>
      </div>
      <div className="welcome">hello {userInfo.nickName}!</div>
    </div>
  )
}
```

[▲  回顶部](#top)

#### <span id="router"> ✅ react-router 路由管理</span>

本项目采用 `history` 模式，如需使用 `hash` 模式，请使用 `HashRouter` 替换 `BrowserRouter`

`basename` 属性可以根据项目路径来修改，例如本项目地址为：[http://yechuanjie.com/react-cli](http://yechuanjie.com/react-cli)，则 `basename="/react-cli"`，若不需要子路径，则默认`basename = '/'`

`src/router/routes.ts`

```ts
import { lazy } from 'react'
const Index = lazy(() => import('@/pages/index'))

export const routes: RouteConfig[] = [
  {
    path: '/index',
    component: Index,
    exact: true,
    routes: []
  }
]
```

`src/router/index.tsx`

```jsx
import React, { Suspense } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { routes } from './routes'

const RouterView = () => (
  <BrowserRouter basename="/react-cli">
    <Suspense fallback={<div>加载中</div>}>
      <Switch>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact}></Route>
        ))}
        <Redirect to="/index"></Redirect>
      </Switch>
    </Suspense>
  </BrowserRouter>
)
export default RouterView
```

使用 `lazy` + `Suspense` 的方式实现路由懒加载以及组件异步加载

[▲  回顶部](#top)

#### <span id="axios">✅ axios 封装及接口管理</span>

将 `axios` 请求进行二次封装，统一请求方式、实现公共参数配置、实现统一的错误拦截处理，并返回与后端统一的 `Promise<ResponseType>` 对象

`request` 封装 ，`src/api/request.ts`

```ts
import axios, { AxiosRequestConfig, Method } from 'axios'
import envConfig from '@/config'
// 接口返回类型 (根据后端返回的格式定义)
interface ResponseType {
  data: any
  msg: string
  code: number
}
export default function request(
  url: string,
  method: Method,
  data?: {},
  loading?: boolean
): Promise<ResponseType> {
  // 请求公共参数配置
  const publicParams = {
    env: envConfig.ENV_TYPE,
    mockType: 1,
    source: 'h5'
  }
  // 合并公共参数
  data = Object.assign({}, data, publicParams)
  const options: AxiosRequestConfig = {
    url,
    method,
    params: method.toUpperCase() === 'GET' || method.toUpperCase() === 'DELETE' ? data : null,
    data: method.toUpperCase() === 'POST' || method.toUpperCase() === 'PUT' ? data : null
  }

  const AxiosInstance = initAxios(loading)
  return new Promise((resolve, reject) => {
    AxiosInstance(options)
      .then(res => {
        const data = res.data as ResponseType
        // 这里可以添加和后台的 status 约定
        // if (data.code !== 200) {
        //   Toast.info(data.msg)
        // }
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
```

接口管理 `src/api/index.ts`

```ts
import request from './request'

interface InfoListItem {
  name: string
  desc: string
}

class IndexApi {
  static getList = (params: { type: number }): Promise<InfoListItem[]> =>
    request('/api/getInfo', 'GET', params, true)
}
```

使用封装的`request`

```ts
import IndexApi from '@/api/index'
const updateInfo = async () => {
  // get 请求
  const list = await IndexApi.getList({ type: 1 })
  console.info(list) // 请求结果数据类型即为api里定义的接口返回类型 即 InfoListItem[]
  console.log(list.length, list[0].name) 
}
```

[▲  回顶部](#top)

#### <span id="mock">✅ 本地 mock server 支持</span>

`src/mock` 实现了本地 `mock server` 开发。

注意： `nodejs` 环境下默认不支持 `esModules`，将`src/mock`下的文件，修改为`.mjs`后缀，同时在`package.json` 的`scripts`中新增`experimental-modules`命令使其可以使用`esModules`

`package.json`

```json
scripts: {
  "mock": "node --experimental-modules src/mock/server.mjs"
}
```

本项目使用 `express` 作为服务器开发

`src/mock/server.mjs`

```javascript
import express from 'express'
import mockData from './mock.mjs'
import bodyParser from 'body-parser'

const app = express()
// body-parser 解析json格式数据
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const router = express.Router()

router.use('/', mockData)
app.use('/api', router)

app.listen(3001, () => {
  console.log('Example app listening on port 3001!')
})
```

mock 数据根据需求在`src/mock/mock.mjs`中自定义修改，更多 mock 使用方式可以查看[mock 官方示例](<%5Bhttp://mockjs.com/examples.html%5D(http://mockjs.com/examples.html)>)。

`src/mock/mock.mjs`

```javascript
import Mock from 'mockjs'
import express from 'express'
const router = express.Router()
// get类型接口  /api/getInfo 获取列表
router.get('/getInfo', (req, res) => {
  console.info(req.query.type)
  const data = Mock.mock({
    'list|1-8': [
      {
        'name|1': ['John', 'Jessen', 'Mark'],
        'desc|1': ['Hello', 'React-cli', 'Try it!']
      }
    ]
  })
  return res.json({
    data,
    code: 200,
    msg: ''
  })
})
```

开启本地 `mock` 服务

```shell
yarn mock
```

本地开启 `mock` 服务后，所有本地 `api` 请求都会导致**跨域问题**，请参考[✅ 本地跨域配置](#proxy)

[▲  回顶部](#top)

#### <span id="proxy">✅ 本地跨域配置</span>

为解决本地接口请求跨域，需要使用到 `http-proxy-middleware` 中间件。在 src 根目录下创建`setupProxy.js`文件，注意这里只能使用 `.js` 后缀，因为该中间件默认读取的是 `js` 文件

`src/setupProxy.js`

```javascript
const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      // 代理服务器地址
      target: 'http://localhost:3001',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api'
      }
    })
  )
}
```

这样一来，就可以愉快的在本地请求自己的`mock`数据啦！

[▲  回顶部](#top)

#### <span id="eslint">✅ eslint + prettier 统一开发规范</span>

在`package.json`文件中编写自定义`eslint`规则

```json
{
  "eslintConfig": {
    "extends": "react-app",
    "rules": {
      "import/no-commonjs": 0
    }
  }
}
```

编写统一的`prettier`规范文件 `.prettierrc`

```json
{
  "singleQuote": true,
  "semi": false,
  "printWidth": 120,
  "arrowParens": "avoid",
  "bracketSpacing": true,
  "jsxBracketSameLine": true,
  "trailingComma": "none"
}
```

[▲  回顶部](#top)

#### <span id="webpack">✅ 支持自定义 webpack 配置</span>

通过 `customize-cra` 暴露 `webpack` 配置的`config-overrides.js`文件，使我们可以不用 `eject` 的方式就能在这里覆盖重写 `webpack` 配置，目前已支持几十种相关配置自定义，具体可查看[customize-cra api docs](<[https://github.com/arackaf/customize-cra/blob/HEAD/api.md](https://github.com/arackaf/customize-cra/blob/HEAD/api.md)>)。

[▲  回顶部](#top)

#### <span id="rem">✅ rem 适配方案 </span>

项目已经配置好 `rem` 适配，下面仅做介绍：

`antd-mobile` 中的样式默认使用`px`作为单位，如果需要使用`rem`单位，推荐使用`postcss-px2rem` 搭配 `src/utils/rem.ts`一起使用。其中 `src/utils/rem.ts` 实现了一个极简的 rem 库。

`postcss-px2rem` 插件使用

- 假如设计图给的宽度是 750，remUnit 设置为 75，这样我们写样式时，可以直接按照设计图标注的宽高来 1:1 还原开发。

- PS: 如果引用了某些没有兼容 px2rem 第三方 UI 框架，有的 1rem = 100px（antd-mobile）， 有的 1rem = 75px

- 需要将 remUnit 的值设置为像素对应的一半（antd-mobile 即 50），即可以 1:1 还原组件，否则会样式会有变化，例如按钮会变小。

`config-overrides.js`，使用`addPostcssPlugins`设置

```javascript
const { override, addPostcssPlugins } = require('customize-cra')
module.exports = override(addPostcssPlugins([require('postcss-px2rem')({ remUnit: 50 })]))
```

[▲  回顶部](#top)

#### <span id='antd'>✅ antd-moblie 组件按需加载</span>

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一款 `babel` 插件，它会在编译过程中将 `import` 的写法自动转换为按需引入的方式。

安装插件

```shell
yarn add babel-plugin-import
```

`config-overrides.js`，使用`fixBabelImports`设置

```javascript
const { override, fixBabelImports } = require('customize-cra')
// 引用 antd 后设置按需引入后，在打包的时候会生成很多 .map 文件
process.env.GENERATE_SOURCEMAP = 'false'
module.exports = override(
  /* 按需引入antd-mobile */
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css'
  })
)
```

[▲  回顶部](#top)

#### <span id="alias">✅ 配置 alias 别名</span>

`config-overrides.js`，使用`addWebpackAlias`设置

```javascript
const { override, addWebpackAlias } = require('customize-cra')
const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = override(
  addWebpackAlias({
    '@/': resolve('src'),
    '@/pages': resolve('./src/pages'),
    '@/api': resolve('./src/api')
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

[▲  回顶部](#top)

#### <span id="analyze">✅ 配置打包分析</span>

webpack-bundle-analyzer 是一款分析代码大小的插件

首先安装它：

```shell
yarn add webpack-bundle-analyzer
```

在 `config-overrides.js` 中，使用 `addWebpackPlugin` 设置

```javascript
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { override, addWebpackPlugin } = require('customize-cra')

const analyze = process.env.REACT_APP_ENV === 'development' //是否分析打包数据

module.exports = override(
  analyze
    ? addWebpackPlugin(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static' //输出静态报告文件report.html，而不是启动一个web服务
        })
      )
    : undefined
)
```

[▲  回顶部](#top)

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
  BASE_URL: '//test.xxx.com'
  OTHER_GLOBAL_VAR: 'xxx'
}
```

[▲  回顶部](#top)
