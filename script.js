/* Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories,
 то есть элементов li.item. Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, найдет и выведет в
 консоль текст заголовка элемента (тега h2) и количество элементов в категории
  (всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4 */

// const titleUl = document.querySelector('ul#categories');

// let a = [1, 2, 3];
// // let b = titleSum.children;
// // titleSum.children;
// const sum = array => array.children.reduce((acc, el, index) => acc + index, 0);
// const b = array => array.children;
// console.log(b);

// const sum = array => {
//   array.children.reduce((acc, el) => indexOf(acc) + indexOf(el));
// };
// const arr = [...array];
//   return arr
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(({ name }) => name);
// };
// const getUsersWithFriend = (array, friendName) =>
//   array.filter(({ friends }) => friends.includes(friendName));

const list = document.querySelector('ul#categories');
console.log(`В списке ${list.children.length} категории.`);
console.log(list);
let title = document.querySelectorAll('ul#categories>li>h2');
let titleList = [...title];
console.log(titleList);
const fn = arr =>
  arr.forEach(el => console.log(`Категория: ${el.textContent}`));
fn(titleList);
