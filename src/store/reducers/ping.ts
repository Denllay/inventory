import { Action } from 'redux';
import { Actions } from '../types';

interface IState {
  ping: boolean;
}

const initialState: IState = {
  ping: false,
};

export const auth = (state = initialState, action: Action<Actions>) => {
  switch (action.type) {
    case 'PING':
      return { ping: true };
    default:
      return state;
  }
};
