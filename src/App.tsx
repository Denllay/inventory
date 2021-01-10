import React, { SyntheticEvent, useEffect, useState } from 'react';
import { Nav } from './components/Nav/Nav';
import styles from './App.module.scss';
import { HeaderModal } from './components/AuthModal/AuthModal';
import { ModalTypes } from './types/modals';
import { navContext } from './Context/NavContext';
import { useDispatch } from 'react-redux';
import { CheckAuth } from './store/actions/Auth/CheckAuth';
import { SingOutModal } from './components/SingOutModal/SingOutModal';
import { SingOut } from './store/actions/Auth/SingOut';
import { useSelector } from 'react-redux';
import { Inventory } from './components/Inventory/Inventory';
import { CheckInventory } from './store/actions/Inventory/CheckInventory';
import { CreateItemModal } from './components/CreateItemModal/CreateItemModal';
export const App: React.FC = () => {
  const isAuth: boolean = useSelector((state) => state.Auth.isAuth);
  const dispatch = useDispatch();
  // const inventoryItems = useSelector((state) => state.Inventory);
  /// MODAL ///
  const [modalAuth, setModalAuth] = useState<ModalTypes | null>(null);
  const [modalSingOut, setModalSingOut] = useState<boolean>(false);
  const [modalCreateItem, setModalCreateItem] = useState<boolean>(false);
  /// ### MODAL ### ///
  const onHiddenModalSingOut = (e: SyntheticEvent): void => {
    e.target['id'] === 'modal' && setModalSingOut(false);
  };
  const SingOutYes = (): void => {
    dispatch(SingOut());
    setModalSingOut(false);
  };
  // Modal Auth
  const onClickModalAuth = (e: SyntheticEvent): void => {
    const type = (e.target as HTMLDivElement).dataset['modalName'] as ModalTypes;
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
        <navContext.Provider value={{ onClickModalAuth, setModalSingOut, setModalCreateItem }}>
          <Nav isAuth={isAuth} />
        </navContext.Provider>
        <HeaderModal modal={modalAuth} onClickModal={onHiddenModalAuth} hiddenModal={hiddenModalAuth} />
        <SingOutModal modal={modalSingOut} onClickModal={onHiddenModalSingOut} clickYes={SingOutYes} />
        <CreateItemModal
          modal={modalCreateItem}
          onClickModal={onHiddenModalCreateItem}
          hiddenModal={setModalCreateItem}
        />
        {isAuth && <Inventory />}
      </header>
    </div>
  );
};
