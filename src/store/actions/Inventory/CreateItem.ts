import axios from 'axios';
import { ThunkAction } from 'redux-thunk';

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
}: IPayload): ThunkAction<void, any, any, any> => async () => {
  try {
    const token = localStorage.getItem('token');
    const payload: IPayload[] = [
      {
        name: name,
        description: description,
        count: count,
        cell: cell,
        inventoryId: inventoryId,
      },
    ];
    await axios.post('http://localhost:3050/inventory', payload, {
      headers: {
        jwt: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
