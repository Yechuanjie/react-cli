import axios, { AxiosRequestConfig, Method } from 'axios'
import envConfig from '@/config'
import { Toast } from 'antd-mobile'
import { getHttpStatusText } from './status'
// import { LoadingElement } from '@/components/loading'
/**
 * 接口返回类型 (根据后端返回的格式定义)
 * @interface ResponseType
 */
export interface ResponseType<T> {
  data: T
  msg: string
  code: number
}

const TIMEOUT = 5000
const TOAST_DURATION = 2

const initAxios = (loading?: boolean) => {
  /* 创建一个axios实例 */
  const AxiosInstance = axios.create({
    baseURL: envConfig.BASE_URL,
    timeout: TIMEOUT,
    withCredentials: false
  })

  // request interceptor
  AxiosInstance.interceptors.request.use(config => {
    if (loading) Toast.loading('加载中')
    // 使用自定义loading
    // if (loading) Toast.loading(LoadingElement, TIMEOUT)
    // 自定义headers
    config.headers = {
      'Content-Type': 'application/json'
    }
    return config
  })

  // response interceptor
  AxiosInstance.interceptors.response.use(
    response => {
      Toast.hide()
      if (response && response.status && response.status !== 200) {
        Toast.info(getHttpStatusText(response.status), TOAST_DURATION)
        return Promise.reject(response || 'error')
      } else {
        return Promise.resolve(response)
      }
    },
    error => {
      Toast.hide()
      Toast.info(getHttpStatusText(null, error), TOAST_DURATION)
      return Promise.reject(error)
    }
  )

  return AxiosInstance
}

/**
 * 封装request
 *
 * @param {string} url
 * @param {Method} method
 * @param {*} [data]
 * @param {boolean} [loading]
 * @returns {Promise<ResponseType>}
 */
export default function request(
  url: string,
  method: Method,
  data?: {},
  loading?: boolean
): Promise<any> {
  /* 请求公共参数配置 */
  const publicParams = {
    env: envConfig.ENV_TYPE,
    mockType: 1,
    source: 'h5'
  }
  // 合并公共参数
  data = Object.assign({}, data, publicParams)
  const options: AxiosRequestConfig = {
    url,
    method,
    params: method.toUpperCase() === 'GET' || method.toUpperCase() === 'DELETE' ? data : null,
    data: method.toUpperCase() === 'POST' || method.toUpperCase() === 'PUT' ? data : null
  }

  const AxiosInstance = initAxios(loading)
  return new Promise((resolve, reject) => {
    AxiosInstance(options)
      .then(res => {
        const data = res.data as ResponseType<any>
        // 这里可以添加和后台的 status 约定
        // if (data.code !== 200) {
        //   Toast.info(data.msg)
        // }
        resolve(data.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
