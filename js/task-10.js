const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxDiv = document.createElement("div");
document.body.append(boxDiv);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  let boxSize = 30;

  for (let i = 0; i < Number(amount); i += 1) {
    const element = document.createElement("div");
    element.style.backgroundColor = getRandomHexColor();
    element.style.width = `${boxSize}px`;
    element.style.height = `${boxSize}px`;
    boxSize += 10;
    boxDiv.append(element);
  }
}
function destroyBoxes() {
  boxDiv.innerHTML = '';
}
function handleCreate() {
  if (input.value === "") return;
  createBoxes(input.value);
  input.value = "";
}

createBtn.addEventListener("click", handleCreate);
destroyBtn.addEventListener('click', destroyBoxes);