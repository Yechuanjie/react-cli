import React from 'react'
import './App.scss'
import RouterView from './router'

import config from '@/config'

console.info(config.ENV_TYPE)

function App() {
  return <RouterView></RouterView>
}

export default App
