const list = document.querySelector("#list");

const importantThings = [];
let currentInput = "";

const inputField = document.querySelector("#important-thing");
const addButton = document.querySelector("#add-to-list");

inputField.addEventListener("keyup", (e) => currentInput = e.target.value);
addButton.addEventListener("click", addItemToList);

function addItemToList() {
    importantThings.push(currentInput);
    const newLi = document.createElement('li');
    newLi.innerText = currentInput;
    list.appendChild(newLi);
}

