// let num = prompt('Write your number:');
// console.log(num * 2.54);

// let a = 123456789;
// console.log(a % 3);

// let sum2 = 500;
// const average = (sum2 + 600 + 700 / 3);
// // sum2 += 100;
// // console.log(sum2);
// // sum2 += 100;
// // console.log(sum2);

// let count = 3;
// console.log(average);

// let a = Math.sqrt(7);
// console.log(a);

// console.log(67 !== '67');
// console.log(typeof ('67'));


// console.log(10 <= 100 && 0 != 1);
// console.log(10 < 100 || 0 != 1);


// let s = '';
// let result;
// result = (s == '') ? 'Строка пуста' : 'Строка не пуста';
// console.log(result);



//=== Получение типа данных (data type)===//

console.log(typeof (123)); // number

console.log(typeof ('')); // string

console.log(typeof (24 > 50)); // boolean

console.log(typeof (undefined)); // undefined



// === Преобразование типов (type conversion)===//

let a = 20 + '20'; // Число преобразуется в строку //!(ТОЛЬКО ПРИ КОНКАТЕНАЦИИ)
console.log(a);

let b = 20 - '10'; // Строка преобразуется в число //!(Во всех остальных арифметических действиях)
console.log(b);

let c = 20 + true;
console.log(c); // true/false преобразуются в значение  //! 1/0 соотвественно

let d = 10 + undefined;
console.log(d); // Преобразует в //!NaN

let e = '' + NaN;
console.log(e); // Преобразуется с строку NaN

let f = '' + true;
console.log(f); // Преобразуется с строку true

let g = '' + undefined;
console.log(g); // Преобразуется с строку undefined



//=== Явное преобоазование строки в число ===//

let h = +'123';
console.log(h); // + явно преоразует строку в число


// === Для преобразование строки в число===//

let i = parseInt('100');
console.log(i);

let j = parseFloat('123.456')
console.log(j);