import { takeLatest, select } from 'redux-saga/effects';
import { AppTypes } from '../appRedux/actions';
import { NavigationUtils } from '../../navigation';

export function* startupSaga() {
  try {
    const { token } = yield select((state) => state.login);

    http.setAuthorizationHeader(token);

    if (token) {
      NavigationUtils.startMainContent();
    } else {
      NavigationUtils.startLoginContent();
    }
  } catch (error) {
    NavigationUtils.startLoginContent();
    console.log(error);
  }
}

const appSagas = () => {
  return [takeLatest(AppTypes.STARTUP, startupSaga)];
};

export default appSagas();