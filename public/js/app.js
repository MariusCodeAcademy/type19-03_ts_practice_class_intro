import { student } from './data/student.js';
console.log('hello ts');
console.log('student ===', student);
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
    const btn = event.target;
    console.log('btn.textContent ===', btn.textContent);
    sayHi();
});
btn2El === null || btn2El === void 0 ? void 0 : btn2El.addEventListener('click', goUp);
function goUp() {
    countVal++;
    if (countePEl === null)
        return;
    countePEl.textContent = countVal.toString();
}
function getModuleAvg(modulObj) {
    console.log('modulObj ===', modulObj);
    const avg = modulObj.marks.reduce((total, mark, _idx, arr) => total + mark / arr.length, 0);
    console.log('avg ===', avg);
    return avg;
}
function getModuleInfo(modulObj) {
    console.log('modulObj ===', modulObj);
    const avgCalc = getModuleAvg(modulObj);
    return { avg: avgCalc * modulObj.credits, title: modulObj.title };
}
const rezObj = getModuleInfo(student.modules[2]);
console.log('rezObj ===', rezObj);
//# sourceMappingURL=app.js.map