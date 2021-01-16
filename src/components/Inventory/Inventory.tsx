import React from 'react';
import { useSelector } from 'react-redux';
import { InventoryCreateItem } from './CreateItem/InventoryCreateItem';
import styles from './Inventory.module.scss';
import { InventoryItem } from './InventoryItem/InventoryItem';
export const Inventory: React.FC = () => {
  const inventoryItems = useSelector((state) => state?.Inventory?.items || []);
  let itemsGrid = inventoryItems.map((el, index) => {
    return <InventoryItem key={`Inventory-${index}`} name={el.name} count={el.count} id={el.id} />;
  });
  console.log(itemsGrid);

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
