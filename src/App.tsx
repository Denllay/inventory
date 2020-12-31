import React, { SyntheticEvent, useState } from 'react';
import { Nav } from './components/Nav/Nav';
import styles from './App.module.scss';
import { HeaderModal } from './components/HeaderModal/HeaderModal';
import { ModalTypes } from './types/modals';

export const App: React.FC = () => {
  const [modal, setModal] = useState<ModalTypes | null>(null);
  const onClickModal = (e: SyntheticEvent): void => {
    const type = (e.target as HTMLDivElement).dataset['modalName'] as ModalTypes;
    setModal(type);
  };
  const onHiddenModal = (e: SyntheticEvent) => {
    (e.currentTarget as HTMLDivElement).dataset['close'] === 'modal' && setModal(null);
  };
  return (
    <div className="wrapper">
      <header className={styles.header}>
        <Nav onClick={onClickModal} />
        <HeaderModal modal={modal} onClickModal={onHiddenModal} />
      </header>
    </div>
  );
};
