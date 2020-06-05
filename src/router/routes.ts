import Loadable from 'loadable-components'
/* Import the components by Loadable */
const AppTabBar = Loadable(() => import('@/components/tabbar'))
const About = Loadable(() => import('@/pages/about'))
const Index = Loadable(() => import('@/pages/index'))

interface routerConfigModel {
  path: string
  component?: any
  exact?: boolean
  children?: Array<routerConfigModel>
  redirect?: string
}
const routes: routerConfigModel[] = [
  {
    path: '/',
    component: AppTabBar,
    exact: true,
    redirect: '/index',
    children: [
      {
        path: '/index',
        component: Index
      },
      {
        path: '/about',
        component: About
      }
    ]
  }
]

export default routes
