import React, { SyntheticEvent, useState } from 'react';
import styles from './AuthModal.module.scss';
import { ModalTypes } from '../../types/modals';
import { useDispatch } from 'react-redux';
import { Registr } from '../../store/actions/Auth/Registr';
import { Login } from '../../store/actions/Auth/Login';
import SvgArrowDown from '../Icon/ArrowDown';
import SvgRegIcon from '../Icon/RegIcon';
import SvgProfileIcon from '../Icon/ProfileIcon';

interface IProps {
  modal: ModalTypes | null;
  onClickModal(e: SyntheticEvent): void;
  hiddenModal(): void;
  onClickModalAuth(e: SyntheticEvent): void;
}

export const AuthModal: React.FC<IProps> = ({ onClickModalAuth, modal, onClickModal, hiddenModal }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confPassword, setConfPassword] = useState<string>('');
  const dispatch = useDispatch();
  ////
  const OnclickReg = (e: React.FormEvent): void => {
    // Регестрация
    e.preventDefault();
    let emailStatus = /\w+@\w+\..+/i.test(email); // Проверка email на валидность
    let similarityPassword = password === confPassword; // Проверка паролей на сходство
    if (emailStatus && password.length >= 6 && similarityPassword) {
      dispatch(Registr(email, password));
      hiddenModal();
      setEmail('');
      setPassword('');
      setConfPassword('');
    } else {
      console.log('введите данные правильно'); // Change
    }
  };
  const OnclickLogin = (e: React.FormEvent) => {
    // Логин
    e.preventDefault();
    let emailStatus = /\w+@\w+\..+/i.test(email);
    if (emailStatus && password.length >= 6) {
      dispatch(Login(email, password));
      hiddenModal();
      setEmail('');
      setPassword('');
    }
  };
  return (
    <div
      className={modal ? `${styles.modal}` : `${styles.modal} ${styles.display_none}`}
      onClick={onClickModal}
      id="modal"
    >
      <div className={styles.container}>
        <form className={styles.form} onSubmit={modal === 'sign-in' ? OnclickReg : OnclickLogin}>
          <label className={styles.label} htmlFor="mail">
            Mail
            <SvgArrowDown className={styles.svg_label} />
          </label>
          <input
            className={styles.input}
            type="email"
            placeholder="Write your email"
            name="mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className={styles.label} htmlFor="password">
            Password
            <SvgArrowDown className={styles.svg_label} />
          </label>
          <input
            className={`${styles.input} ${styles.password_input}`}
            type="password"
            placeholder={modal === 'sign-in' ? 'Pick a password' : 'Enter password'}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className={modal === 'sign-in' ? `${styles.input} ${styles.password_input}` : `${styles.display_none}`}
            type="password"
            placeholder="Repeat the invented password"
            name="password"
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
          />
          <div className={styles.button_block}>
            <button type="submit" className={styles.submit}>
              <SvgRegIcon className={styles.svg_button} />
              {modal === 'sign-in' ? 'Sign in' : 'Login'}
            </button>
            <button
              type="button"
              id={modal === 'sign-in' ? 'login' : 'sign-in'}
              className={styles.button_acc}
              onClick={onClickModalAuth}
            >
              <SvgProfileIcon className={styles.svg_button} />
              {modal === 'sign-in' ? 'I have an account' : "I don't have an account"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
