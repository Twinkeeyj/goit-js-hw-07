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

const liist = document.querySelectorAll("ul#categories>li");

const a = ingredients.map(num => {
  let c; c = document.createElement(`${num}`);
  console.log(c);
  liist.append()
})

document.createElement('ingredients')
// listProducts.Products.append(b)

console.log(a);



// range.addEventListener('input', e => {
//   const output = document.querySelectorAll('.output');
//   output
//     ? output.forEach(el => {
//         el.style.fontSize = `${range.value}px`;
//       })
//     : '';
// });
// (autput.style.fontSize = `${range.value}px`)
// autput
//   ? autput.forEach(el => {
//       el.style.fontSize = `${range.value}px`;
//     })

// const divList = document.querySelectorAll('div');