import React from 'react'
import './App.scss'
import RouterView from './router'
import AppTabBar from '@/components/tabbar'

import config from '@/config'

console.info(config)

function App() {
  return (
    <div>
      <RouterView></RouterView>
      <AppTabBar></AppTabBar>
    </div>
  )
}

export default App
