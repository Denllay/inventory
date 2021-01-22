import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { CheckInventory } from './CheckInventory';

interface IPayload {
  name: string;
  description: string;
  count: number;
  cell: number;
  inventoryId: number;
}
export const CreateItem = ({
  name,
  description,
  count,
  cell,
  inventoryId,
}: IPayload): ThunkAction<void, any, any, any> => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const payload: IPayload[] = [
      {
        name,
        description,
        count,
        cell,
        inventoryId,
      },
    ];
    await axios.post('http://localhost:3050/inventory', payload, {
      headers: {
        jwt: token,
      },
    });
    dispatch(CheckInventory());
  } catch (error) {
    console.log(error);
  }
};
