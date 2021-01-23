import React, { SyntheticEvent, useContext } from 'react';
import { navContext } from '../../../Context/NavContext';
import { SignOutTypes } from '../../../types/signOut';
import SvgProfileIcon from '../../Icon/ProfileIcon';
import SvgExitAccount from '../../Svg/ExitAccount';
import styles from './NavInventory.module.scss';
export const NavInventory: React.FC = () => {
  const NavState = useContext(navContext);
  const openModal = (e: SyntheticEvent) => {
    let type = e.currentTarget.parentElement.dataset['modal'] as SignOutTypes;
    NavState.setModalConfirm({ type: type });
  };
  return (
    <nav>
      <ul className={styles.nav__list}>
        <li className={styles.li} data-modal="sign-out">
          <SvgExitAccount onClick={openModal} className={styles.svg_exit} />
        </li>
        <li className={`${styles.li} ${styles.profile}`}>
          <SvgProfileIcon className={styles.svg_profile} />
        </li>
      </ul>
    </nav>
  );
};
