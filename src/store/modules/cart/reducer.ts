import {Reducer} from 'redux';
import produce from 'immer';

import {Cart} from './types';

const INITIAL_STATE: Cart = {
    items: [],
    unavaibleItems: [],
};

const cart: Reducer<Cart> = (state = INITIAL_STATE, action) => // eslint-disable-line default-param-last
    produce(state, draft => {
        switch (action.type) {
            case 'ADD_PRODUCT_TO_CART_SUCCESS': {
                const {product} = action.payload;

                const productCartIndex = draft.items.findIndex(item => item.product.id === product.id);

                if (productCartIndex >= 0) {
                    draft.items[productCartIndex].quantity += 1;
                } else {
                    draft.items.push({product, quantity: 1});
                }

                break;
            }

            case 'ADD_PRODUCT_TO_CART_FAILURE': {
                draft.unavaibleItems.push(action.payload.productID);

                break;
            }

            default: {
                return state;
            }
        }
    });
export default cart;
