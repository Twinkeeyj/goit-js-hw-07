// Напиши скрипт, который бы при потере фокуса на инпуте, проверял
// его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
//     Сколько символов должно быть в инпуте, указывается
// в его атрибуте data - length.Если введено подходящее количество,
//     то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.



const inpute = document.querySelector("#validation-input");
const data=inpute.getAttribute('data-length')

console.log();

inpute.addEventListener("change", (e) => {
    // e.preventDefault();
    
console.log(inpute.value.length);
    if (inpute.value.length === 0) {
        inpute.classList.remove('valid')
         inpute.classList.remove('invalid')
    }
    if (inpute.value.length >= data) {
        inpute.classList.remove('invalid')
          inpute.classList.add('valid')
    }
    if (inpute.value.length < data) {
          inpute.classList.add('invalid')
        inpute.classList.remove('valid')
      
    }
});
// if (inpute.addEventListener("change", (e) => { }
// )

//     if (data < 6) {
//     inpute.classList.remove('#validation-input')
//     inpute.classList.add("#validation-input.invalid");
//     } else if (data >= 6) {
//         inpute.classList.remove("#validation-input.invalid")
//     inpute.classList.add("#validation-input.valid");
//   }