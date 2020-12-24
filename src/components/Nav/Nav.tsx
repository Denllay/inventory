import React from "react";
import s from "./Nav.module.scss";

interface INav {
  Onclick(e: any): void;
}
export const Nav: React.FC<INav> = ({ Onclick }) => {
  return (
    <div className={s.header_container}>
      <div className={s.header__inner}>
        <h1 className={s.header__logo}>Inventory</h1>
        <nav>
          <ul className={s.header__list}>
            <li className={s.list__item} id="singUp" onClick={Onclick}>
              Sing up
            </li>
            <li className={s.list__item} id="logIn" onClick={Onclick}>
              Log in
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
