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

                const productCartIndex = draft.items.findIndex(item => item.product.id === product.id);

                if (productCartIndex >= 0) {
                    draft.items[productCartIndex].quantity += 1;
                }

                draft.items.push({product, quantity: 1});
                break;
            }

            default: {
                return state;
            }
        }
    });
export default cart;
