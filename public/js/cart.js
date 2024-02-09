"use strict";
class CartItem {
    constructor(title, qty, price, onSale = false) {
        this.title = title;
        this.qty = qty;
        this.price = price;
        this.onSale = onSale;
        this.id = +Math.random().toString().slice(2);
    }
}
let cartArr = [
    new CartItem('BasketBall', 1, 69.99),
    new CartItem('Golf Club', 1, 139.99, true),
    new CartItem('Carbon fins', 1, 290.0),
];
function addToCart(arr, item) {
    arr.push(item);
}
const newItem = new CartItem('Ice cream', 1, 5);
const newItem2 = new CartItem('Mask', 1, 29.99, true);
const newItem3 = new CartItem('Baseball', 1, 58.75);
addToCart(cartArr, newItem);
addToCart(cartArr, newItem2);
addToCart(cartArr, newItem3);
console.log('cartArr ===', cartArr);
function deleteFromCart(arr, idToDelete) {
    arr = arr.filter(() => { });
}
const id = cartArr[2].id;
deleteFromCart(cartArr, id);
//# sourceMappingURL=cart.js.map