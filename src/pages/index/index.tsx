import React, { useEffect } from 'react'

import bg from '@/assets/preload-bg@2x.png'
import inner from '@/assets/preload-inner@2x.png'
import * as API from '@/api/index'

import './index.scss'

const getInfo = () => {
  API.getList({ type: 1 }).then(res => {
    console.info(res)
  })
}

function Index() {
  useEffect(() => {
    getInfo()
  }, [])

  const updateInfo = async () => {
    const update = await API.updateInfo({
      name: 'Jhon',
      phone: '18888888888',
      password: 'xxxxxxxx'
    })
    console.info(update.data)
  }

  return (
    <div className="page">
      <div className="logo" onClick={updateInfo}>
        <img className="bg" src={bg} alt="" />
        <img className="inner" src={inner} alt="" />
      </div>
      <div>首页</div>
    </div>
  )
}

export default Index
