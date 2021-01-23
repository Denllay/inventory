import React, { useContext } from 'react';
import styles from './NavAuth.module.scss';
import { ModalTypes } from '../../../types/modals';
import { navContext } from '../../../Context/NavContext';
import SvgLoginIcon from '../../Icon/LoginIcon';
export const NavAuth: React.FC = () => {
  const NavState = useContext(navContext);

  return (
    <nav>
      <ul className={styles.header__list}>
        <li className={styles.list__item}>
          <SvgLoginIcon onClick={NavState.onClickModalAuth} id={'sign-in' as ModalTypes} />
        </li>
      </ul>
    </nav>
  );
};
