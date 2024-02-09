import { ModIf, StudIf, student } from './data/student.js';

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
function getModuleAvg(modulObj: ModIf): number {
  console.log('modulObj ===', modulObj);
  const avg: number = modulObj.marks.reduce(
    (total, mark, _idx, arr) => total + mark / arr.length,
    0,
  );
  console.log('avg ===', avg);
  return avg;
}
// getModuleAvg(student.modules[1]);

// 2.sukurti funkcija, kuri argumentu ima studento moduli
function getModuleInfo(modulObj: ModIf): { avg: number; title: string } {
  console.log('modulObj ===', modulObj);
  const avgCalc: number = getModuleAvg(modulObj);

  return { avg: avgCalc * modulObj.credits, title: modulObj.title };
}
// grazina objekta kuriame yra title ir avg. avg yra vidurkis, padaugintas is creditu
const rezObj = getModuleInfo(student.modules[2]);
console.log('rezObj ===', rezObj);

// 3. parasyti funkcija, kuri ima studenta argumentu ir grazina jo visu moduliu vidurki

function getTotalStudAvg(stud: StudIf): number {
  // const avgArr: number[] = [];
  const avgArr: Array<number> = stud.modules.map(getModuleAvg);
  console.log('avgArr ===', avgArr);
  return avgArr.reduce((total, avg) => total + avg, 0) / avgArr.length;
}
const totalAvg = getTotalStudAvg(student);
console.log('totalAvg ===', totalAvg);

// 4. parasyti funkcija, kuri ima studenta argumentu ir grazina visus jo modulius kaip stringus masyve.

// 5. parasyti funkcija, kuri ima studenta argumentu ir grazina masyva su { avg: number; title: string } objektais viduje

// 6. parasyti funkcija, kuri ima studenta argumentu ir grazina objekta
// { studFullName: '', totalAvg: 8.5 }
