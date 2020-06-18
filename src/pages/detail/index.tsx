import React from 'react'
import Logo from '@/components/logo'

import './index.scss'

function Detail() {
  return (
    <div className="detail-page">
      <Logo></Logo>
      <div className="desc">详情页， 不带tabbar</div>
    </div>
  )
}

export default Detail
