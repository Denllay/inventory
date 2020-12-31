import React, { SyntheticEvent } from 'react';
import styles from './HeaderModal.module.scss';
import { ModalTypes } from '../../types/modals';
interface IProps {
  modal: ModalTypes | null;
  onClickModal(e: SyntheticEvent): void;
}

const translateModalType = (t: ModalTypes) =>
  ({
    'sign-in': 'Sign In',
    'sign-up': 'Sign up',
    login: 'Login',
  }[t]);

export const HeaderModal: React.FC<IProps> = ({ modal, onClickModal }) => {
  return (
    <div
      className={modal ? `${styles.modal}` : `${styles.modal} ${styles.display_none}`}
      onClick={onClickModal}
      data-close="modal"
    >
      <div className={styles.container}>
        <h2 className={styles.container__title}>{translateModalType(modal)}</h2>
        <form action="" className={styles.form}>
          <input
            type="text"
            placeholder="Name"
            className={modal === 'sign-up' ? `${styles.input}` : `${styles.display_none}`}
          />
          <input type="email" placeholder="Email" className={styles.input} />
          <input type="password" placeholder="Password" className={styles.input} />
          <input
            type="password"
            placeholder="Confirm password"
            className={modal === 'sign-up' ? `${styles.input}` : `${styles.display_none}`}
          />
          <input type="submit" placeholder="Sing in" value="Submit" className={styles.submit} />
        </form>
      </div>
    </div>
  );
};
