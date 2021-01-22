import { ThunkAction } from 'redux-thunk';
import { CheckInventory } from './CheckInventory';
import { CreateItem } from './CreateItem';
import { DeleteItem } from './DeleteItem';
interface IPayload {
  name?: string;
  description?: string;
  itemId?: number;
  cell?: number;
  count?: number;
  inventoryId?: number;
}

export const ChangeItem = ({
  name,
  description,
  itemId,
  cell,
  count,
  inventoryId,
}: IPayload): ThunkAction<void, any, any, any> => async (dispatch) => {
  try {
    dispatch(DeleteItem(itemId));
    dispatch(CreateItem({ name, description, cell, count, inventoryId }));
    dispatch(CheckInventory());
  } catch (error) {
    console.log(error);
  }
};
