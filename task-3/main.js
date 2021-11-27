const img = document.querySelector("#cat-here");

async function fetchCat() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const json = await response.json();
    const catImageUrl = json[0].url;
    setImage(catImageUrl);
}

function setImage(url) {
    img.src = url;
}

fetchCat();