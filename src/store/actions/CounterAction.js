import {INC, DEC} from '../types/CounterTypes';

export const increment = () => ({
  type: INC,
});
export const decrement = () => ({
  type: DEC,
});
