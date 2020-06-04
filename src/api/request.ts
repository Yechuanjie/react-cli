import axios, { AxiosRequestConfig, Method } from 'axios'
import qs from 'qs'
import envConfig from '@/config'
import { Toast } from 'antd-mobile'
import Loading from '@/components/loading'

interface ResponseType {
  data: any
  msg: string
  code: number
}

// 创建一个axios实例
const instance = axios.create({
  baseURL: envConfig.BASE_URL,
  timeout: 5000,
  withCredentials: false
})

// request interceptor
instance.interceptors.request.use(config => {
  Toast.loading('Loading', undefined, undefined, true)
  // 自定义headers
  config.headers = {
    'Content-Type': 'application/json'
    // 'xxx-token': 'user_token',
    // 'Access-Control-Allow-Origin': window.location.origin,
    // 'Access-Control-Allow-Credentials': 'true'
  }
  return config
})

// response interceptor
instance.interceptors.response.use(
  response => {
    setTimeout(() => {
      Toast.hide()
    }, 2000);
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

const publicParams = {
  env: 'test',
  mockType: 1,
  source: 'h5'
}

/**
 * 封装request
 *
 * @param {string} url
 * @param {Method} method
 * @param {*} [data]
 * @returns {Promise<ResponseType>}
 */
export default async function request(
  url: string,
  method: Method,
  data?: {}
): Promise<ResponseType> {
  // 合并公共参数
  data = Object.assign({}, data, publicParams)
  const options: AxiosRequestConfig = {
    url,
    method,
    params: method.toUpperCase() === 'GET' || method.toUpperCase() === 'DELETE' ? data : null,
    data:
      method.toUpperCase() === 'POST' || method.toUpperCase() === 'PUT' ? qs.stringify(data) : null
  }
  return new Promise((resolve, reject) => {
    instance(options)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
