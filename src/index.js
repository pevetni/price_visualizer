import React from 'react';
import ReactDOM from 'react-dom';
import '@progress/kendo-theme-default/dist/all.css';

import { MainApp } from './components/MainApp';

const divRoot = document.querySelector('#root');

ReactDOM.render( <MainApp />, divRoot );