import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CreateItem } from '../../../store/actions/Inventory/CreateItem';
import styles from './CreateItem.module.scss';
export const InventoryCreateItem: React.FC = () => {
  const dispatch = useDispatch();
  let [count, setCount] = useState<number>(1);
  let [hex, setHex] = useState<string>('ffffff');
  let [name, setName] = useState<string>('');
  let [description, setDesc] = useState<string>('');
  const inventoryItems = useSelector((state) => state?.Inventory || []);
  const onChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    e.target.scrollTop > 0 && (e.target.style.height = e.target.scrollHeight + 'px');
    setDesc(e.currentTarget.value);
  };
  ///
  const onChangeName = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.value.length < 10 && setName(e.currentTarget.value);
  };
  const minusCount = (): void => {
    count !== 1 && setCount((count -= 1));
  };
  const onChangeHex = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let sucsess = /^[\w0-9]*$/.test(e.target.value) && e.target.value.length !== 7;
    sucsess && setHex(e.target.value);
  };
  ///
  const onRandomColor = (e: React.FormEvent): void => {
    e.preventDefault();
    setHex(Math.floor(Math.random() * 16777215).toString(16));
  };
  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.length >= 3 && name.trim() !== '' && hex.length === 6) {
      let itemColorAndName: string = `${hex}-${name}`;

      let cell = inventoryItems.items.reduce((acc, el) => (acc.cell > el.cell ? acc : el), { cell: -1 }).cell + 1;
      cell < 30 &&
        dispatch(
          CreateItem({
            name: itemColorAndName,
            description,
            count: Number(count),
            cell,
            inventoryId: inventoryItems.userId,
          })
        );
      setCount(1);
      setName('');
      setDesc('');
      setHex('ffffff');
    }
  };
  let colorStyle = {
    background: `#${hex}`,
  };
  return (
    <div className={styles.create_modal}>
      <form className={styles.form} onSubmit={onSubmitForm}>
        <button className={styles.submit} type="submit">
          Create
        </button>
        <div className={styles.from_content}>
          <h3 className={styles.label}>Nickname:</h3>
          <input
            className={styles.input}
            autoComplete="off"
            name="nickName"
            type="text"
            placeholder="Write a nickname..."
            value={name}
            onChange={onChangeName}
          />
          <div className={styles.color_block}>
            <h3 className={styles.label}>Color:</h3>
            <div className={styles.color_text}>
              <div className={styles.color} style={colorStyle}></div>
              <input
                className={`${styles.input} ${styles.input_color}`}
                name="color"
                type="text"
                value={hex}
                onChange={onChangeHex}
                autoComplete="off"
              />
              <button className={styles.color_button} onClick={onRandomColor}>
                Random
              </button>
            </div>
          </div>
          <div className={styles.count_block}>
            <h3 className={styles.label}>Item:</h3>
            <div className={styles.item_block}>
              <div className={styles.item_count}>{count}</div>
              <div className={styles.set_count}>
                <div className={styles.item_plus} onClick={() => setCount((count += 1))}></div>
                <div className={styles.item_minus} onClick={minusCount}>
                  <div />
                </div>
              </div>
            </div>
          </div>
          <h3 className={styles.label}>Description:</h3>
          <textarea
            className={`${styles.input} ${styles.textarea}`}
            onChange={onChangeTextArea}
            placeholder="Write something..."
            autoComplete="off"
            value={description}
          />
        </div>
      </form>
    </div>
  );
};
