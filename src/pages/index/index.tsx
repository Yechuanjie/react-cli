import React, { useState, useEffect } from 'react'
import './index.scss'
import Loading from '../../components/loading'

function Index() {
  const [showLoading, setshowLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setshowLoading(false)
    }, 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="page">
      <Loading show={showLoading}></Loading>
      <div>首页...</div>
    </div>
  )
}

export default Index
