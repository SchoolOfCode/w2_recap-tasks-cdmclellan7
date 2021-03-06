const importantThings = [];

const list = document.querySelector("#list");
const inputField = document.querySelector("#important-thing");
const addButton = document.querySelector("#add-to-list");
const priorityInput = document.querySelector("#priority-input");

addButton.addEventListener("click", addItemToList);

function addItemToList() {
    if (inputField.value.trim() !== "") {
        const currentItem = {text: inputField.value, priority: priorityInput.value};
        importantThings.push(currentItem);
        const newLi = document.createElement('li');
        newLi.innerText = newLiText(inputField.value, priorityInput.value);
        list.appendChild(newLi);
    }
    resetInputs();
}

function newLiText(text, priority) {
    return `${text}, Priority: ${priority}`;
}

function resetInputs() {
    inputField.value = "";
    priorityInput.value = 0;
}

const orderButton = document.querySelector("#order-list");
orderButton.addEventListener("click", orderList);

function orderList() {
    importantThings.sort((a, b) => b.priority - a.priority);

    importantThings.forEach((item, index) => {
        //create new li 
        const newLi = document.createElement('li');
        newLi.innerText = newLiText(item.text, item.priority);
        //get the current li at the same index
        const listChildren = list.children;
        const currentLi = listChildren.item(index);
        //swap the current li for the new li
        list.replaceChild(newLi, currentLi);
    });    
}
