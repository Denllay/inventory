import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IBlockInventory } from '../../types/inventoryBlock';
import InventoryChangeItem from './ChangeItem/InventoryChangeItem';
import { InventoryCreateItem } from './CreateItem/InventoryCreateItem';
import styles from './Inventory.module.scss';
import { InventoryItem } from './InventoryItem/InventoryItem';
export const Inventory: React.FC = () => {
  const inventoryItems = useSelector((state) => state?.Inventory?.items || []);
  const [blockInventory, setBlockInventory] = useState<IBlockInventory>({ type: 'create' });

  let itemSortItem = inventoryItems.reduce((acc, el) => {
    acc[el.cell] = el;
    return acc;
  }, Array.from({ length: InventoryItem.length - 1 }));

  let itemsGrid = itemSortItem.map((el, index) => {
    const [_, color, name] = el.name.match(/(.*)(?:-|\s)(.*)/);

    return el ? (
      <InventoryItem
        setBlockInventory={setBlockInventory}
        key={`Inventory-${index}`}
        name={name}
        cell={el.cell}
        color={color}
        count={el.count}
        id={el.id}
      />
    ) : (
      false
    );
  });

  return (
    <div className={styles.inventory}>
      <div className={styles.inventory_content}>
        <div className={styles.container__invent}>{itemsGrid}</div>
        {blockInventory.type === 'create' ? (
          <InventoryCreateItem />
        ) : (
          <InventoryChangeItem itemId={blockInventory.payload} setBlockInventory={setBlockInventory} />
        )}
      </div>
    </div>
  );
};
