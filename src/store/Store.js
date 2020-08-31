import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {CounterReducer} from './reduces/CounterReducer';
import Astorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: Astorage,
};

const persistedReducer = persistReducer(persistConfig, CounterReducer);
const store = createStore(persistedReducer);
const persistStor = persistStore(store);
export {store, persistStor};
