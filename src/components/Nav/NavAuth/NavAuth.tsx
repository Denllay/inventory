import React, { useContext } from 'react';
import styles from './NavAuth.module.scss';
import { ModalTypes } from '../../../types/modals';
import { navContext } from '../../../Context/NavContext';

export const NavAuth: React.FC = () => {
  const NavState = useContext(navContext);

  return (
    <nav>
      <ul className={styles.header__list}>
        <li className={styles.list__item}>
          <svg
            width="25"
            height="25"
            viewBox="0 0 20 20"
            fill="none"
            data-modal-name={'sign-in' as ModalTypes}
            onClick={NavState.onClickModalAuth}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.88609 0H14.9254C17.445 0 19.5 2 19.5 4.44V15.56C19.5 18.01 17.445 20 14.9047 20H9.87576C7.35611 20 5.29083 18.01 5.29083 15.57V10.77H11.6932L10.041 12.37C9.73119 12.67 9.73119 13.16 10.041 13.46C10.1959 13.61 10.4024 13.68 10.6089 13.68C10.8051 13.68 11.0117 13.61 11.1666 13.46L14.1819 10.55C14.3368 10.41 14.4194 10.21 14.4194 10C14.4194 9.8 14.3368 9.6 14.1819 9.46L11.1666 6.55C10.8568 6.25 10.3508 6.25 10.041 6.55C9.73119 6.85 9.73119 7.34 10.041 7.64L11.6932 9.23H5.29083V4.45C5.29083 2 7.35611 0 9.88609 0ZM0.5 9.9999C0.5 9.5799 0.855229 9.2299 1.2815 9.2299H5.29052V10.7699H1.2815C0.855229 10.7699 0.5 10.4299 0.5 9.9999Z"
              fill="white"
              data-modal-name={'sign-in' as ModalTypes}
            />
          </svg>
        </li>
      </ul>
    </nav>
  );
};