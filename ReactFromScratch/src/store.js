import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const middleWare=[thunk];

const store = createStore(reducers,{},applyMiddleware(...middleWare));

export default store;