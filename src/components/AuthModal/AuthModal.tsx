import React, { SyntheticEvent, useState } from 'react';
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
        <h2 className={styles.container__title}>{translateModalType(modal)}</h2>
        <form className={styles.form} onSubmit={modal === 'sign-up' ? OnclickReg : OnclickLogin}>
          <input
            type="text"
            placeholder="Email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm password"
            className={modal === 'sign-up' ? `${styles.input}` : `${styles.display_none}`}
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
          />
          <input type="submit" placeholder="Sing in" value="Submit" className={styles.submit} />
        </form>
      </div>
    </div>
  );
};
