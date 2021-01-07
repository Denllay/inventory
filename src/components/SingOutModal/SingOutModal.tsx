import React, { SyntheticEvent } from 'react';
import styles from './SingOutModal.module.scss';
import { useDispatch } from 'react-redux';

interface IProps {
  modal: boolean;
  onClickModal(e: SyntheticEvent): void;
  clickYes(): void;
}

export const SingOutModal: React.FC<IProps> = ({ modal, onClickModal, clickYes }) => {
  const dispatch = useDispatch();
  return (
    <div id="modal" onClick={onClickModal} className={modal ? styles.modal : styles.modal_none}>
      <div className={styles.modal__container}>
        <div className={styles.title}>Please confirm action</div>
        <div className={styles.button__block}>
          <button className={`${styles.button}  ${styles.button_yes}`} onClick={clickYes}>
            OK
          </button>
          <button id="modal" className={`${styles.button}  ${styles.button_no}`} onClick={onClickModal}>
            CANEL
          </button>
        </div>
      </div>
    </div>
  );
};
