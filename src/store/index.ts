import {createStore} from 'redux';

import rootReducer from './modules/rootReducer';

import {Cart} from './modules/cart/types';

export interface IState {
    cart: Cart
}

const store = createStore(rootReducer);

export default store;
