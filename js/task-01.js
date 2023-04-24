const ulElements = document.querySelector("#categories");
// console.log(ulElements);
const liElements = ulElements.querySelectorAll("li.item");
// console.log(liElements);

console.log(`Number of categories: ${liElements.length}`);

// варіант №1
// for (let liElement of liElements) { 
//     const h2Text = liElement.querySelector("h2").textContent;
//     console.log(`Category: ${h2Text}`);

//     const liInside = liElement.querySelectorAll("li").length;
//     console.log(`Elements: ${liInside}`);
// }

// варіант №2
liElements.forEach((liElement) => {
    const h2Text = liElement.querySelector("h2").textContent;
    console.log(`Category: ${h2Text}`);

    const liInside = liElement.querySelectorAll("li").length;
    console.log(`Elements: ${liInside}`);
});

