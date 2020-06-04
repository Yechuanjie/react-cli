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
  OK: '成功',
  CREATED: '已创建',
  ACCEPTED: '已接受',
  CLIENT_ERROR: '错误请求',
  AUTHENTICATE: '未授权',
  FORBIDDEN: '没有访问权限',
  NOT_FOUND: '请求资源未找到',
  SERVER_ERROR: '服务器错误',
  BAD_GATEWAY: '网关错误',
  SERVICE_UNAVAILABLE: '服务不可用',
  GATEWAY_TIMEOUT: '网关超时'
}

export const getHttpStatusText = function (code: number): string {
  for (const key in HTTP_STATUS) {
    if (HTTP_STATUS[key] === code) {
      const text = HTTP_TEXT[key]
      return text
    } else {
      break
    }
  }
  return '未知错误'
}
