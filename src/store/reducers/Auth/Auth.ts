import { Action } from 'redux';
import { Actions } from '../../types';

interface IState {
  isAuth: boolean;
}

const initialState: IState = {
  isAuth: false,
};

export const Auth = (state = initialState, action: Action<Actions>) => {
  switch (action.type) {
    case 'AUTH_REGISTR':
      return { ...state };
    case 'AUTH_LOGIN':
      return { ...state, isAuth: true };
    case 'AUTH_OUT':
      return { ...state, isAuth: false };
    default:
      return state;
  }
};
