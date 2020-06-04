import request from './request'

export const getSentence = (parmas: { DateKey: string; cid: string; model: string }) =>
  request('/CttApi/GetSentence', 'GET', { ...parmas })
