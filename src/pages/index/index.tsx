import React, { useState } from 'react'
import './index.scss'
import Loading from '../../components/loading'

function Index() {
  const [showLoading, setshowLoading] = useState(true)

  setTimeout(() => {
    setshowLoading(false)
  }, 2000)

  return (
    <div className="page">
      <Loading show={showLoading}></Loading>
      <div>首页...</div>
    </div>
  )
}

export default Index
