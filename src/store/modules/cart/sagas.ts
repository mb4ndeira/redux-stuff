import {all, select, call, put, takeLatest} from 'redux-saga/effects';
import {AxiosResponse} from 'axios';

import api from '../../../services/api';

import {addProductToCartRequest, addProductToCartSuccess, addProductToCartFailure} from './actions';

import {IState} from '../../index';

type addProductToCartRequestActionReturnType = ReturnType<typeof addProductToCartRequest>

interface IStockResponse {
    id: number;
    quantity: number;
}

function * checkProductStock({payload}: addProductToCartRequestActionReturnType) {
    const {product} = payload;

    const quantityOnCart: number = yield select((state: IState) => state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0);

    const availableQuantityResponse: AxiosResponse<IStockResponse> = yield call(api.get, `stock/${product.id}`);

    if (availableQuantityResponse.data.quantity > quantityOnCart) {
        yield put(addProductToCartSuccess(product));
    } else {
        yield put(addProductToCartFailure(product.id));
    }
}

export default all([takeLatest('ADD_PRODUCT_TO_CART_REQUEST', checkProductStock)]);
