import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import { priceBandReducer } from './reducers/priceBandReducer';

//De esta forma tener todos los reducer combinados y no cada uno por separado, hace más fácil su manejo.
const rootReducer = combineReducers({
    priceBand: priceBandReducer,
   
});

//herramientas de desarrollador para poder ver el comportamiento del reducer en diferentes tiempos
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function generateStore(){
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

    return store;
}
