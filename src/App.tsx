import React, { SyntheticEvent, useEffect, useState } from 'react';
import { Nav } from './components/Nav/Nav';
import styles from './App.module.scss';
import { HeaderModal } from './components/AuthModal/AuthModal';
import { ModalTypes } from './types/modals';
import { navContext } from './Context/NavContext';
import { useDispatch } from 'react-redux';
import { CheckAuth } from './store/actions/Auth/CheckAuth';
import { ConfirmModal } from './components/ConfirmModal/ConfirmModal';
import { SingOut } from './store/actions/Auth/SingOut';
import { useSelector } from 'react-redux';
import { Inventory } from './components/Inventory/Inventory';
import { CheckInventory } from './store/actions/Inventory/CheckInventory';

export const App: React.FC = () => {
  const isAuth: boolean = useSelector((state) => state.Auth.isAuth);
  const dispatch = useDispatch();
  // const inventoryItems = useSelector((state) => state.Inventory);
  /// MODAL ///
  const [modalAuth, setModalAuth] = useState<ModalTypes | null>(null);
  const [modalConfirm, setModalConfirm] = useState<boolean>(false);
  const [modalCreateItem, setModalCreateItem] = useState<boolean>(false);
  /// ### MODAL ### ///
  const onHiddenmodalConfirm = (e: SyntheticEvent): void => {
    e.target['id'] === 'modal' && setModalConfirm(false);
  };
  const SingOutYes = (): void => {
    dispatch(SingOut());
    setModalConfirm(false);
  };
  // Modal Auth
  const onClickModalAuth = (e: SyntheticEvent): void => {
    const type = (e.target as HTMLDivElement).dataset['modalName'] as ModalTypes;
    console.log(type);

    setModalAuth(type);
  };
  const onHiddenModalAuth = (e: SyntheticEvent): void => {
    e.target['id'] === 'modal' && setModalAuth(null);
  };
  const hiddenModalAuth = (): void => {
    setModalAuth(null);
  };
  // ### Modal Auth ###
  // Modal Item
  const onHiddenModalCreateItem = (e: SyntheticEvent): void => {
    e.target['id'] === 'modal' && setModalCreateItem(false);
  };
  // ### Modal Item ###
  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      dispatch(CheckAuth());
      dispatch(CheckInventory());
    }
  });

  return (
    <div className="wrapper">
      <header className={styles.header}>
        <navContext.Provider value={{ onClickModalAuth, setModalConfirm, setModalCreateItem }}>
          <Nav isAuth={isAuth} />
        </navContext.Provider>
        {isAuth && <Inventory />}
        <HeaderModal
          modal={modalAuth}
          onClickModalAuth={onClickModalAuth}
          onClickModal={onHiddenModalAuth}
          hiddenModal={hiddenModalAuth}
        />
        <ConfirmModal modal={modalConfirm} onClickModal={onHiddenmodalConfirm} clickYes={SingOutYes} />
      </header>
    </div>
  );
};
