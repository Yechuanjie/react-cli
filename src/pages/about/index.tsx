import React from 'react'
import { useHistory } from 'react-router-dom'

import Logo from '@/components/logo'
import './index.scss'

const About = () => {
  const history = useHistory()
  const toIndx = () => {
    history.push('/index')
  }

  return (
    <div className="about-page">
      <div style={{ marginTop: '1rem' }}>
        <Logo></Logo>
      </div>
      <div className="title">基于React的移动端开发模板</div>
      <div className="desc">
        项目地址：
        <a className="link" href="https://github.com/Yechuanjie/react-cli">
          https://github.com/Yechuanjie/react-cli
        </a>
      </div>
      <div className="author">项目作者：Yechuanjie</div>
      <button className="btn" onClick={toIndx}>
        回到首页
      </button>
    </div>
  )
}

export default About
