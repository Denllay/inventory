import React, { useContext } from 'react';
import styles from './InventoryItem.module.scss';
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import { MoveItem } from '../../../store/actions/Inventory/MoveItem';
import { Link } from 'react-router-dom';
import { InventoryContext } from '../../../Context/InventoryContext';
import DeleteIcon from '../../../assets/svg/DeleteIcon.svg';
import ReviewIcon from '../../../assets/svg/ReviewIcon.svg';
interface IProps {
  name: string;
  count: number | string;
  id: number;
  cell: number;
  color: string;
}

export const InventoryItem: React.FC<IProps> = ({ color, name, count, id, cell }) => {
  const dispatch = useDispatch();
  const setConfirmModal = useContext(InventoryContext);

  const onDeleteItem = () => {
    setConfirmModal({ type: 'delete-item', payload: { id } });
  };
  const [{ isDragging }, drag] = useDrag({
    item: { id, cell, type: ItemTypes.ITEM },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult && item.id !== dropResult.id) {
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
          <Link to={`/item/${id}`} className={styles.svg}>
            <span dangerouslySetInnerHTML={{ __html: ReviewIcon }} />
          </Link>
          <span onClick={onDeleteItem} dangerouslySetInnerHTML={{ __html: DeleteIcon }} className={styles.svg} />
        </div>
      </div>
    </div>
  );
};
