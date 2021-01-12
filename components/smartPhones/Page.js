import React from 'react';
import Home from './view/Home';
import { Provider } from 'react-redux';
import { store } from './reducers/Case';

const Page = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};
export default Page;
