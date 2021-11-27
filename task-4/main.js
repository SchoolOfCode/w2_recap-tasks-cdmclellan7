const importantThings = [];
let currentInput = "";
let currentPriority = 0;

const list = document.querySelector("#list");
const inputField = document.querySelector("#important-thing");
const addButton = document.querySelector("#add-to-list");
const priorityInput = document.querySelector("#priority-input");

inputField.addEventListener("keyup", (e) => currentInput = e.target.value);
priorityInput.addEventListener("input", (e) => currentPriority = e.target.value);
addButton.addEventListener("click", addItemToList);

function addItemToList() {
    const currentItem = {text: currentInput, priority: currentPriority};
    importantThings.push(currentItem);
    const newLi = document.createElement('li');
    newLi.innerText = `${currentInput}, Priority: ${currentPriority}`;
    list.appendChild(newLi);
}

const orderButton = document.querySelector("#order-list");
orderButton.addEventListener("click", orderList);

function orderList() {
    importantThings.sort((a, b) => b.priority - a.priority);
    console.log(importantThings);
}
