import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { urlInventory3050 } from '../url';
import { CheckInventory } from './CheckInventory';

interface IPayload {
  name?: string;
  description?: string;
  count?: number;
  cell?: number;
  inventoryId?: number;
}
export const CreateItem = (payload: IPayload): ThunkAction<void, any, any, any> => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    await axios.post(`${urlInventory3050}/inventory`, [payload], {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    dispatch(CheckInventory());
  } catch (error) {
    console.log(error);
  }
};
