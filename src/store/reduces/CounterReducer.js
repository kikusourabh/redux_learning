import {INC, DEC} from '../types/CounterTypes';

const initialState = {
  counts: 0,
};

export const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return {
        ...state,
        counts: state.counts + 1,
      };
    case DEC:
      return {
        ...state,
        counts: state.counts - 1,
      };

    default:
      return state;
  }
};
