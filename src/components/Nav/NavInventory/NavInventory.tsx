import React, { SyntheticEvent, useContext } from 'react';
import { navContext } from '../../../Context/NavContext';
import styles from './NavInventory.module.scss';
export const NavInventory: React.FC = () => {
  const NavState = useContext(navContext);
  const openModal = (e: SyntheticEvent) => {
    NavState.setModalConfirm(true);
  };
  return (
    <nav>
      <ul className={styles.nav__list}>
        <li className={styles.li}>
          <svg
            className={styles.svg_exit}
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-modal="singOut"
            onClick={openModal}
          >
            <path
              className={styles.svg_exit}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.89543 11.23C9.45793 11.23 9.11199 11.57 9.11199 12C9.11199 12.42 9.45793 12.77 9.89543 12.77H16.0001V17.55C16.0001 20 13.9754 22 11.4725 22H6.51749C4.02473 22 2 20.01 2 17.56V6.45C2 3.99 4.0349 2 6.52766 2H11.4928C13.9754 2 16.0001 3.99 16.0001 6.44V11.23H9.89543ZM19.6304 8.5402L22.5504 11.4502C22.7004 11.6002 22.7804 11.7902 22.7804 12.0002C22.7804 12.2002 22.7004 12.4002 22.5504 12.5402L19.6304 15.4502C19.4804 15.6002 19.2804 15.6802 19.0904 15.6802C18.8904 15.6802 18.6904 15.6002 18.5404 15.4502C18.2404 15.1502 18.2404 14.6602 18.5404 14.3602L20.1404 12.7702H16.0003V11.2302H20.1404L18.5404 9.6402C18.2404 9.3402 18.2404 8.8502 18.5404 8.5502C18.8404 8.2402 19.3304 8.2402 19.6304 8.5402Z"
              fill="white"
              data-modal="singOut"
            />
          </svg>
        </li>
        <li className={`${styles.li} ${styles.profile}`}>
          <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.2588 5.29105C14.2588 8.22808 11.9039 10.5831 8.96485 10.5831C6.02674 10.5831 3.67086 8.22808 3.67086 5.29105C3.67086 2.35402 6.02674 0 8.96485 0C11.9039 0 14.2588 2.35402 14.2588 5.29105ZM8.96484 20C4.62722 20 0.964844 19.295 0.964844 16.575C0.964844 13.8539 4.65023 13.1739 8.96484 13.1739C13.3035 13.1739 16.9648 13.8789 16.9648 16.599C16.9648 19.32 13.2795 20 8.96484 20Z"
              fill="#F36122"
            />
          </svg>
        </li>
      </ul>
    </nav>
  );
};
