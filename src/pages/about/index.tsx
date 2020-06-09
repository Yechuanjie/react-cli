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
      <button className="btn" onClick={toIndx}>
        点击跳转到首页
      </button>
    </div>
  )
}

export default About
