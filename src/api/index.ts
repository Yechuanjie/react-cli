import { request } from 'http'

const api = ''
export default api

export const getList = (params: { deadline: string }) => {
  request('/shopapi/goodsActivation/addActivationCollection')
}
