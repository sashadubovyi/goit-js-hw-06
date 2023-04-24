let startValue = document.querySelector("#value");
const buttonPlus = document.querySelector('[data-action="increment"]');
const buttonMinus = document.querySelector('[data-action="decrement"]');
// console.log(buttonPlus);
// console.log(counterValue);
// console.log(buttonMinus);

let counterValue = 0;

buttonPlus.addEventListener("click", () => {
  counterValue += 1;
  startValue.textContent = counterValue;
});

buttonMinus.addEventListener("click", () => {
  counterValue -= 1;
  startValue.textContent = counterValue;
});
