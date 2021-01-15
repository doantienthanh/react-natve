import { all } from 'redux-saga/effects';
import loginSaga from './Auth/Login/Sagas';
export default function* rootSaga() {
  yield all([...loginSaga]);
}
