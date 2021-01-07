import React from 'react';
import styles from './Nav.module.scss';
import { NavAuth } from './NavAuth/NavAuth';
import { NavInventory } from './NavInventory/NavInventory';
import { useSelector } from 'react-redux';
export const Nav: React.FC = () => {
  const isAuth: boolean = useSelector((state) => state.Auth.isAuth);

  return (
    <div className={styles.header_container}>
      <div className={styles.header__inner}>
        <h1 className={styles.header__logo}>Inventory</h1>

        {isAuth ? <NavInventory /> : <NavAuth />}
      </div>
    </div>
  );
};
