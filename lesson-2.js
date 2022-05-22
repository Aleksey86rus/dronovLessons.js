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

// window.document.write(`<h1> Вычисленная величина: = ${cents} (см) </h1>`);
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


console.log("1" == "gfg");