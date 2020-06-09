import { LOGIN, LOGOUT } from '@/constants/index'

const INITIAL_STATE = {
  isLogin: false
}

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true
      }
    case LOGOUT:
      return {
        ...state,
        isLogin: false
      }
    default:
      return state
  }
}
