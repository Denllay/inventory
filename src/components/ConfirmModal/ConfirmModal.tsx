import React, { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import styles from './ConfirmModal.module.scss';
import { useDispatch } from 'react-redux';
import { SingOut } from '../../store/actions/Auth/SingOut';
import { ISignOut } from '../../types/signOut';
import { DeleteItem } from '../../store/actions/Inventory/DeleteItem';
interface IProps {
  modal: ISignOut;
  onClickModal(e: SyntheticEvent): void;
  setModalConfirm: Dispatch<SetStateAction<ISignOut>>;
}

export const ConfirmModal: React.FC<IProps> = ({ modal, onClickModal, setModalConfirm }) => {
  const dispatch = useDispatch();
  const clickYes = (): void => {
    dispatch(SingOut());
    setModalConfirm({ type: null });
  };
  const deleteItem = (): void => {
    dispatch(DeleteItem(Number(modal.payload.id)));
    setModalConfirm({ type: null });
  };
  return (
    <div id="modal" onClick={onClickModal} className={modal.type ? styles.modal : styles.modal_none}>
      <div className={styles.modal__container}>
        <div className={styles.title}>Please confirm action</div>
        <div className={styles.button__block}>
          <button
            className={`${styles.button}  ${styles.button_yes}`}
            onClick={modal.type === 'sign-out' ? clickYes : deleteItem}
          >
            Yes
          </button>
          <button id="modal" className={`${styles.button}  ${styles.button_no}`} onClick={onClickModal}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};
