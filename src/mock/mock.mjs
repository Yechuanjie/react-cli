import Mock from 'mockjs'
import express from 'express'
const router = express.Router()
/*
 * get类型接口
 * /api/getInfo 获取列表
 */
router.get('/getInfo', (req, res) => {
  console.info(req.query.type)
  const data = Mock.mock([
    {
      'name|1': ['John', 'Jessen', 'Mark'],
      'desc|1': ['Hello', 'React-cli', 'Try it!']
    }
  ])
  return res.json({
    data,
    code: 200,
    msg: ''
  })
})

/*
 * post类型接口
 * /api/updateInfo 更新数据
 */
router.post('/updateInfo', (req, res) => {
  const data = req.body
  console.info('正在请求更新', data)
  return res.json({
    code: 200,
    data: true,
    msg: '操作成功'
  })
})

export default router
