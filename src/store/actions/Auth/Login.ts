import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
interface IPayload {
  email: string;
  password: string;
}
type RegistrAction = {
  type: 'AUTH_LOGIN';
  payload: IPayload;
};

export const Login = (email: string, password: string): ThunkAction<void, any, any, RegistrAction> => async (
  dispatch
) => {
  try {
    const payload: IPayload = {
      email,
      password,
    };
    const { data } = await axios.post('http://localhost:3051/auth', payload);

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
