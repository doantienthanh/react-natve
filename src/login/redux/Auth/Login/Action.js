import * as LoginTypes from './ActionTypes';

// action login
export const login = (data) => ({
  type: LoginTypes.LOGIN,
  payload: data,
});

export const loginSuccessful = (response, token) => ({
  type: LoginTypes.LOGIN_SUCCESSFULLY,
  payload: response,
  token: token,
});
export const loginFail = (error) => ({
  type: LoginTypes.LOGIN_FAIL,
  payload: error,
});
export const logout = () => {};
