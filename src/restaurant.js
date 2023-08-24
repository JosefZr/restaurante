// restaurant.js
let backgroundoption = true; // Define the background option

const creaRestaurantPage = () => {
    const content = document.getElementById('content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    const twoSide = document.createElement("div");
    twoSide.classList.add('two-side');
    
    // Create and append image element
    const image = document.createElement("div"); // Changed to a div element for background
    image.classList.add('background-image'); // Add a class for styling
    const text = document.createElement("h1"); // Changed to a div element for background
    text.classList.add("text");
    text.textContent='the real taste of naples';
    twoSide.appendChild(text);
    twoSide.appendChild(image);
    pageContent.appendChild(twoSide);
    image.style.backgroundImage = `url("images/1.jpg")`;

    // Create and append headline element
    const headline = document.createElement("h1");
    headline.textContent = "Welcome to our restaurant";
    pageContent.appendChild(headline);

    // Create and append copy element
    const copy = document.createElement('p');
    copy.textContent = 'We serve the best food in town. Come and taste.';
    pageContent.appendChild(copy);
    content.appendChild(pageContent);

    // Switch background option

    let imagesArray = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"];
    let textArray = ["the real taste of naples","the true italian test","authustic tuscany flafor","lorem ,fkdqmdklkd kkdnn fdjfidp pfjpz"];
    let backgroundInterval;

    function randomiseBackground() {
        if (backgroundoption === true) {
            backgroundInterval = setInterval(function () {
                let randomNumber = Math.floor(Math.random() * imagesArray.length);
                image.style.backgroundImage = `url("${imagesArray[randomNumber]}")`;
                text.textContent=`${textArray[randomNumber]}`;
            }, 3000);
        }
    }

    randomiseBackground();
}

export default creaRestaurantPage;
