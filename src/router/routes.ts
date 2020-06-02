import Loadable from 'loadable-components'
/* Import the components by Loadable */
const About = Loadable(() => import('@/pages/about'))
const Index = Loadable(() => import('@/pages/index'))

const routes = [
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
