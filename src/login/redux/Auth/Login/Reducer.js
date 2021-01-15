import * as actionLogin from './ActionTypes';

const initData = {
  data: [],
  error: null,
  token: null,
  loginLoading: false,
};

const loginReducer = (state = initData, action) => {
  switch (action.type) {
    case actionLogin.LOGIN:
      return { ...state, loginLoading: true };
    case actionLogin.LOGIN_SUCCESSFULLY:
      return {
        ...state,
        data: action.payload,
        token: action.token,
        loginLoading: false,
      };
    case actionLogin.LOGIN_FAIL:
      return {
        ...state,
        error: action.error,
        loginLoading: false,
      };
    case actionLogin.LOGOUT:
      return {
        ...state,
        token: null,
        loginLoading: false,
      };
    default:
      return state;
  }
};
export default loginReducer;
