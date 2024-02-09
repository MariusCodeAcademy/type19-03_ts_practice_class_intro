interface CartItemIf {
  id: number;
  title: string;
  qty: number;
  price: number;
  onSale: boolean;
}

class CartItem implements CartItemIf {
  public id: number;
  public title: string;
  public qty: number;
  public price: number;
  public onSale: boolean;
  constructor(title: string, qty: number, price: number, onSale: boolean) {
    this.id = +Math.random().toString().slice(2);
    this.title = title;
    this.qty = qty;
    this.price = price;
    this.onSale = onSale;
  }
}

const cartArr: CartItemIf[] = [
  { id: 1, title: 'BasketBall', qty: 1, price: 69.99, onSale: false },
  { id: 2, title: 'Golf Club', qty: 1, price: 139.99, onSale: true },
  { id: 3, title: 'Carbon fins', qty: 1, price: 290.0, onSale: false },
];
function addToCart(arr: CartItemIf[], item: CartItemIf): void {
  // prideti nauja item
  // const newArr = [...arr, item];
  arr.push(item);
}
console.log('cartArr ===', cartArr);

const newItem: CartItemIf = {
  id: 4,
  title: 'Ice cream',
  price: 5,
  qty: 1,
  onSale: false,
};
addToCart(cartArr, newItem);
console.log('cartArr ===', cartArr);

const newItem2: CartItemIf = {
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

function deleteFromCart(arr: CartItemIf[], idToDelete: number): void {}
