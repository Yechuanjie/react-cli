import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setAppUserInfo } from '@/store/actions/user'

import Logo from '@/components/logo'
import * as API from '@/api/index'

import './index.scss'

type PageStateProps = {
  user: AppUserInfo
}

function Index() {
  const userInfo = useSelector((state: PageStateProps) => state.user)
  const dispath = useDispatch()

  const updateInfo = async () => {
    // get 请求
    const list = await API.getList({ type: 1 })
    console.info(list)

    // post 请求
    const update = await API.updateInfo({
      name: 'Jhon',
      phone: '18888888888',
      password: 'xxxxxxxx'
    })
    console.info(update)

    // 测试 dispath action
    dispath(
      setAppUserInfo({
        userId: '413',
        nickName: 'developer',
        sex: 1
      })
    )
  }

  const history = useHistory()
  const toDetail = () => {
    history.push('/detail')
  }

  return (
    <div className="page">
      <div onClick={updateInfo}>
        <Logo></Logo>
      </div>
      <div className="welcome">hello {userInfo.nickName}!</div>

      <button className="btn" onClick={toDetail}>
        点击跳转至详情页
      </button>
    </div>
  )
}

export default Index
