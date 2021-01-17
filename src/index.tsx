import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import './index.scss';
import store from './store/index';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const root = document.getElementById('root');
ReactDom.render(
  <Provider store={store}>
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  </Provider>,
  root
);
