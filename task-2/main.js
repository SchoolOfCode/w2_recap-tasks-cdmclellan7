let counterP = document.querySelector("#counter");
let count = 0;

function incrementCounter() {
    count++;
    counterP.innerText = count;
}

let intervalID = setInterval(incrementCounter, 1000);

function stopCounter() {
    clearInterval(intervalID);
}

setTimeout(stopCounter, 12000);

/* setTimeout using arrow function 
setTimeout( () => clearInterval(intervalID), 12000);
*/