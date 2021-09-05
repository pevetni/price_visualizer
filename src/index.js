import React from 'react';
import ReactDOM from 'react-dom';
import '@progress/kendo-theme-default/dist/all.css';

import { Provider } from 'react-redux'
import generateStore from './store';

import Main from './components/Main';

const store = generateStore();

const divRoot = document.querySelector('#root');

ReactDOM.render(
    <Provider store={store}>
      <Main />
    </Provider>, 
    divRoot
  );