import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAppUserInfo } from '@/store/actions/user'

import Logo from '@/components/logo'
import List from '@/components/list'

import './index.scss'
import IndexApi from '@/api/index'
import { Toast } from 'antd-mobile'

type PageStateProps = {
  user: AppUserInfo
}

function Index() {
  const userInfo = useSelector((state: PageStateProps) => state.user)
  const dispath = useDispatch()

  const updateInfo = async () => {
    // 测试 dispath action
    dispath(
      setAppUserInfo({
        userId: '413',
        nickName: 'developer',
        sex: 1
      })
    )

    // get 请求
    const list = await IndexApi.getList({ type: 1 })
    console.info(list[0].name)

    // post 请求
    const update = await IndexApi.updateInfo({
      name: 'Jhon',
      phone: '18888888888',
      password: 'xxxxxxxx'
    })
    if (update) {
      Toast.info('更新成功')
    }
  }

  return (
    <div className="index-page">
      <div className="head" onClick={updateInfo}>
        <Logo size="small"></Logo>
        <h2 className="title">React H5开发模板</h2>
      </div>
      <div className="desc">基于 react + antd-mobile + ts 的 h5 开发模板</div>
      <div className="welcome">hello {userInfo.nickName} !</div>

      <List></List>
    </div>
  )
}

export default Index
