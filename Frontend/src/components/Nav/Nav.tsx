import React, { SyntheticEvent } from 'react';
import styles from './Nav.module.scss';
import { ModalTypes } from '../../types/modals';

interface INav {
  onClick(e: SyntheticEvent): void;
}

export const Nav: React.FC<INav> = ({ onClick }) => {
  return (
    <div className={styles.header_container}>
      <div className={styles.header__inner}>
        <h1 className={styles.header__logo}>Inventory</h1>
        <nav>
          <ul className={styles.header__list}>
            <li className={styles.list__item} data-modal-name={'sign-up' as ModalTypes} onClick={onClick}>
              Sing up
            </li>
            <li className={styles.list__item} data-modal-name={'login' as ModalTypes} onClick={onClick}>
              Log in
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
