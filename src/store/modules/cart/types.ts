export interface IProduct {
    id: number;
    title: string;
    price: number;
}

export interface ICartItem {
    product: IProduct;
    quantity: number;
}

export type Cart = {
    items: ICartItem[]
}
