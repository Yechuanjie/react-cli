import Loadable from 'loadable-components'
/* Import the components by Loadable */
const About = Loadable(() => import('@/pages/about'))
const Index = Loadable(() => import('@/pages/index'))

interface routerConfigModel {
  path: string
  component?: any
  exact?: boolean
}
const routes: routerConfigModel[] = [
  {
    path: '/',
    component: Index,
    exact: true
  },
  {
    path: '/about',
    component: About
  }
]

export default routes
