import React, { SyntheticEvent, useRef } from 'react';
import styles from './AuthModal.module.scss';
import { ModalTypes } from '../../types/modals';
import { useDispatch } from 'react-redux';
import { Registr } from '../../store/actions/Auth/Registr';
import { Login } from '../../store/actions/Auth/Login';

interface IProps {
  modal: ModalTypes | null;
  onClickModal(e: SyntheticEvent): void;
  hiddenModal(): void;
}

const translateModalType = (t: ModalTypes) =>
  ({
    'sign-in': 'Sign In',
    'sign-up': 'Sign up',
    login: 'Login',
  }[t]);

export const HeaderModal: React.FC<IProps> = ({ modal, onClickModal, hiddenModal }) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confPasswordRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  ////
  const OnclickReg = (e: React.FormEvent): void => {
    // Регестрация
    e.preventDefault();
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;
    const confPasswordValue = confPasswordRef.current.value;
    ///
    let emailStatus = /\w+@\w+\..+/i.test(emailValue); // Проверка email на валидность
    let similarityPassword = passwordValue === confPasswordValue; // Проверка паролей на сходство
    if (emailStatus && passwordValue.length >= 6 && similarityPassword) {
      dispatch(Registr(emailValue, passwordValue));
      hiddenModal();
    } else {
      console.log('введите данные правильно'); // Change
    }
  };
  const OnclickLogin = (e: React.FormEvent) => {
    // Логин
    e.preventDefault();
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;
    let emailStatus = /\w+@\w+\..+/i.test(emailValue);
    if (emailStatus && passwordValue.length >= 6) {
      dispatch(Login(emailValue, passwordValue));
      hiddenModal();
    }
  };
  return (
    <div
      className={modal ? `${styles.modal}` : `${styles.modal} ${styles.display_none}`}
      onClick={onClickModal}
      id="modal"
    >
      <div className={styles.container}>
        <h2 className={styles.container__title}>{translateModalType(modal)}</h2>
        <form className={styles.form} onSubmit={modal === 'sign-up' ? OnclickReg : OnclickLogin}>
          <input type="text" placeholder="Email" className={styles.input} ref={emailRef} />
          <input type="password" placeholder="Password" className={styles.input} ref={passwordRef} />
          <input
            type="password"
            placeholder="Confirm password"
            className={modal === 'sign-up' ? `${styles.input}` : `${styles.display_none}`}
            ref={confPasswordRef}
          />
          <input type="submit" placeholder="Sing in" value="Submit" className={styles.submit} />
        </form>
      </div>
    </div>
  );
};
