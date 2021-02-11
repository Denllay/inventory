import React, { SyntheticEvent, useEffect, useState } from 'react';
import { Nav } from './components/Nav/Nav';
import styles from './App.module.scss';
import { AuthModal } from './components/AuthModal/AuthModal';
import { ModalTypes } from './types/modals';
import { navContext } from './Context/NavContext';
import { useDispatch } from 'react-redux';
import { CheckAuth } from './store/actions/Auth/CheckAuth';
import { ConfirmModal } from './components/ConfirmModal/ConfirmModal';
import { useSelector } from 'react-redux';
import { Inventory } from './components/Inventory/Inventory';
import { CheckInventory } from './store/actions/Inventory/CheckInventory';
import { Switch, Route } from 'react-router-dom';
import { ReviewItem } from './components/ReviewItem/ReviewItem';
import { ISignOut } from './types/signOut';
import { InventoryContext } from './Context/InventoryContext';
export const App: React.FC = () => {
  const isAuth: boolean = useSelector((state) => state.Auth.isAuth);
  const dispatch = useDispatch();
  /// MODAL ///
  const [modalAuth, setModalAuth] = useState<ModalTypes | null>(null);
  const [modalConfirm, setModalConfirm] = useState<ISignOut>({ type: null });
  /// ### MODAL ### ///
  const onHiddenmodalConfirm = (e: SyntheticEvent): void => {
    e.target['id'] === 'modal' && setModalConfirm({ type: null });
  };
  // Modal Auth
  const onClickModalAuth = (e: SyntheticEvent): void => {
    const id = e.currentTarget.id as ModalTypes;
    setModalAuth(id);
  };
  const onHiddenModalAuth = (e: SyntheticEvent): void => {
    e.target['id'] === 'modal' && setModalAuth(null);
  };
  const hiddenModalAuth = (): void => {
    setModalAuth(null);
  };
  // ### Modal Auth ###
  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      dispatch(CheckAuth());
      dispatch(CheckInventory());
    }
  });

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <navContext.Provider value={{ onClickModalAuth, setModalConfirm }}>
          <Nav isAuth={isAuth} />
        </navContext.Provider>
        {isAuth && (
          <Switch>
            <Route path="/item/:id" component={ReviewItem}></Route>
            <InventoryContext.Provider value={setModalConfirm}>
              <Route exact path="/" component={Inventory}></Route>
            </InventoryContext.Provider>
          </Switch>
        )}
        <AuthModal
          modal={modalAuth}
          onClickModalAuth={onClickModalAuth}
          onClickModal={onHiddenModalAuth}
          hiddenModal={hiddenModalAuth}
        />
        <ConfirmModal modal={modalConfirm} onClickModal={onHiddenmodalConfirm} setModalConfirm={setModalConfirm} />
      </header>
    </div>
  );
};
