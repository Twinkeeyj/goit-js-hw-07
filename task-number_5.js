// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой, в спане
// должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
//     <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const nameStranger = document.querySelector("#name-input");    
const nameOutput = document.querySelector("span#name-output");   

console.log(nameStranger.textContent);


const slaveText= nameStranger.addEventListener('submit',e=> {
if (nameStranger === '') {
    nameOutput.textContent = `${nameStranger}`
    
}
});


