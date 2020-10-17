// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
// значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div >

    
const plus = document.querySelector("[data-action='increment']");
const minus = document.querySelector("[data-action='decrement']");
const listener = document.querySelector("counter")    
const result = document.querySelector("ul#value")
const result1 = document.querySelector(".ck")


let counterValue = Number(result1.textContent)

const increment= plus.addEventListener('click',e=> {
    counterValue += 1;
    result1.textContent = counterValue;

 

});

const decrement= minus.addEventListener('click', e => {
    counterValue -= 1;
    result1.textContent = counterValue;
  
});
