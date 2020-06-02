import React from 'react'
import { useHistory } from 'react-router-dom'
import './index.scss'

const About = () => {
  const history = useHistory()
  const toIndx = () => {
    history.push('/index')
  }

  return (
    <div className="page">
      <div className="title">About page...</div>
      <div className="in" onClick={toIndx}>
        点击跳转到首页
      </div>
    </div>
  )
}

export default About
