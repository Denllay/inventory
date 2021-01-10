import React, { SyntheticEvent, useState, Dispatch, SetStateAction } from 'react';
import styles from './CreateItemModal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { CreateItem } from '../../store/actions/Inventory/CreateItem';
interface IProps {
  modal: boolean;
  onClickModal(e: SyntheticEvent): void;
  hiddenModal: Dispatch<SetStateAction<boolean>>;
}
export const CreateItemModal: React.FC<IProps> = ({ modal, onClickModal, hiddenModal }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>('');
  const [description, setDesc] = useState<string>('');
  const [count, setCount] = useState<string>('');
  const inventoryItems = useSelector((state) => state?.Inventory?.items || []);
  const onChangeCount = (e: React.FormEvent<HTMLInputElement>) => {
    !e.currentTarget.value.match(/[A-Za-zА-Яа-яЁё]/gi) && setCount(e.currentTarget.value);
  };
  const onChangeDesc = (e: React.FormEvent<HTMLInputElement>) => setDesc(e.currentTarget.value);
  const onChangeName = (e: React.FormEvent<HTMLInputElement>) => setName(e.currentTarget.value);
  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.length >= 3 && count.length > 0) {
      const cell = !!inventoryItems.length ? inventoryItems.reduce((acc, el) => (acc.b > el.b ? acc : el)).cell + 1 : 0;
      dispatch(CreateItem({ name, description, count: Number(count), cell, inventoryId: inventoryItems.userId }));
      hiddenModal(false);
    }
  };
  return (
    <div className={modal ? `${styles.modal}` : `${styles.display_none}`} id="modal" onClick={onClickModal}>
      <div className={styles.container}>
        <div className={styles.title}>Create Item</div>
        <form className={styles.form} onSubmit={onSubmitForm}>
          <input type="text" placeholder="Name" value={name} onChange={onChangeName} className={styles.input} />
          <input
            type="text"
            placeholder="Description"
            onChange={onChangeDesc}
            value={description}
            className={styles.input}
          />
          <input type="text" placeholder="Count" onChange={onChangeCount} value={count} className={styles.input} />
          <button value="Submit" className={styles.submit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
