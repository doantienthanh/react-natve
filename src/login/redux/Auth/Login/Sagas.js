import { loginApi } from '../../../api/Auth';
import * as loginType from './ActionTypes';
import * as loginActions from './Action';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { takeLatest, call } from 'redux-saga/effects';
function* login(action) {
  try {
    const response = yield call(loginApi, action.payload);
    // 
    console.log(response);
  } catch (error) {
    console.log(error);
    console.log('fail');
  }
}

const rootSagaLogin = () => [takeLatest(loginType.LOGIN, login)];
export default rootSagaLogin();
