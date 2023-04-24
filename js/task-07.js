const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
// console.log(input);
// console.log(text);

input.addEventListener("input", (e) => {
  // console.log(e.currentTarget.value);
  text.style.fontSize = e.currentTarget.value + "px";
});
