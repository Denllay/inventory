import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { urlInventory3051 } from '../url';
interface IPayload {
  email: string;
  password: string;
}
type LoginAction = {
  type: 'AUTH_LOGIN';
  payload: IPayload;
};

export const Login = (email: string, password: string): ThunkAction<void, any, any, LoginAction> => async (
  dispatch
) => {
  try {
    const payload: IPayload = {
      email,
      password,
    };
    const { data } = await axios.post(`${urlInventory3051}/auth`, payload);
    const userToken = data.data.jwt;
    localStorage.setItem('token', userToken);

    console.log('Вы успешно зарегестрировались'); // Change

    dispatch({
      type: 'AUTH_LOGIN',
      payload,
    });
  } catch (error) {
    console.log(error);
  }
};
