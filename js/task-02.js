const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIngredients = document.querySelector("#ingredients");

const liElements = ingredients.map((ingredient) => {
  const liNew = document.createElement("li");
  liNew.classList.add("item");
  liNew.textContent = ingredient;
  return liNew;
});

ulIngredients.append(...liElements);
