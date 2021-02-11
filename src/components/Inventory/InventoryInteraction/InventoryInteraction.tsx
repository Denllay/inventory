import React, { Dispatch, SetStateAction } from 'react';
import { IBlockInventory } from '../../../types/inventoryBlock';
import { InventoryChangeItem } from '../ChangeItem/InventoryChangeItem';
import { InventoryCreateItem } from '../CreateItem/InventoryCreateItem';
import styles from './InventoryInteraction.module.scss';
interface IProps {
  blockInventory: IBlockInventory;
  setBlockInventory: Dispatch<SetStateAction<IBlockInventory>>;
}
export const InventoryInteraction: React.FC<IProps> = ({ blockInventory, setBlockInventory }) => {
  const { type, payload } = blockInventory;
  return (
    <>
      {type === 'create' ? (
        <InventoryCreateItem />
      ) : (
        <InventoryChangeItem itemId={payload.id} setBlockInventory={setBlockInventory} />
      )}
    </>
  );
};
