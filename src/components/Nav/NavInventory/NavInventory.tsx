import React, { useContext } from 'react';
import { navContext } from '../../../Context/NavContext';
import styles from './NavInventory.module.scss';
export const NavInventory: React.FC = () => {
  const NavState = useContext(navContext);
  return (
    <nav>
      <ul className={styles.nav__list}>
        <li className={styles.list__item} onClick={NavState.onClickModalSingOut}>
          Sing out
        </li>
      </ul>
    </nav>
  );
};
