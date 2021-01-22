type InventoryBlockTypes = 'create' | 'change';
export interface IBlockInventory {
  type: InventoryBlockTypes;
  payload?: {
    id: number;
  };
}
