import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { urlInventory3050 } from '../url';
interface IItems {
  cell: number;
  count: number;
  description: string;
  id: number;
  inventoryId: number;
  name: string;
}
interface IPayload {
  userId: number;
  items: IItems;
}

type CheckAuthAction = {
  type: 'INVENTORY_CHECK';
  payload: IPayload;
};

export const CheckInventory = (): ThunkAction<void, any, any, CheckAuthAction> => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const { data } = await axios.get(`${urlInventory3050}/inventory`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    console.log('checkIventory');

    dispatch({
      type: 'INVENTORY_CHECK',
      payload: {
        userId: data.data.userId,
        items: data.data.items,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
