import {
  LOGIN_SUCESS,
  SILENT_LOGIN,
  SIGNOUT
} from '../actions/accountActions'


const INITIAL_STATE = {
  user: null
}

const accountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCESS: {
      return {
        ...state,
        user: action.payload.user
      }
    }
    case SILENT_LOGIN: {
      return {
        ...state,
        user: action.payload.user
      }
    }
    case SIGNOUT: {
      return {
        ...state,
        user: null
      }
    }
    default: {
      return state
    }
  }
}

export default accountReducer