const inputElement = document.querySelector("#name-input");
const nameLabel = document.querySelector("h1 > span");
// console.log(inputElement);
// console.log(nameLabel);

inputElement.addEventListener("input", (e) => {
  const value = e.target.value;
  if (value.length > 0) {
    nameLabel.textContent = value;
  } else {
    nameLabel.textContent = "Anonymous";
  }
});
