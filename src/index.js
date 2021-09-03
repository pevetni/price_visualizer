import React from 'react';
import ReactDOM from 'react-dom';
import AustralianPriceBand from './AustraliaPriceBand';
import '@progress/kendo-theme-default/dist/all.css';

const divRoot = document.querySelector('#root');

ReactDOM.render( <AustralianPriceBand tradingDay="2021-09-01" />, divRoot );