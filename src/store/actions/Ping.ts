import axios from 'axios';
import { ThunkAction } from 'redux-thunk';

type PingAction = {
  type: 'PING';
  payload: any;
};

export const Ping = (): ThunkAction<void, any, any, PingAction> => async (dispatch) => {
  try {
    const { data } = await axios.get('http://localhost:3051/ping');
    console.log(data);
    dispatch({
      type: 'PING',
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
