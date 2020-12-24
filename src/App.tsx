import React, { useState } from "react";
import { Nav } from "./components/Nav/Nav";
import s from "./App.module.scss";
import { HeaderModal } from "./components/HeaderModal/HeaderModal";
export const App: React.FC = () => {
  const [modal, setModal] = useState("none");

  const onClickModal = (e: any): void => {
    setModal(e.target.id);
  };
  const OnclickModal = (e: any) => {
    e.target.id !== "modal" ? false : setModal("none");
  };
  return (
    <div className="wrapper">
      <header className={s.header}>
        <Nav Onclick={onClickModal} />
        <HeaderModal modal={modal} OnclickModal={OnclickModal} />
      </header>
    </div>
  );
};
