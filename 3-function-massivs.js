// 3.1 Используем функции.

// Код с объявлением функции "circleLength", принимающий один параметр "d".
// function circleLehgth(d) {
//   let l = d * Math.PI;
//   return l;
// }
// function circleLehgth(d) { return d * Math.PI; } // Сокращенная запись возврата значения функции.


// // Код вычисляющий длину окружности диаметром 2м.
// document.write('<tr><td>2 - </td>');
// document.write('<td>', circleLehgth(2), ' m.</td></tr>');

// // Добавим код выполняющий вычисление с длиной окружности 5,10,20.
// document.write('<tr><td>5 - </td>');
// document.write('<td>', circleLehgth(5), ' m.</td></tr>')

// document.write('<tr><td>10 - </td>');
// document.write('<td>', circleLehgth(10), ' m.</td></tr>');

// document.write('<tr><td>20 - </td>');
// document.write('<td>', circleLehgth(20), ' m.</td></tr>');

// ------------------------------------------------------------------------

// 3.2 Локальные переменные и вложенные функции.


// 3.3 Функции с необязательными параметрми

// function circleLehgth(d = 2) {
//   let l = d * Math.PI;
//   return l;
// }
// // console.log(circleLehgth(d = 2)); // Выводится в консоль.
// document.write(circleLehgth(d = 2)) // Выводится на экран.

// 3.4 Функции с произвольным количеством параметров.

// function listValues() {
//   let l = arguments.length, i;
//   document.write('<ul>');
//   for (i = 0; i <= 3; ++i)
//     document.write('<li>', arguments[i], '</li>');
//   document.write('</ul>');
// }

// listValues('HTML', 'CSS', 'JavaScript', 'ABCD');

// --------------------------------------------------------

// 3.5 Упражнение. Используем рекурсию.
// Код вычисляющий факториал.

// const a = window.prompt('Введите число', 1);

// function factorial(val) {
//   if (val == 1)
//     return 1;
//   else
//     return val * factorial(val - 1);
// }
// // document.write('<p>', factorial(a), '</p>');
// console.log('<p>', factorial(a), '</p>');

// ----------------------------------------------------------

// 3.6 Ананонимные функции и функции стрелки.
// -------------------------------------------


// 3.10 Массивы. Объектный тип данных.

// Создаем массив.

// let length = [2, 5, 10, 20]
// console.log(length);

// let languages = ['HTML', 'CSS', 'JavaScript']
// console.log(languages);
// // Получаем доступ к элементам массива по его индексу.
// console.log(languages[2]); // Доступ к элементу массива. [] В квадратных скобках указывается индекс элемента.

// Получаем текущее значение массива.
// length[1]
// console.log(length[1]);

// Заносим новое значение в массив.
// length[2] = 15
// console.log(length);

// Добавляем в массив новые элементы.
// languages[3] = 'PHP'
// // console.log(languages);

// // Создаем в том же массиве новый элемент, дав ему индекс 7.

// languages[7] = 'Python'
// console.log(languages);

// Создаем в пустом массиве emtyArray два элемента с вложенными массивами.

// let emptyArray = []
// emptyArray[0] = [1, 2, 3] // Внешний массив.
// emptyArray[1] = [4, 5, 6] // Вложенный массив.

// // Извлекаем значение третьего элемента вложенного массива.
// console.log(emptyArray[1][2]);

// Обработка элементов массива в циклах. Пример.
// let i;
// for (i = 0; i < 4; i++)
//   // document.write(length[i], '');
//   console.log(length[i]);
