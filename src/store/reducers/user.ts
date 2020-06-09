import { SET_USER_INFO } from '@/constants/index'

export const INITIAL_STATE: AppUserInfo = {
  nickName: ''
}

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        ...action.value
      }
    default:
      return state
  }
}
