import { all } from 'redux-saga/effects';
import appSagas from './appRedux/sagas';
// import loginSagas from './LoginRedux/sagas';

export default function* root() {
  yield all([...appSagas]);
}
