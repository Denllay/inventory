import { ThunkAction } from 'redux-thunk';
type SingOutAction = {
  type: 'AUTH_OUT';
};

export const SingOut = (): ThunkAction<void, any, any, SingOutAction> => async (dispatch) => {
  try {
    localStorage.removeItem('token');
    dispatch({
      type: 'AUTH_OUT',
    });
  } catch (error) {
    console.log(error);
  }
};
