import React, { Suspense } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { routes } from './routes'
import AppTabBar from '@/components/tabbar'
import { LoadingElement } from '@/components/loading'

/* Use components to define routes */
const RouterView = () => (
  <BrowserRouter basename="/react-cli">
    <AppTabBar></AppTabBar>
    <Suspense fallback={LoadingElement}>
      <Switch>
        {routes.map(route => (
          <Route key={route.path} path={route.path} component={route.component} exact={route.exact}></Route>
        ))}
        <Redirect to="/index"></Redirect>
      </Switch>
    </Suspense>
  </BrowserRouter>
)
export default RouterView
