// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все li за одну операцию
// в список ul.ingredients.Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listProducts = document.querySelectorAll("ul#ingredients")

let a='';
ingredients.forEach(num=> a+=(`<li>${num}</li>`))
const bdd = document.createElement('sdfdsfds')
 list.Products.append(bdd)
console.log(a);


// const divList = document.querySelectorAll('div');