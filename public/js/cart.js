"use strict";
class CartItem {
    constructor(title, qty, price, onSale) {
        this.title = title;
        this.qty = qty;
        this.price = price;
        this.onSale = onSale;
        this.id = +Math.random().toString().slice(2);
    }
}
const cartArr = [
    new CartItem('BasketBall', 1, 69.99, false),
    new CartItem('Golf Club', 1, 139.99, true),
    new CartItem('Carbon fins', 1, 290.0, false),
];
function addToCart(arr, item) {
    arr.push(item);
}
console.log('cartArr ===', cartArr);
const newItem = {
    id: 4,
    title: 'Ice cream',
    price: 5,
    qty: 1,
    onSale: false,
};
addToCart(cartArr, newItem);
console.log('cartArr ===', cartArr);
const newItem2 = {
    id: 5,
    title: 'Baseball Cap',
    price: 29.99,
    qty: 1,
    onSale: true,
};
const newItem3 = new CartItem('Baseball', 1, 58.75, false);
console.log('newItem3 ===', newItem3);
addToCart(cartArr, newItem2);
addToCart(cartArr, newItem3);
console.log('cartArr ===', cartArr);
function deleteFromCart(arr, idToDelete) { }
//# sourceMappingURL=cart.js.map