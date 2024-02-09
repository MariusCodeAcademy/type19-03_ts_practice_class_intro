"use strict";
console.log('hello ts');
function sayHi() {
    console.log('Hello from sayHi fn');
}
let countVal = 0;
const btn1El = document.getElementById('btn1');
const btn2El = document.getElementById('btn2');
const countePEl = document.getElementById('counter-val');
console.log('btn1El ===', btn1El);
btn1El === null || btn1El === void 0 ? void 0 : btn1El.addEventListener('click', (event) => {
    console.log('event.target ===', event.target);
    sayHi();
});
btn2El === null || btn2El === void 0 ? void 0 : btn2El.addEventListener('click', goUp);
function goUp() {
    countVal++;
    if (countePEl === null)
        return;
    countePEl.textContent = countVal.toString();
}
//# sourceMappingURL=app.js.map