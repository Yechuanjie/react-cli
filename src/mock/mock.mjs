import Mock from 'mockjs'
import express from 'express'
const router = express.Router()

router.get('/getInfo', (req, res) => {
  const data = Mock.mock({
    'list|1-5': [
      {
        'id|+1': 1,
        'desc|1-10': '😋',
        'show|1': true,
        'citys|2': {
          '310000': '上海市',
          '320000': '江苏省',
          '330000': '浙江省',
          '340000': '安徽省'
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
  return res.json(data)
})

export default router
