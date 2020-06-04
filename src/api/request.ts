import axios, { AxiosRequestConfig, Method } from 'axios'
import qs from 'qs'
import envConfig from '@/config'
import { Toast } from 'antd-mobile'

interface ResponseType {
  data: any
  msg: string
  code: number
}

// 创建一个axios实例
const instance = axios.create()

// request interceptor
instance.interceptors.request.use(config => {
  Toast.loading('加载中...')
  // 自定义headers
  config.headers = {
    'Content-Type': 'application/json',
    'xxx-token': 'user_token'
  }
  // config.method
  return config
})

// response interceptor
instance.interceptors.response.use(
  response => {
    Toast.hide()
    const res = response.data
    if (res.status && res.status !== 200) {
      return Promise.reject(res || 'error')
    } else {
      return Promise.resolve(res)
    }
  },
  error => {
    Toast.hide()
    return Promise.reject(error)
  }
)

export default function request(url: string, method: Method, data?: any) {
  const options: AxiosRequestConfig = {
    baseURL: envConfig.BASE_URL,
    url,
    method,
    params: method.toUpperCase() === 'GET' || method.toUpperCase() === 'DELETE' ? data : null,
    data:
      method.toUpperCase() === 'POST' || method.toUpperCase() === 'PUT' ? qs.stringify(data) : null,
    timeout: 1000,
    withCredentials: true
  }
  return new Promise((resolve, reject) => {
    instance(options)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}
