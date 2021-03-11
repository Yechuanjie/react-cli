import request from '../request'

interface InfoListItem {
  name: string
  desc: string
}

class IndexApi {
  static getList = (params: { type: number }): Promise<InfoListItem[]> =>
    request('/api/getInfo', 'GET', params, true)

  static updateInfo = (params: {
    name: string
    phone: string
    password: string
  }): Promise<boolean> => request('/api/updateInfo', 'POST', params, true)
}

export default IndexApi
