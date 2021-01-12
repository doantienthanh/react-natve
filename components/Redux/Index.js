import React from 'react';
import Control from './Control';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ADDITION, SUBTRACTION } from './ActionType';
const defaultState = { value: 0, name: 'thanh' };

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADDITION:
      return { ...state, value: state.value + 1 };
    case SUBTRACTION:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);

const Index = () => {
  return (
    <Provider store={store}>
      <Control />
    </Provider>
  );
};
export default Index;
