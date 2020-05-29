import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './index.scss'
import Loading from '../../components/loading'

const PreLoad = () => {
  const history = useHistory()
  const toIndx = () => {
    history.push('/index')
  }
  
  return (
    <div className="page">
      <div>preload page...</div>
      <div onClick={toIndx}>点击跳转到首页</div>
    </div>
  )
}

export default PreLoad
