import React from "react";
import s from "./HeaderModal.module.scss";
interface IProps {
  modal: string;
  OnclickModal(e: any): void;
}

export const HeaderModal: React.FC<IProps> = ({ modal, OnclickModal }) => {
  return (
    <div
      className={
        modal !== "none" ? `${s.modal}` : `${s.modal} ${s.display_none}`
      }
      onClick={OnclickModal}
      id="modal"
    >
      <div className={s.container}>
        <h2 className={s.container__title}>
          {modal === "singUp" ? "Sing Up" : "Log In"}
        </h2>
        <form action="" className={s.form}>
          <input
            type="text"
            placeholder="Name"
            className={modal === "singUp" ? `${s.input}` : `${s.display_none}`}
          />
          <input type="email" placeholder="Email" className={s.input} />
          <input type="password" placeholder="Password" className={s.input} />
          <input
            type="password"
            placeholder="Confirm password"
            className={modal === "singUp" ? `${s.input}` : `${s.display_none}`}
          />
          <input
            type="submit"
            placeholder="Sing in"
            value="Submit"
            className={s.submit}
          />
        </form>
      </div>
    </div>
  );
};
