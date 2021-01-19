import React, { useContext } from 'react';
import styles from './NavAuth.module.scss';
import { ModalTypes } from '../../../types/modals';
import { navContext } from '../../../Context/NavContext';
import LoginIcon from '../../../assets/svg/LoginIcon.svg';
export const NavAuth: React.FC = () => {
  const NavState = useContext(navContext);

  return (
    <nav>
      <ul className={styles.header__list}>
        <li className={styles.list__item}>
          <span
            onClick={NavState.onClickModalAuth}
            dangerouslySetInnerHTML={{ __html: LoginIcon }}
            className={styles.svg}
            id={'sign-in' as ModalTypes}
          />
        </li>
      </ul>
    </nav>
  );
};
