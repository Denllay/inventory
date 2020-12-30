import { AUTH_REGISTR } from '../types';

interface IState {
  isAuth: boolean;
}

const initialState: IState = {
  isAuth: false,
};

export const auth = (state = initialState, action: any) => {
  switch (action.type) {
    case AUTH_REGISTR:
      return { isAuth: true };
    default:
      return state;
  }
};
