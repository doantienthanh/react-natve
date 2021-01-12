import { Data } from '../data/Data';
import { ADD, DELETE } from '../action/TypeAction';
import { createStore } from 'redux';
const initialState = {
  products: Data,
  nameApp: 'Thanh Doan',
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, ...(state.products[0].name = 'thanh') };
    case DELETE:
      return { ...state, ...(state.products[0].name = 'Thanhdoan') };
    default:
      return state;
  }
};
export const store = createStore(reducer);
