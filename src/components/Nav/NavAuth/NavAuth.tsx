import React, { useContext } from 'react';
import styles from './NavAuth.module.scss';
import { ModalTypes } from '../../../types/modals';
import { navContext } from '../../../Context/NavContext';

export const NavAuth: React.FC = () => {
  const NavState = useContext(navContext);

  return (
    <nav>
      <ul className={styles.header__list}>
        <li className={styles.list__item} data-modal-name={'sign-up' as ModalTypes} onClick={NavState.onClickModalAuth}>
          Sing up
        </li>
        <li className={styles.list__item} data-modal-name={'login' as ModalTypes} onClick={NavState.onClickModalAuth}>
          Log in
        </li>
      </ul>
    </nav>
  );
};
