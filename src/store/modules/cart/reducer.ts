import {Reducer} from 'redux';

import {Cart} from './types';

const INITIAL_STATE: Cart = {
    items: [],
};

const cart: Reducer<Cart> = (state = INITIAL_STATE, action) => { // eslint-disable-line default-param-last
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART': {
            const {product} = action.payload;

            return {...state, items: [...state.items, {product, quantity: 1}]};
        }

        default: {
            return state;
        }
    }
};

export default cart;
