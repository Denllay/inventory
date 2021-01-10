import { Actions } from '../../types';
interface IItems {
  cell: number;
  count: number;
  description: string;
  id: number;
  inventoryId: number;
  name: string;
}

interface IInventory {
  type: Actions;
  payload?: {
    userId: number;
    items: IItems;
  };
}
interface IState {
  userId: number;
}

const initialState: IState = {
  userId: 0,
};

export const Inventory = (state = initialState, { type, payload }: IInventory) => {
  switch (type) {
    case 'INVENTORY_CHECK':
      return { ...state, userId: payload.userId, items: payload.items };
    default:
      return state;
  }
};
