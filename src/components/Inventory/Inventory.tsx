import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Inventory.module.scss';
import { InventoryItem } from './InventoryItem/InventoryItem';
export const Inventory: React.FC = () => {
  const inventoryItems = useSelector((state) => state?.Inventory?.items || [undefined]);

  const items = inventoryItems.reduce((acc, el) => {
    !!el && (acc[el.cell] = el);
    return acc;
  }, Array.from({ length: 30 }));
  const InventoryGridItem = items.map((el, index) =>
    el ? (
      <InventoryItem key={`InventoryItem-${index}`} name={el.name} description={el.description} count={el.count} />
    ) : (
      <InventoryItem key={`InventoryItem-${index}`} />
    )
  );

  return (
    <div className={styles.inventory}>
      <div className={styles.container}></div>
      <div className={styles.container__invent}>{InventoryGridItem}</div>
    </div>
  );
};
