/**
 * This is a simple to do app
 * example of redux
 */
import React from 'react';
import {Provider} from 'react-redux';
import Home from './src/screens/Home';

import {store} from './src/store/Store';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
