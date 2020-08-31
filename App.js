/**
 * This is a simple to do app
 * example of redux
 */
import React from 'react';
import {Provider} from 'react-redux';
import Home from './src/screens/Home';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistStor} from './src/store/Store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStor}>
        <Home />
      </PersistGate>
    </Provider>
  );
};

export default App;
