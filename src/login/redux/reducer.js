import loginReducer from './Auth/Login/Reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  loginReducer,
});

export default rootReducer;
