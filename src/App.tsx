import React, { SyntheticEvent, useEffect, useState } from 'react';
import { Nav } from './components/Nav/Nav';
import styles from './App.module.scss';
import { HeaderModal } from './components/AuthModal/AuthModal';
import { ModalTypes } from './types/modals';
import { navContext } from './Context/NavContext';
import { useDispatch } from 'react-redux';
import { CheckAuth } from './store/actions/CheckAuth';
import { SingOutModal } from './components/SingOutModal/SingOutModal';
import { SingOut } from './store/actions/SingOut';
import axios from 'axios';
export const App: React.FC = () => {
  const dispatch = useDispatch();
  /// MODAL ///
  const [modalAuth, setModalAuth] = useState<ModalTypes | null>(null);
  const [modalSingOut, setModalSingOut] = useState<boolean>(false);
  /// ### MODAL ### ///
  const onHiddenModalSingOut = (e: SyntheticEvent): void => {
    e.target['id'] === 'modal' && setModalSingOut(false);
  };
  const onClickModalSingOut = () => {
    setModalSingOut(true);
  };
  const clickYes = (): void => {
    dispatch(SingOut());
    setModalSingOut(false);
  };
  // Modal Auth
  const onClickModalAuth = (e: SyntheticEvent): void => {
    const type = (e.target as HTMLDivElement).dataset['modalName'] as ModalTypes;
    setModalAuth(type);
  };
  const onHiddenModalAuth = (e: SyntheticEvent) => {
    e.target['id'] === 'modal' && setModalAuth(null);
  };
  const hiddenModalAuth = () => {
    setModalAuth(null);
  };
  // ### Modal Auth ###
  useEffect(() => {
    localStorage.getItem('token') !== null && dispatch(CheckAuth());
  });
  ///TEST

  return (
    <div className="wrapper">
      <header className={styles.header}>
        <navContext.Provider value={{ onClickModalAuth, onClickModalSingOut }}>
          <Nav />
        </navContext.Provider>
        <HeaderModal modal={modalAuth} onClickModal={onHiddenModalAuth} hiddenModal={hiddenModalAuth} />
        <SingOutModal modal={modalSingOut} onClickModal={onHiddenModalSingOut} clickYes={clickYes} />
      </header>
    </div>
  );
};
