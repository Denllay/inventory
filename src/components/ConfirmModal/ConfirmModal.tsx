import React, { SyntheticEvent } from 'react';
import styles from './ConfirmModal.module.scss';
interface IProps {
  modal: boolean;
  onClickModal(e: SyntheticEvent): void;
  clickYes(): void;
}

export const ConfirmModal: React.FC<IProps> = ({ modal, onClickModal, clickYes }) => {
  return (
    <div id="modal" onClick={onClickModal} className={modal ? styles.modal : styles.modal_none}>
      <div className={styles.modal__container}>
        <div className={styles.title}>Please confirm action</div>
        <div className={styles.button__block}>
          <button className={`${styles.button}  ${styles.button_yes}`} onClick={clickYes}>
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
