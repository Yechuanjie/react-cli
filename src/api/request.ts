import axios, { AxiosRequestConfig, Method } from 'axios'
import qs from 'qs'
import envConfig from '@/config'
import { Toast } from 'antd-mobile'
import { getHttpStatusText } from './status'
/**
 * 接口返回类型 (根据后端的统一格式)
 * @interface ResponseType
 */
interface ResponseType {
  data: any
  msg: string
  code: number
}

/* 请求公共参数配置 */
const publicParams = {
  env: envConfig.ENV_TYPE,
  mockType: 1,
  source: 'h5'
}

/* 创建一个axios实例 */
const AxiosInstance = axios.create({
  baseURL: envConfig.BASE_URL,
  timeout: 5000,
  withCredentials: false
})

// request interceptor
AxiosInstance.interceptors.request.use(config => {
  // 自定义headers
  config.headers = {
    'Content-Type': 'application/json'
  }
  return config
})

// response interceptor
AxiosInstance.interceptors.response.use(
  response => {
    const res = response
    if (res.status && res.status !== 200) {
      Toast.info(getHttpStatusText(res.status))
      return Promise.reject(res || 'error')
    } else {
      return Promise.resolve(res)
    }
  },
  error => {
    Toast.info(getHttpStatusText(null, error))
    return Promise.reject(error)
  }
)

/**
 * 封装request
 *
 * @param {string} url
 * @param {Method} method
 * @param {*} [data]
 * @returns {Promise<ResponseType>}
 */
export default function request(url: string, method: Method, data?: {}): Promise<ResponseType> {
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
    AxiosInstance(options)
      .then(res => {
        const data = res.data as ResponseType
        // 这里可以添加和后台的 status 约定
        // if (data.code !== 200) {
        //   Toast.info(data.msg)
        // }
        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
