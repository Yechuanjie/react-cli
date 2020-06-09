import { SET_USER_INFO } from '@/constants'

export const setAppUserInfo = (userInfo: AppUserInfo) => {
  return {
    type: SET_USER_INFO,
    value: userInfo
  }
}