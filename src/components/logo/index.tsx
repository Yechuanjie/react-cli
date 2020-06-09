import React from 'react'

import bg from '@/assets/preload-bg@2x.png'
import inner from '@/assets/preload-inner@2x.png'

import './index.scss'

function Logo() {
  return (
    <div className="logo">
      <img className="bg" src={bg} alt="" />
      <img className="inner" src={inner} alt="" />
    </div>
  )
}

export default Logo
