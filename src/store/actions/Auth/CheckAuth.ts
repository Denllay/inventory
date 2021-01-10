import axios from 'axios';
import { ThunkAction } from 'redux-thunk';

type CheckAuthAction = {
  type: 'AUTH_OUT' | 'AUTH_LOGIN';
};

export const CheckAuth = (): ThunkAction<void, any, any, CheckAuthAction> => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    await axios.get('http://localhost:3050/inventory', {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    console.log('ckechAuth');

    dispatch({
      type: 'AUTH_LOGIN',
    });
  } catch (error) {
    console.log(error);
    localStorage.removeItem('token');
    dispatch({
      type: 'AUTH_OUT',
    });
  }
};
