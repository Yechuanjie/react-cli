import { lazy } from 'react'
const About = lazy(() => import('@/pages/about'))
const Index = lazy(() => import('@/pages/index'))
const Detail = lazy(() => import('@/pages/detail'))

export interface RouteConfig {
  path: string
  component?: any
  exact?: boolean
  routes?: Array<RouteConfig>
  redirect?: string
}

export const routes: RouteConfig[] = [
  {
    path: '/index',
    component: Index,
    exact: true,
    routes: []
  },
  {
    path: '/about',
    component: About,
    exact: true
  },
  {
    path: '/detail',
    component: Detail,
    exact: true
  }
]
