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
const result = document.querySelector("span#value")



let counterValue = Number(result.textContent)

const increment=function() {
    counterValue += 1;
    result.textContent = `${counterValue}`
}

const decrement=function () {
    counterValue -= 1;
    result.textContent = `${counterValue}`
}

plus.addEventListener('click', increment)
minus.addEventListener('click',decrement)