// (1)
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulIngredients = document.querySelector('#ingredients');
// console.log(ulIngredients);

const ingridient = ingredients.forEach((ingredient) => { 
  const liNew = document.createElement('li');
  liNew.classList.add('item');
  liNew.textContent = ingredient;
  // console.log(liNew);
  ulIngredients.append(liNew);
})








