import React from 'react';
import styles from './InventoryItem.module.scss';
import { useDispatch } from 'react-redux';
import { DeleteItem } from '../../../store/actions/Inventory/DeleteItem';

interface IProps {
  name?: string;
  description?: string;
  count?: number | string;
  id?: any;
}

export const InventoryItem: React.FC<IProps> = ({ name = '', description = '', count = '', id = '' }) => {
  const dispatch = useDispatch();
  const onDeleteItem = (e: React.MouseEvent<HTMLElement>) => {
    const Itemid = Number(e.currentTarget.parentElement.id);
    dispatch(DeleteItem(Itemid));
  };
  return (
    <div className={styles.card} id={id}>
      <div className={styles.title}>{name}</div>
      <div className={styles.count}> {count && `count: ${count}`}</div>
      <div className={styles.description}>{description}</div>
      {name && <i data-trash="trash" onClick={onDeleteItem} className={`fas fa-trash ${styles.icon_trash}`}></i>}
    </div>
  );
};
