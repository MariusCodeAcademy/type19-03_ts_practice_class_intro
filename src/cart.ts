interface CartItemIf {
  id: number;
  title: string;
  qty: number;
  price: number;
  onSale?: boolean;
}

// class CartItem implements CartItemIf {
//   public id: number;
//   public title: string;
//   public qty: number;
//   public price: number;
//   public onSale: boolean;
//   constructor(title: string, qty: number, price: number, onSale: boolean) {
//     this.id = +Math.random().toString().slice(2);
//     this.title = title;
//     this.qty = qty;
//     this.price = price;
//     this.onSale = onSale;
//   }
// }
class CartItem implements CartItemIf {
  public id: number;

  constructor(
    public title: string,
    public qty: number,
    public price: number,
    public onSale: boolean = false,
  ) {
    this.id = +Math.random().toString().slice(2);
  }
}

let cartArr: CartItemIf[] = [
  new CartItem('BasketBall', 1, 69.99),
  new CartItem('Golf Club', 1, 139.99, true),
  new CartItem('Carbon fins', 1, 290.0),
];
function addToCart(arr: CartItemIf[], item: CartItemIf): void {
  // prideti nauja item
  // const newArr = [...arr, item];
  arr.push(item);
}

const newItem: CartItemIf = new CartItem('Ice cream', 1, 5);
const newItem2: CartItemIf = new CartItem('Mask', 1, 29.99, true);
const newItem3 = new CartItem('Baseball', 1, 58.75);

addToCart(cartArr, newItem);
addToCart(cartArr, newItem2);
addToCart(cartArr, newItem3);
console.log('cartArr ===', cartArr);

function deleteFromCart(arr: CartItemIf[], idToDelete: number): void {
  arr = arr.filter(() => {});
}

const id = cartArr[2].id;

deleteFromCart(cartArr, id);

function updateTitle(arr, id, newTitle) {}

// pasidaryti atvaizdavima html UI
