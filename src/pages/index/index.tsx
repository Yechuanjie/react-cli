import React, { useEffect } from 'react'

import bg from '@/assets/preload-bg@2x.png'
import inner from '@/assets/preload-inner@2x.png'
import * as API from '@/api/index'
// import md5 from 'js-md5'

import './index.scss'

const getInfo = () => {
  API.getSentence({
    DateKey: '2020-06-04',
    cid: 'ios',
    model: 'ios13.2.3'
  }).then(res => {
    console.info('object', res)
  })
}

function Index() {
  useEffect(() => {
    getInfo()
  }, [])

  return (
    <div className="page">
      <div className="logo">
        <img className="bg" src={bg} alt="" />
        <img className="inner" src={inner} alt="" />
      </div>
      <div>首页...</div>
    </div>
  )
}

export default Index
