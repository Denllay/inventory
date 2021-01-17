import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { CheckInventory } from './CheckInventory';
interface IPayload {
  cell: number;
}
export const MoveItem = (itemId: number, itemMoveCell: number): ThunkAction<void, any, any, any> => async (
  dispatch
) => {
  try {
    const token = localStorage.getItem('token');
    const Payload: IPayload = {
      cell: Number(itemMoveCell),
    };
    const { data } = await axios.post(`http://localhost:3050/inventory/${itemId}`, Payload, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    dispatch(CheckInventory());
  } catch (error) {
    console.log(error);
  }
};
