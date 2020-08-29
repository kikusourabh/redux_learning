import {createStore} from 'redux';
import {CounterReducer} from './reduces/CounterReducer';

export const store = createStore(CounterReducer);
