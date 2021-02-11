import React, { Dispatch, SetStateAction, TextareaHTMLAttributes, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ChangeItem } from '../../../store/actions/Inventory/ChangeItem';
import { IBlockInventory } from '../../../types/inventoryBlock';
import styles from './ChangeItem.module.scss';
interface IProps {
  itemId: number;
  setBlockInventory: Dispatch<SetStateAction<IBlockInventory>>;
}
export const InventoryChangeItem: React.FC<IProps> = ({ itemId, setBlockInventory }) => {
  const { id, name: nameColor, description: descriptionItem, count: countItem, cell, InventoryId } = useSelector(
    (state) => state?.Inventory?.items || []
  ).filter(({ id }) => id === itemId)[0];
  const [_, colorItem, name] = nameColor.match(/(.*)(?:-|\s)(.*)/);
  const [itemName, setItemName] = useState<string>(name);
  const [color, setColor] = useState<string>(colorItem);
  const [description, setDescription] = useState<string>(descriptionItem);
  let [count, setCount] = useState<number>(countItem);
  const dispatch = useDispatch();
  ///
  const onChangeName = (e: React.FormEvent<HTMLInputElement>) => {
    const maxNameLength = 10;
    e.currentTarget.value.length <= maxNameLength && setItemName(e.currentTarget.value);
  };
  const onChangeColor = (e: React.FormEvent<HTMLInputElement>) => {
    let sucsess = /^[\w0-9]*$/.test(e.currentTarget.value) && e.currentTarget.value.length !== 7;
    sucsess && setColor(e.currentTarget.value);
  };
  const onChangeDesc = (e: React.FormEvent<HTMLTextAreaElement>) => {
    (e.target as HTMLTextAreaElement).scrollTop > 0 &&
      ((e.target as HTMLTextAreaElement).style.height = (e.target as HTMLTextAreaElement).scrollHeight + 'px');
    const maxLength = 300;
    e.currentTarget.value.length <= maxLength && setDescription(e.currentTarget.value);
  };
  const onClickCount = (e: React.SyntheticEvent<HTMLDivElement>) => {
    if (!(e.target instanceof HTMLDivElement)) return;
    const meaningCount = e.target.dataset['count'] === 'plus' ? 1 : -1;
    if ((meaningCount === -1 && count > 1) || meaningCount === 1) {
      setCount((count += meaningCount));
    }
  };
  const onRandomColor = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };
  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

    let sucsess = itemName === name && color === colorItem && description === descriptionItem && count === countItem;
    if (!sucsess && !!itemName.trim()) {
      dispatch(
        ChangeItem({
          name: `${color}-${itemName}`,
          description: description,
          count: count,
          itemId: itemId,
          cell: cell,
          inventoryId: InventoryId,
        })
      );
      setBlockInventory({ type: 'create' });
    } else {
      console.log('Введите данные правильно!'); // Change
    }
  };
  ///
  useEffect(() => {
    setItemName(name);
    setColor(colorItem);
    setCount(countItem);
    setDescription(descriptionItem);
  }, [id]);
  return (
    <div className={styles.create_modal}>
      <form className={styles.form} onSubmit={onSubmitForm}>
        <input type="submit" className={styles.submit} value="Change" />
        <div className={styles.from_content}>
          <h3 className={styles.label}>Nickname:</h3>
          <input
            className={styles.input}
            autoComplete="off"
            name="nickName"
            type="text"
            placeholder="Write a nickname..."
            value={itemName}
            onChange={onChangeName}
          />
          <div className={styles.color_block}>
            <h3 className={styles.label}>Color:</h3>
            <div className={styles.color_text}>
              <div className={styles.color} style={{ background: `#${color}` }}></div>
              <input
                className={`${styles.input} ${styles.input_color}`}
                name="color"
                type="text"
                autoComplete="off"
                value={color}
                onChange={onChangeColor}
              />
              <button className={styles.color_button} onClick={onRandomColor}>
                Random
              </button>
            </div>
          </div>
          <div className={styles.count_block}>
            <h3 className={styles.label}>Item:</h3>
            <div className={styles.item_block}>
              <span className={styles.item_count}>{count}</span>
              <div className={styles.set_count} onClick={onClickCount}>
                <div className={styles.item_plus} data-count="plus"></div>
                <div className={styles.item_minus} data-count="minus"></div>
              </div>
            </div>
          </div>
          <h3 className={styles.label}>Description:</h3>
          <textarea
            className={`${styles.input} ${styles.textarea}`}
            placeholder="Write something..."
            autoComplete="off"
            value={description}
            onChange={onChangeDesc}
          />
        </div>
      </form>
    </div>
  );
};
