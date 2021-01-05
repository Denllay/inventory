import React, { SyntheticEvent, useEffect, useState } from 'react';
import { Nav } from './components/Nav/Nav';
import styles from './App.module.scss';
import { HeaderModal } from './components/HeaderModal/HeaderModal';
import { ModalTypes } from './types/modals';
import { navContext } from './Context/NavContext';
import { useDispatch } from 'react-redux';
import { CheckAuth } from './store/actions/CheckAuth';
export const App: React.FC = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState<ModalTypes | null>(null);
  const onClickModal = (e: SyntheticEvent): void => {
    const type = (e.target as HTMLDivElement).dataset['modalName'] as ModalTypes;
    setModal(type);
  };
  const onHiddenModal = (e: SyntheticEvent) => {
    e.target['id'] === 'modal' && setModal(null);
  };

  useEffect(() => {
    dispatch(CheckAuth());
  });

  return (
    <div className="wrapper">
      <header className={styles.header}>
        <navContext.Provider value={onClickModal}>
          <Nav />
        </navContext.Provider>
        <HeaderModal modal={modal} onClickModal={onHiddenModal} />
      </header>
    </div>
  );
};
