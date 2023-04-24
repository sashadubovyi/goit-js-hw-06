const input = document.querySelector('#controls input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesDiv = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let boxSize = 30;

  for (let i = 0; i < array.length; i+=1) {
    const createDiv = document.createElement('div');
    createDiv.style.width = `${boxSize}px`;
    createDiv.style.height = `${boxSize}px`;
    createDiv.style.backgroundColor = getRandomHexColor();
    
  }
}