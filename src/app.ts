import { student } from './data/student.js';

console.log('hello ts');
console.log('student ===', student);
function sayHi(): void {
  console.log('Hello from sayHi fn');
}
// sayHi();

let countVal: number = 0;

// taikomes
const btn1El = document.getElementById('btn1') as HTMLButtonElement | null;
const btn2El = document.getElementById('btn2') as HTMLButtonElement | null;
const countePEl = document.getElementById('counter-val') as HTMLParagraphElement | null;

console.log('btn1El ===', btn1El);

// if (!btn1El) throw new Error('nera btn');

btn1El?.addEventListener('click', (event: Event): void => {
  console.log('event.target ===', event.target);
  const btn = event.target as HTMLButtonElement;
  console.log('btn.textContent ===', btn.textContent);
  sayHi();
});

// nusitaikyti i antra mygtuka ir i p su value
// paspaudus mygtuka noresim padidinti value ir irasyti i html
btn2El?.addEventListener('click', goUp);

function goUp(): void {
  countVal++;
  if (countePEl === null) return;
  countePEl.textContent = countVal.toString();
}

// 1. sukurti funkcija, kuri argumentu ima studento moduli
// grazina ir atspausdina jo pazimiu vidurki

// 2.sukurti funkcija, kuri argumentu ima studento moduli
// grazina objekta kuriame yra title ir avg. avg yra vidurkis, padaugintas is creditu
