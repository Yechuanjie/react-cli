import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routes from './routes'

/* Use components to define routes */
const RouterView = () => (
  <BrowserRouter basename="/react-cli">
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
