import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import routes from './routes'

/* Use components to define routes */
const RouterView = () => (
  <BrowserRouter basename="/react-cli">
    <Switch>
      {routes.map(route => (
        // <Route
        //   key={route.path}
        //   path={route.path}
        //   component={route.component}
        //   exact={route.exact}></Route>
        <div>
          {!route.redirect && (
            <Route path={route.path} component={route.component} exact={route.exact}></Route>
          )}
          {route.redirect && <Redirect to={route.path} exact={route.exact}></Redirect>}
        </div>
      ))}
    </Switch>
  </BrowserRouter>
)
export default RouterView
