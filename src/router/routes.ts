import { lazy } from 'react'
const Index = lazy(() => import(/* webpackChunkName: "Index" */ '@/pages/index'))
const About = lazy(() => import(/* webpackChunkName: "About" */ '@/pages/about'))
const Detail = lazy(() => import(/* webpackChunkName: "Detail" */ '@/pages/detail'))

export interface RouteConfig {
  path: string
  component?: any
  exact?: boolean
}

export const routes: RouteConfig[] = [
  {
    path: '/index',
    component: Index,
    exact: true
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
