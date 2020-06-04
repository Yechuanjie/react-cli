import React, { useState, useEffect } from 'react'

import Loading from '@/components/loading'
import logo from '@/assets/logo192.png'
import * as API from '@/api/index'

import './index.scss'

function Index() {
  const [showLoading, setshowLoading] = useState(true)

  useEffect(() => {
    API.getMainPageInfo({
      mockType: 1,
      source: 'web',
      useType: 2
    })
  }, [])

  return (
    <div className="page">
      <Loading show={showLoading} txt="加载中..."></Loading>
      <img src={logo} alt="" />
      <div>首页...</div>
    </div>
  )
}

export default Index
