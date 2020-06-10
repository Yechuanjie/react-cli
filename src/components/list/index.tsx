import React from 'react'

import './index.scss'

const doneList = [
  'TypeScript 开发语言',
  'redux 状态管理',
  'react-router 路由管理',
  'axios 封装及接口管理',
  '本地 mock server 支持',
  '本地跨域配置',
  'esint + prettier 统一开发规范',
  '支持自定义 webpack 配置',
  'rem 适配方案',
  'antd-moblie 组件按需加载',
  '配置 alias 别名',
  '配置多环境变量'
]

function List() {
  return (
    <div className="list">
      {doneList.map(item => {
        return (
          <div key={item} className="item">
            <span role="img" aria-label="">
              ✅
            </span>
            <span className="done">{item}</span>
          </div>
        )
      })}
    </div>
  )
}

export default List
