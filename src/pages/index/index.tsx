import React from 'react'
import { useHistory } from 'react-router-dom'

import bg from '@/assets/preload-bg@2x.png'
import inner from '@/assets/preload-inner@2x.png'
import * as API from '@/api/index'

import './index.scss'

const getInfo = async () => {
  const data = await API.getList({ type: 1 })
  return data.data
}

function Index() {
  const history = useHistory()

  const updateInfo = async () => {
    getInfo().then(res => console.info(res))

    const update = await API.updateInfo({
      name: 'Jhon',
      phone: '18888888888',
      password: 'xxxxxxxx'
    })
    console.info(update)
  }

  const toDetail = () => {
    history.push('/detail')
  }

  return (
    <div className="page">
      <div className="logo" onClick={updateInfo}>
        <img className="bg" src={bg} alt="" />
        <img className="inner" src={inner} alt="" />
      </div>
      <div>首页</div>

      <button className="btn" onClick={toDetail}>
        点击跳转至详情页
      </button>
    </div>
  )
}

export default Index
