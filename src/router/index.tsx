import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { routes } from './routes'
import AppTabBar from '@/components/tabbar'

/* Use components to define routes */
const RouterView = () => (
  <BrowserRouter basename="/react-cli">
    <AppTabBar></AppTabBar>
    <Switch>
      {routes.map(route => (
        <Route key={route.path} path={route.path} component={route.component} exact={route.exact}></Route>
      ))}
      <Redirect to="/index"></Redirect>
    </Switch>
  </BrowserRouter>
)
export default RouterView
