import { LOGIN, LOGOUT } from '@/constants/index'

const INITIAL_STATE = {
  isLogin: false
}

export default function login(state = INITIAL_STATE, action: { type: string; value: any }) {
  switch (action.type) {
    case LOGIN:
      return {
        isLogin: true
      }
    case LOGOUT:
      return {
        isLogin: false
      }
    default:
      return state
  }
}
