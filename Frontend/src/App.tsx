import React, { SyntheticEvent, useState } from 'react';
import { Nav } from './components/Nav/Nav';
import s from './App.module.scss';
import { HeaderModal } from './components/HeaderModal/HeaderModal';
import { ping } from './store/actions/Ping';
import { useDispatch } from 'react-redux';
export const App: React.FC = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState('none');
  const onClickModal = (e: SyntheticEvent): void => {
    setModal(e.target['id']);
  };
  dispatch(ping()); // TEST
  const onHiddenModal = (e: SyntheticEvent) => {
    e.target['id'] !== 'modal' ? false : setModal('none');
  };
  return (
    <div className="wrapper">
      <header className={s.header}>
        <Nav onClick={onClickModal} />
        <HeaderModal modal={modal} onClickModal={onHiddenModal} />
      </header>
    </div>
  );
};
