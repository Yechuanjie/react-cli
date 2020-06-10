import React from 'react'

import bg from '@/assets/preload-bg@2x.png'
import inner from '@/assets/preload-inner@2x.png'

import './index.scss'

type Iprops = {
  size?: 'small' | 'normal' | undefined
}

function Logo(props: Iprops) {
  return (
    <div
      className="logo"
      style={{
        width: props.size === 'small' ? '1rem' : '2rem',
        height: props.size === 'small' ? '1rem' : '2rem'
      }}>
      <img className="bg" src={bg} alt="" />
      <img className="inner" src={inner} alt="" />
    </div>
  )
}

export default Logo
