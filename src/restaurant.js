import jpg1 from './assets/1.jpg';
import jpg2 from './assets/2.jpg';
import jpg3 from './assets/3.jpg';

import chef1 from './assets/chef-1.jpg';
import chef2 from './assets/chef-2.jpg';
import chef3 from './assets/chef-3.jpg'; 

import face1 from './assets/face-1.jpg';
import face2 from './assets/face-2.jpg';
import face3 from './assets/face-3.jpg';
import face5 from './assets/face-5.jpg';


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
    image.style.backgroundImage = `url(${jpg1})`;
    // Switch background option

    let imagesArray = [jpg1, jpg2, jpg3]; // Use the imported variable
    let textArray = ["the real taste of naples","the true italian test","authustic tuscany flafor"];
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

        // Create chefs section
    const aboutSection = document.createElement('section');
    aboutSection.setAttribute('class', 'about-section ');
    // aboutSection.classList.add('reveal');
    aboutSection.innerHTML= `
    <h2 class='reveal'>OUR SPECIAL<span> CHEF's</span></h2>
    <div class="chef-details">
        <div class='chef-image reveal'>
            <div class="image-1">
                <img src ="${chef1}">
                <div class="text-content-1">
                    <div class="effect">
                        <span>thomas cilber</span>
                        <p class="ptext">Age=55</p>
                        <p class="text-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, earum dolor quo cumque fuga dolorem.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class='chef-image chef-image-2 reveal'>
            <div class="image-1">
                <img src ="${chef2}">
                <div class="text-content-1">
                    <div class="effect">
                        <span>karen madison</span>
                        <p class="ptext">Age=29</p>
                        <p class="text-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, earum dolor quo cumque fuga dolorem.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class='chef-image chef-image-3 reveal'>
            <div class="image-1">
                <img src ="${chef3}">
                <div class="text-content-1">
                    <div class="effect">
                        <span>Ben cutting</span>
                        <p class="ptext">Age=30</p>
                        <p class="text-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, earum dolor quo cumque fuga dolorem.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    pageContent.appendChild(aboutSection);

    //creat the facility section
    const facility = document.createElement('section');
    facility.classList.add("facilities");
    // facility.classList.add('reveal');
    facility.innerHTML=`
    <h2 class="heading reveal">WHY <span> SICILIA FOOD</span></h2>
    <div class="icon-section">
        <div class="icon-text reveal">
            <i class="fa-solid fa-memo-circle-check fa-5x" style="color: #b31217;"></i>
            <h2>Easy to Order</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, </p>
        </div>
        <div class="icon-text reveal">
        <i class="fa-regular fa-badge-check fa-5x"style="color: #b31217;"></i>
            <h2>Best Quality</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, </p>
        </div>
        <div class="icon-text reveal">
            <i class="fa-solid fa-memo-circle-check fa-5x" style="color: #b31217;"></i>
            <h2>fast delivery</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,</p>
        </div>
    </div>
    `;
    pageContent.appendChild(facility);

    const reviewsSection = document.createElement('section');
    reviewsSection.classList.add('reviews-section');
    reviewsSection.classList.add("reveal");
    const h2 = document.createElement('h2');
    h2.innerHTML=" <h2>WHATS OUR <span>Client's Say</span></h2>";
    reviewsSection.appendChild(h2);
    const reviewsContainer = document.createElement('div');
    reviewsContainer.classList.add('reviews-container');

    const prev= document.createElement('div');
    prev.setAttribute('class','prev');
    prev.innerHTML='<i class="fa-solid fa-arrow-left fa-2x"></i>';
    const next=document.createElement('div') ;
    next .setAttribute ('class', 'next');
    next.innerHTML='<i class="fa-solid fa-arrow-right fa-2x"></i>';
    reviewsContainer.appendChild (next)  ;
    reviewsContainer.appendChild(prev);
    

    const reviewItems = [
        {
            imageSrc: `${face1}`,
            name: 'loura .R',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse eveniet, ipsa blanditiis velit praesentium.',
            occupation: 'Student',
            stars: 4,
        },
        {
            imageSrc: `${face2}`,
            name: 'joesef .inderson',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse eveniet, ipsa blanditiis velit praesentium.',
            occupation: 'Teacher',
            stars: 5,
        },
        {
            imageSrc: `${face3}`,
            name: 'jones .bale',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse eveniet, ipsa blanditiis velit praesentium.',
            occupation: 'Worker',
            stars: 4,
        },
        {
            imageSrc: `${face5}`,
            name: 'jack smith',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse eveniet, ipsa blanditiis velit praesentium.',
            occupation: 'Barber',
            stars: 5,
        },
    ]
    // Create initial review elements
    function createReviewElements() {
        for (const item of reviewItems) {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');
            reviewElement.classList.add('reveal');
            reviewElement.innerHTML = `
                <div class='review-image-section '>
                    <img src='${item.imageSrc}'>
                    <div class="review-text">
                        <h2>${item.name}</h2>
                        <p>${item.text}</p>
                        <h5>${item.occupation}</h5>
                        <div class="star">
                            ${'<i class="fa-solid fa-star fa-2x"></i>'.repeat(item.stars)}
                        </div>
                    </div>
                </div>
            `;
            reviewsContainer.appendChild(reviewElement);
        }
    }
    
    createReviewElements();
    
    // Add the reviews container to the page
    content.appendChild(reviewsContainer);
    
// Define swiper behavior
const reviewElements = document.querySelectorAll('.review');
let currentIndex = 0;
showReview(currentIndex);

let reviewInterval; // Declare the variable here

function showReview(index) {
    reviewElements.forEach((review, i) => {
        if (i === index) {
            review.style.opacity = '1';
            review.style.display = 'block';
        } else {
            review.style.opacity = '0';
            review.style.display = 'none';
        }
    });
}

// Function to start the auto-swiping
function startAutoSwiping() {
    stopAutoSwiping(); // Clear any existing timer
    reviewInterval = setInterval(() => {
        nextReview();
    }, 9000); // Change the interval as needed
}

// Function to stop auto-swiping
function stopAutoSwiping() {
    clearInterval(reviewInterval);
}

function nextReview() {
    currentIndex = (currentIndex + 1) % reviewItems.length;
    showReview(currentIndex);
}

function prevReview() {
    currentIndex = (currentIndex - 1 + reviewItems.length) % reviewItems.length;
    showReview(currentIndex);
}

// Initialize the first review
showReview(currentIndex);

// Auto-play reviews initially
startAutoSwiping();

// Handle "Next" and "Prev" button clicks
next.addEventListener('click', () => {
    nextReview();
    showReview(currentIndex);
    stopAutoSwiping(); // Stop auto-swiping when manually navigating
    // startAutoSwiping(); // Restart auto-swiping immediately
    setTimeout(startAutoSwiping, 15000); // Restart auto-swiping after 5 seconds
});

prev.addEventListener('click', () => {
    prevReview();
    showReview(currentIndex);
    stopAutoSwiping(); // Stop auto-swiping when manually navigating
    // startAutoSwiping(); // Restart auto-swiping immediately
    setTimeout(startAutoSwiping, 15000); // Restart auto-swiping after 5 seconds
});
window.addEventListener('scroll', reveal);
function reveal() {
  var reveals = document.querySelectorAll('.reveal'); // Corrected variable name
    
  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top; // Corrected method name
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('activation');
    } else {
      reveals[i].classList.remove('activation');
    }
  }
}
    reviewsSection.appendChild(reviewsContainer);
    pageContent.appendChild(reviewsSection);
    content.appendChild(pageContent);
   
    
}
export default creaRestaurantPage;
