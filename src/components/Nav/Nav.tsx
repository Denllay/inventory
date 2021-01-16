import React from 'react';
import styles from './Nav.module.scss';
import { NavAuth } from './NavAuth/NavAuth';
import { NavInventory } from './NavInventory/NavInventory';
interface IProps {
  isAuth: boolean;
}
export const Nav: React.FC<IProps> = ({ isAuth }) => {
  return (
    <div className={styles.header_container}>
      <div className={styles.header__inner}>
        <div className={styles.logo}>
          <div className={styles.logo_icon}></div>
          <h2 className={styles.logo_text}>Inventory</h2>
        </div>

        {isAuth ? <NavInventory /> : <NavAuth />}
      </div>
    </div>
  );
};
