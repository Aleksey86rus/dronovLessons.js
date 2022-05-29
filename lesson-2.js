// const ins = window.prompt('Величина в дюймах', 0);
// const cents = ins * 2.54;
// window.document.write(`<h1> Вычисленная величина: = ${cents}см </h1>`);
// // console.log(cents);


// === Применяем условное выражение === //
// const ins = window.prompt('Величина в дюймах', 0);
// let cents = 'Величина не была введена';
// if (ins != null)
//   cents = ins * 2.54;
// window.document.write(`<h1> Вычисленная величина: = ${cents} (см) </h1>`);
// // console.log(cents);


// === Множественное условное выражение === //
// const ins = window.prompt('Величина в дюймах', 0);

// let cents;
// if (ins == null)
//   cents = 'Величина не была введена';
// else if (ins < 0)
//   cents = 'Величина не может быть отрицательной';
// else
//   cents = ins * 2.54;

// window.document.write(`<h1> Вычисленная величина:  = ${cents} (см) </h1>`);
// // console.log(cents);

// === Выражение выбора === //

// происходит строгое (===) сранение типов. А это значит -- что преобразование типов //!НЕ ПРОВОДИТСЯ!
// let screenSize = 5;
// let s;
// switch (screenSize) {
//   case 3:
//     s = 'Маленький экран';
//     break;

//   case 4:
//     s = 'Маленький экран';
//     break;

//   case 5:
//     s = 'Экран средних размеров';
//     break;

//   case 6:
//     s = 'Большой экран';
//     break;

//   default:
//     s = 'Таких экранов в телефонах не бывает';
// }
// console.log(s);


// === Используем цикл со счетчиком === //

// let i;
// for (i = 1; i <= 10; ++i) {
//   window.document.write('<tr><td>', i, '</td>');
//   window.document.write('<td>', Math.sqrt(i), '</td></tr>');
// }


let a;
for (a = 10; a <= 200; a += 10) {
  document.write('<tr><td>', a, '</td>');
  document.write('<td>', Math.sqrt(a), '</td></tr>');
}

















//=== Значения операндов СТРОГО РАВНЫ ===//
// console.log('1' === '1'); // true
// console.log('a' === 'a'); // true
// console.log(1 === 1); // true
// console.log('' === ''); // true
// console.log(undefined === undefined); // true

//=== Значения операндов СТРОГО РАВНЫ ===//
// console.log('1' === 1); // false
// console.log('a' === 1); // false
// console.log('a' === '1'); // false
// console.log('' === '1'); // false
// console.log(' ' === '1'); // false
// console.log('' === ' '); // false
// console.log(NaN === NaN); // false
// console.log(undefined === NaN); // false


//-------------------------------------------------//


//=== Значения операндов СТРОГО НЕ РАВНЫ ===//
// console.log('1' !== '1'); // false
// console.log('a' !== 'a'); // false
// console.log(1 !== 1); // false
// console.log('' !== ''); // false
// console.log(undefined !== undefined); // false

// //=== Значения операндов СТРОГО НЕ РАВНЫ ===//
// console.log('1' !== 1); // true
// console.log('a' !== 1); // true
// console.log('a' !== '1'); // true
// console.log('' !== '1'); // true
// console.log(' ' !== '1'); // true
// console.log('' !== ' '); // true
// console.log(10 !== 20); // true
// console.log("10" !== "20"); // true
// console.log(NaN !== NaN); // true
// console.log(undefined !== NaN); // true


//------------------------------------------------//
// let a = 'ccd';
// let b = '1'
// console.log(typeof (a));
// console.log(typeof (b));

// console.log(a);
// console.log(b);