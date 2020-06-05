/**
 * nodejs环境下默认不支持esModules
 * 将server相关文件，修改为.mjs后缀
 * 同时在package.json scripts中新增experimental-modules使其可以使用esModules
 * scripts: {
 * "mock": "node --experimental-modules src/mock/server.mjs",
 * }
 * */
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

/* 不建议服务端开启所有origin * 跨域，开放跨域权限会存在一定安全隐患 */
/* dev环境下，通过 src/setupProxy.js 文件配置跨域 */

// /* 服务端开启跨域 */
// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With')
//   res.header('Access-Control-Allow-Headers', 'Content-Type')
//   next()
// })
