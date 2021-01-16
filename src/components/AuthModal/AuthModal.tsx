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
  onClickModalAuth(e: SyntheticEvent): void;
}

export const HeaderModal: React.FC<IProps> = ({ onClickModalAuth, modal, onClickModal, hiddenModal }) => {
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
            <svg
              className={styles.label_svg}
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.99828 7.71406L13.0083 1.70406L11.5953 0.289062L6.99828 4.88906L2.40228 0.289062L0.988281 1.70306L6.99828 7.71406Z"
                fill="white"
              />
            </svg>
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
            <svg
              className={styles.label_svg}
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.99828 7.71406L13.0083 1.70406L11.5953 0.289062L6.99828 4.88906L2.40228 0.289062L0.988281 1.70306L6.99828 7.71406Z"
                fill="white"
              />
            </svg>
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
              <svg
                className={styles.svg_button}
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.88609 0.5H14.9254C17.445 0.5 19.5 2.5 19.5 4.94V16.06C19.5 18.51 17.445 20.5 14.9047 20.5H9.87576C7.35611 20.5 5.29083 18.51 5.29083 16.07V11.27H11.6932L10.041 12.87C9.73119 13.17 9.73119 13.66 10.041 13.96C10.1959 14.11 10.4024 14.18 10.6089 14.18C10.8051 14.18 11.0117 14.11 11.1666 13.96L14.1819 11.05C14.3368 10.91 14.4194 10.71 14.4194 10.5C14.4194 10.3 14.3368 10.1 14.1819 9.96L11.1666 7.05C10.8568 6.75 10.3508 6.75 10.041 7.05C9.73119 7.35 9.73119 7.84 10.041 8.14L11.6932 9.73H5.29083V4.95C5.29083 2.5 7.35611 0.5 9.88609 0.5ZM0.5 10.4999C0.5 10.0799 0.855229 9.7299 1.2815 9.7299H5.29052V11.2699H1.2815C0.855229 11.2699 0.5 10.9299 0.5 10.4999Z"
                  fill="black"
                />
              </svg>
              {modal === 'sign-in' ? 'Sign in' : 'Login'}
            </button>
            <button
              type="button"
              data-modal-name={modal === 'sign-in' ? 'login' : 'sign-in'}
              className={styles.button_acc}
              onClick={onClickModalAuth}
            >
              <svg
                className={styles.svg_button}
                width="16"
                height="21"
                viewBox="0 0 16 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.295 5.79105C13.295 8.72808 10.9401 11.0831 8.00102 11.0831C5.06291 11.0831 2.70703 8.72808 2.70703 5.79105C2.70703 2.85402 5.06291 0.5 8.00102 0.5C10.9401 0.5 13.295 2.85402 13.295 5.79105ZM8 20.5019C3.66237 20.5019 0 19.7968 0 17.0768C0 14.3558 3.68538 13.6758 8 13.6758C12.3386 13.6758 16 14.3808 16 17.1008C16 19.8218 12.3146 20.5019 8 20.5019Z"
                  fill="white"
                />
              </svg>
              {modal === 'sign-in' ? 'I have an account' : "I don't have an account"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
