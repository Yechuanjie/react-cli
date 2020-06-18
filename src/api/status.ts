export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  CLIENT_ERROR: 400,
  AUTHENTICATE: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504
}

export const HTTP_TEXT = {
  OK: '200 - 请求成功',
  CREATED: '201 - 请求已创建',
  ACCEPTED: '202 - 请求已接受',
  CLIENT_ERROR: '400 - 错误请求! ',
  AUTHENTICATE: '401 - 用户没有权限! ',
  FORBIDDEN: '403 - 拒绝访问! ',
  NOT_FOUND: '404 - 请求错误, 未找到该资源! ',
  SERVER_ERROR: '500 - 服务器发生错误，请检查服务器! ',
  BAD_GATEWAY: '502 - 网关错误! ',
  SERVICE_UNAVAILABLE: '503 - 服务不可用，服务器暂时过载或维护! ',
  GATEWAY_TIMEOUT: '504 - 连接超时!'
}

export const getHttpStatusText = function (code: number | null, err?: any): string {
  if (err && err.response && err.response.status) {
    code = err.response.status
  }
  for (const key in HTTP_STATUS) {
    if (HTTP_STATUS[key] === code) {
      const text = HTTP_TEXT[key]
      return text
    }
  }
  if (typeof err === 'string' && err.indexOf('timeout') > -1) {
    return '请求超时，请稍后重试！'
  }
  if (typeof err === 'string' && err.indexOf('Network') > -1) {
    return '请求失败, 请检查网络连接'
  }
  return `未知错误`
}
