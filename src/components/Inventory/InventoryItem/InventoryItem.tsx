import React from 'react';
import styles from './InventoryItem.module.scss';
import { useDispatch } from 'react-redux';
import { DeleteItem } from '../../../store/actions/Inventory/DeleteItem';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import { MoveItem } from '../../../store/actions/Inventory/MoveItem';
interface IProps {
  name: string;
  count: number | string;
  id: number;
  cell: number;
  color: string;
}

export const InventoryItem: React.FC<IProps> = ({ color, name, count, id, cell }) => {
  const dispatch = useDispatch();
  const onDeleteItem = () => {
    const Itemid = Number(id);
    dispatch(DeleteItem(Itemid));
  };
  const [{ isDragging }, drag] = useDrag({
    item: { cell, type: ItemTypes.ITEM },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        dispatch(MoveItem(dropResult.id, item.cell));
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.ITEM,
    drop: () => ({ id: id }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActiveStyle = {
    background: '#24272b',
  };
  const isActive = canDrop && isOver;

  return (
    <div className={styles.card} ref={drag}>
      <div className={styles.card_container} style={isActive ? { ...isActiveStyle } : {}} ref={drop}>
        <div className={styles.name_block}>
          <div className={styles.color} style={{ background: `#${color}` }} />
          <div className={styles.text_block}>
            <div className={styles.title}>{name}</div>
            <div className={styles.count}>
              Item: <span className={styles.count_span}>{count && `${count}`}</span>
            </div>
          </div>
        </div>
        <div className={styles.block_icon}>
          <svg
            className={styles.icon_item}
            width="19"
            height="19"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.6358 16L9.1299 10.4931C6.68059 12.2345 3.30553 11.8085 1.36564 9.51327C-0.574254 7.21802 -0.431813 3.81918 1.69332 1.69429C3.8179 -0.431535 7.21707 -0.574592 9.51275 1.3652C11.8084 3.30499 12.2346 6.68038 10.4931 9.1299L15.999 14.6368L14.6368 15.999L14.6358 16ZM5.78012 1.92742C3.9532 1.92701 2.37705 3.20942 2.00592 4.99825C1.6348 6.78707 2.57071 8.59066 4.24702 9.31704C5.92332 10.0434 7.8793 9.49295 8.93071 7.99891C9.98212 6.50487 9.84 4.47789 8.59039 3.14519L9.17326 3.72323L8.51621 3.06811L8.50465 3.05655C7.78381 2.33127 6.80268 1.92466 5.78012 1.92742Z"
              fill="white"
            />
          </svg>
          <svg
            className={styles.icon_item}
            width="18"
            height="19"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onDeleteItem}
          >
            <path
              d="M11.2 16H3.2C2.31634 16 1.6 15.2837 1.6 14.4V4H0V2.4H3.2V1.6C3.2 0.716344 3.91634 0 4.8 0H9.6C10.4837 0 11.2 0.716344 11.2 1.6V2.4H14.4V4H12.8V14.4C12.8 15.2837 12.0837 16 11.2 16ZM3.2 4V14.4H11.2V4H3.2ZM4.8 1.6V2.4H9.6V1.6H4.8ZM9.6 12.8H8V5.6H9.6V12.8ZM6.4 12.8H4.8V5.6H6.4V12.8Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
