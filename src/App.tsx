import React, { SyntheticEvent, useState } from "react";
import { Nav } from "./components/Nav/Nav";
import s from "./App.module.scss";
import { HeaderModal } from "./components/HeaderModal/HeaderModal";
export const App: React.FC = () => {
  const [modal, setModal] = useState("none");

  const onClickModal = (e: SyntheticEvent): void => {
    setModal(e.target["id"]);
  };

  const onHiddenModal = (e: SyntheticEvent) => {
    e.target["id"] !== "modal" ? false : setModal("none");
  };
  return (
    <div className="wrapper">
      <header className={s.header}>
        <Nav onClick={onClickModal} />
        <HeaderModal modal={modal} onClickModal={onHiddenModal} />
      </header>
    </div>
  );
};
