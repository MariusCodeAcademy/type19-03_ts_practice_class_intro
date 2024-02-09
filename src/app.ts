console.log('hello ts');

function sayHi(): void {
  console.log('Hello from sayHi fn');
}
// sayHi();

// taikomes
const btn1El = document.getElementById('btn1') as HTMLButtonElement | null;

console.log('btn1El ===', btn1El);

// if (!btn1El) throw new Error('nera btn');

btn1El?.addEventListener('click', (event: Event): void => {
  console.log('event.target ===', event.target);
  // event.target.textContent
  sayHi();
});

// nusitaikyti i antra mygtuka ir i p su value
// paspaudus mygtuka noresim padidinti value ir irasyti i html
