import Immutable from 'seamless-immutable';
import { AppTypes } from './actions';
import { makeReducerCreator } from '../../utils/reduxUtils';

export const INITIAL_STATE = Immutable({
  loading: null,
  isSkip: false,
});

const markSkipIntro = (state, { isSkip }) =>
  state.merge({
    isSkip: isSkip,
  });

const ACTION_HANDLERS = {
  [AppTypes.MARK_SKIP_INTRO]: markSkipIntro,
};

export default makeReducerCreator(INITIAL_STATE, ACTION_HANDLERS);