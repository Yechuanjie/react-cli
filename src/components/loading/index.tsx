import React from 'react'
import './index.scss'

/* 加载文案 */
type Iprops = {
  txt?: string | null
  show: boolean
}

function Loading(props: Iprops) {
  return props.show ? (
    <div className="custom-loading">
      <div className="custom-loading-round"></div>
      <div className="custom-loading-text">{props.txt}</div>
    </div>
  ) : null
}

export default Loading
