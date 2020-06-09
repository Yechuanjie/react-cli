import { lazy } from 'react'
const About = lazy(() => import('@/pages/about'))
const Index = lazy(() => import('@/pages/index'))
const Detail = lazy(() => import('@/pages/detail'))

export interface routerConfigModel {
  path: string
  component?: any
  exact?: boolean
  children?: Array<routerConfigModel>
  redirect?: string
  tab?: boolean
}

export const routes: routerConfigModel[] = [
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
