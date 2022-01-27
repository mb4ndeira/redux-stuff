import {Reducer} from 'redux';
import produce from 'immer';

import {Cart} from './types';

const INITIAL_STATE: Cart = {
    items: [],
};

const cart: Reducer<Cart> = (state = INITIAL_STATE, action) => // eslint-disable-line default-param-last
    produce(state, draft => {
        switch (action.type) {
            case 'ADD_PRODUCT_TO_CART': {
                const {product} = action.payload;

                draft.items.push({product, quantity: 1});
                break;
            }

            default: {
                return state;
            }
        }
    });
export default cart;
