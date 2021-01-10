import React from 'react';
import styles from './InventoryItem.module.scss';
interface IProps {
  name?: string;
  description?: string;
  count?: number | string;
}
export const InventoryItem: React.FC<IProps> = ({ name = '', description = '', count = '' }) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{name}</div>
      <div className={styles.count}> {count && `count: ${count}`}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
