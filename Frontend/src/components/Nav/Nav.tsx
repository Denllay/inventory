import React, { SyntheticEvent } from 'react';
import s from './Nav.module.scss';

interface INav {
  onClick(e: SyntheticEvent): void;
}
export const Nav: React.FC<INav> = ({ onClick }) => {
  return (
    <div className={s.header_container}>
      <div className={s.header__inner}>
        <h1 className={s.header__logo}>Inventory</h1>
        <nav>
          <ul className={s.header__list}>
            <li className={s.list__item} id="singUp" onClick={onClick}>
              Sing up
            </li>
            <li className={s.list__item} id="logIn" onClick={onClick}>
              Log in
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
