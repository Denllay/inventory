import React from 'react';
import { useSelector } from 'react-redux';
import { InventoryCreateItem } from './CreateItem/InventoryCreateItem';
import styles from './Inventory.module.scss';
import { InventoryItem } from './InventoryItem/InventoryItem';
export const Inventory: React.FC = () => {
  const inventoryItems = useSelector((state) => state?.Inventory?.items || []);
  let itemSortItem = inventoryItems.reduce((acc, el) => {
    acc[el.cell] = el;
    return acc;
  }, Array.from({ length: InventoryItem.length - 1 }));

  let itemsGrid = itemSortItem.map((el, index) => {
    return el ? (
      <InventoryItem key={`Inventory-${index}`} name={el.name} cell={el.cell} count={el.count} id={el.id} />
    ) : (
      false
    );
  });

  return (
    <div className={styles.inventory}>
      <div className={styles.add_item}></div>
      <div className={styles.inventory_content}>
        <div className={styles.container__invent}>{itemsGrid}</div>
        <InventoryCreateItem />
      </div>
    </div>
  );
};
