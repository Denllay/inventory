import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { urlInventory3051 } from '../url';
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
    await axios.post(`${urlInventory3051}/register`, payload);

    dispatch({
      type: 'AUTH_REGISTR',
    });
  } catch (error) {
    console.log(error);
  }
};
