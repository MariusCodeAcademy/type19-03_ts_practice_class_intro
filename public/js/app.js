"use strict";
console.log('hello ts');
function sayHi() {
    console.log('Hello from sayHi fn');
}
const btn1El = document.getElementById('btn1');
console.log('btn1El ===', btn1El);
btn1El === null || btn1El === void 0 ? void 0 : btn1El.addEventListener('click', (event) => {
    console.log('event.target ===', event.target);
    sayHi();
});
//# sourceMappingURL=app.js.map