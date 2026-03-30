const pictureButton = document.getElementById("pictureButton");
const flexContainer = document.querySelector(".flex-container");
const projectUrl = "https://dog.ceo/api/breeds/image/random";
const inputField = document.getElementById("inputField");
const morePictureButton = document.getElementById("morePicture");

function moreClick () {
    morePictureButton.addEventListener('click',async function () {
        const inputValue = inputField.value;

        for (let index = 0; index < inputValue; index++) {
            const item = document.createElement("img");
            const picture = await fetchRandomDoggo(projectUrl);
            item.src = picture.message;
            flexContainer.appendChild(item);
            
        }
    });
};

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
    moreClick();
    
};

main();