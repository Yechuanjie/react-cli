import React, { useState, useEffect } from 'react'

import { TabBar } from 'antd-mobile'

import Loading from '@/components/loading'

import logo from '@/assets/logo192.png'

import './index.scss'

const tabList = [
  {
    icon: '',
    title: '首页'
  },
  {
    icon: '',
    title: '关于'
  }
]

function Index() {
  const [showLoading, setshowLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setshowLoading(false)
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="page">
      <Loading show={showLoading} txt="加载中..."></Loading>
      <img src={logo} alt="" />
      <div>首页...</div>
      <TabBar>
        {tabList.map((item, index) => {
          // return <TabBar.Item icon={{item.icon}} title={item.title}></TabBar.Item>
        })}
      </TabBar>
    </div>
  )
}

export default Index
