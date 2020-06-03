import React, { useState, useEffect } from 'react'

import Loading from '@/components/loading'

import logo from '@/assets/logo192.png'

import './index.scss'

function Index() {
  const [showLoading, setshowLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setshowLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
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
