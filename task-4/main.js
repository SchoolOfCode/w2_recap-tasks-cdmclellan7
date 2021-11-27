const importantThings = [];
let currentInput = "";

const inputField = document.querySelector("#important-thing");
const addButton = document.querySelector("#add-to-list");

inputField.addEventListener("keyup", (e) => currentInput = e.target.value);
addButton.addEventListener("click", () => {
    importantThings.push(currentInput);
    console.log(importantThings);
});

