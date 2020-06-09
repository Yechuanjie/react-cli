import request from './request'

export const getList = (params: { type: number }) => request('/api/getInfo', 'GET', { ...params }, true)

export const updateInfo = (params: { name: string; phone: string; password: string }) =>
  request('/api/updateInfo', 'POST', { ...params }, true)
