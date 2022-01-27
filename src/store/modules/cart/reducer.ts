import {Reducer} from 'redux';

import {Cart} from './types';

const INITIAL_STATE: Cart = {
    items: [],
};

const cart: Reducer<Cart> = () => INITIAL_STATE;

export default cart;
