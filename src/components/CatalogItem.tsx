import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {addProductToCartRequest} from '../store/modules/cart/actions';

import {IProduct} from '../store/modules/cart/types';
import {IState} from '../store';
interface CatalogItemProps {
    product: IProduct
}

const CatalogItem: React.FC<CatalogItemProps> = ({product}) => {
    const dispatch = useDispatch();

    const isUnavaiable = useSelector<IState, boolean>(state => state.cart.unavaibleItems.includes(product.id));

    const handleAddProductToCart = useCallback(() => {
        dispatch(addProductToCartRequest(product));
    }, [dispatch]);

    return (
        <article key={product.id}>
            <strong>{product.title}</strong>
            <span>{product.price}</span>

            <button type="button" onClick={handleAddProductToCart}>Comprar</button>

            {isUnavaiable && <span style={{color: 'red'}}>Produto indisponível</span >}
        </article>
    );
};

export default CatalogItem;
