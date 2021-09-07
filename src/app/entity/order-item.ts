import { CartItem } from './cart-item'

export class OrderItem {
    productImageUrl: String;
    unitPrice: number;
    quantity: number;
    produtId: String;
    constructor(cartItem: CartItem){
        this.productImageUrl = cartItem.productImage;
        this.unitPrice = cartItem.productPrice;
        this.quantity =  cartItem.quantity;
        this.produtId = cartItem.productId;

    }
}
