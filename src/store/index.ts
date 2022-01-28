import {createStore, applyMiddleware} from 'redux';
import saga from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

import {Cart} from './modules/cart/types';
export interface IState {
    cart: Cart
}

const sagaMiddleware = saga();

const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
