let counterP = document.querySelector("#counter");
let count = 0;

function incrementCounter() {
    count++;
    counterP.innerText = count;
}

setInterval(incrementCounter, 1000);
