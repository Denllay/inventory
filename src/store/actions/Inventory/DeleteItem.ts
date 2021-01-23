import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { urlInventory3050 } from '../url';
import { CheckInventory } from './CheckInventory';

type CheckAuthAction = {
  type: 'INVENTORY_DELETE';
};

export const DeleteItem = (itemId: number): ThunkAction<void, any, any, CheckAuthAction> => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    await axios.delete(`${urlInventory3050}/inventory/${itemId}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    console.log('DeleteItem');
    dispatch(CheckInventory());
  } catch (error) {
    console.log(error);
  }
};
