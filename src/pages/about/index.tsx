import React from 'react'
import { useHistory } from 'react-router-dom'

import Logo from '@/components/logo'
import './index.scss'

const About = () => {
  const history = useHistory()
  const toDetail = () => {
    history.push('/detail')
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
      <button className="btn" onClick={toDetail}>
        路由测试
      </button>
    </div>
  )
}

export default About
