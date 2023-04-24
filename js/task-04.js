let startValue = document.querySelector('#value');
// console.log(counterValue);
const buttonPlus = document.querySelector('[data-action="increment"]');
// console.log(buttonPlus);
const buttonMinus = document.querySelector('[data-action="decrement"]');
// console.log(buttonMinus);

let counterValue = 0;

buttonPlus.addEventListener('click', () => { 
    counterValue += 1;
    startValue.textContent = counterValue;
})


buttonMinus.addEventListener('click', () => { 
    counterValue -= 1;
    startValue.textContent = counterValue;
})
