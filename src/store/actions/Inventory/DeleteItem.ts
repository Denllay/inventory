import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { CheckInventory } from './CheckInventory';

type CheckAuthAction = {
  type: 'INVENTORY_DELETE';
};

export const DeleteItem = (itemId: number): ThunkAction<void, any, any, CheckAuthAction> => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    await axios.delete(`http://localhost:3050/inventory/${itemId}`, {
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
