import request from './request'

export const getList = (params: { type: number }) => request('/api/getInfo', 'GET')
