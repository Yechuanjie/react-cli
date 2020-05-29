import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Loadable from 'loadable-components'

/* Import the components by Loadable */
const Preload = Loadable(() => import('../pages/preload'))
const Index = Loadable(() => import('../pages/index'))

const routes = [
  {
    path: '/',
    component: Preload,
    exact: true
  },
  {
    path: '/index',
    component: Index
  }
]

/* Use components to define routes */
const RouterView = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}></Route>
      ))}
    </Switch>
  </BrowserRouter>
)
export default RouterView
