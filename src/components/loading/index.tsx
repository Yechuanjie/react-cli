import React from 'react'
import './index.scss'

/* 加载文案 */
type Iprops = {
  txt?: string | null
  show: boolean
}

export default function Loading(props: Iprops) {
  return props.show ? (
    <div className="custom-loading">
      <div className="custom-loading-round"></div>
      <div className="custom-loading-text">{props.txt}</div>
    </div>
  ) : null
}

/* loading组件的 React.Element */
export const LoadingElement = React.createElement(
  'div',
  { className: 'custom-loading' },
  React.createElement('div', { className: 'custom-loading-round' }),
  React.createElement('div', { className: 'custom-loading-text' }, '加载中')
)
