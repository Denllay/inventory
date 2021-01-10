import React, { SyntheticEvent, useContext } from 'react';
import { navContext } from '../../../Context/NavContext';
import styles from './NavInventory.module.scss';
export const NavInventory: React.FC = () => {
  const NavState = useContext(navContext);
  const openModal = (e: SyntheticEvent) => {
    const stateFUnc = (e.target as HTMLDivElement).dataset['modal'];
    console.log(stateFUnc);
    switch (stateFUnc) {
      case 'createItem':
        NavState.setModalCreateItem(true);
        break;
      case 'singOut':
        NavState.setModalSingOut(true);
      default:
        false;
    }
  };
  return (
    <nav>
      <ul className={styles.nav__list}>
        <li className={styles.list__item} data-modal="createItem" onClick={openModal}>
          Create Item
        </li>
        <li className={styles.list__item} data-modal="singOut" onClick={openModal}>
          Sing out
        </li>
      </ul>
    </nav>
  );
};
