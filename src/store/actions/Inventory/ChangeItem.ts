import { ThunkAction } from 'redux-thunk';
import { CheckInventory } from './CheckInventory';
import { CreateItem } from './CreateItem';
import { DeleteItem } from './DeleteItem';
interface IPayload {
  name: string;
  description: string;
  itemId: number;
  cell: number;
  count: number;
  inventoryId: number;
}

export const ChangeItem = ({ itemId, ...filder }: IPayload): ThunkAction<void, any, any, any> => async (dispatch) => {
  try {
    dispatch(DeleteItem(itemId));
    dispatch(CreateItem(filder));
    dispatch(CheckInventory());
  } catch (error) {
    console.log(error);
  }
};
