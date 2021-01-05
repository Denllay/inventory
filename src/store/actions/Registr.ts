import axios from 'axios';
import { ThunkAction } from 'redux-thunk'; // <---
interface IPayload {
  email: string;
  password: string;
  confirmPassword: string;
}
type RegistrAction = {
  type: 'AUTH_REGISTR';
};

export const Registr = (email: string, password: string): ThunkAction<void, any, any, RegistrAction> => async (
  dispatch
) => {
  try {
    const payload: IPayload = {
      email,
      password,
      confirmPassword: password,
    };
    const { data } = await axios.post('http://localhost:3051/register', payload);
    console.log(data);

    dispatch({
      type: 'AUTH_REGISTR',
    });
  } catch (error) {
    console.log(error);
  }
};
