import axios from 'axios';
import { AUTH_REGISTR } from '../types';
interface Idispatch {
  type: string;
  payload: string;
}
export const ping = () => async (dispatch: any) => {
  try {
    const { data } = await axios.get('http://localhost:3051/ping');
    console.log(data);

    dispatch({
      type: AUTH_REGISTR,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
