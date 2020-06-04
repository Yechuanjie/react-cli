import request from './request'

export const getMainPageInfo = (parmas: { mockType: number; source: string; useType: number }) => {
  request('/userapi/realUser/getMainPageInfo', 'post', { ...parmas })
}