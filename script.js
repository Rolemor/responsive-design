const pictureButton = document.getElementById("pictureButton");
const flexContainer = document.querySelector(".flex-container");
const projectUrl = "https://dog.ceo/api/breeds/image/random";

function buttonCLick () {
    pictureButton.addEventListener('click', async function () {
        const item = document.createElement("img");
        const picture = await fetchRandomDoggo(projectUrl);
        item.src = picture.message;
        flexContainer.appendChild(item);
    });
};

async function fetchRandomDoggo(url) {
    const response = await fetch(url);
    return await response.json();
};


function main () {
    buttonCLick();
    
};

main();