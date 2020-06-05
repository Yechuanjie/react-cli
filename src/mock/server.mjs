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
const app = express()

const router = express.Router()

router.use('/', mockData)

app.use('/api', router)

app.listen(3001, () => {
  console.log('Example app listening on port 3001!')
})
