import Mock from 'mockjs'
import express from 'express'
const router = express.Router()
/*
 * get类型接口
 * /api/getInfo 获取列表
 */
router.get('/getInfo', (req, res) => {
  const data = Mock.mock({
    'list|1-8': [
      {
        'id|+1': 1,
        'desc|1-10': '😋',
        'show|1': true,
        'citys|2': {
          '310000': '重庆市',
          '320000': '上海市',
          '330000': '浙江省',
          '340000': '江苏省'
        },
        'info|1-10': [
          {
            'name|1': ['John', 'Jessen', 'Mark'],
            'desc|1': ['Hello', 'React-cli', 'Try it!']
          }
        ]
      }
    ]
  })
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
  console.info(data)
  return res.json({
    code: 200,
    data: true,
    msg: '操作成功'
  })
})

export default router
