import creatContentPage from "./contact";
import creatMenuPage from "./menu";
import creaRestaurantPage from "./restaurant";
//tabs.js
const creatTab = ()=>{
    const content = document.getElementById('content');
    // creat 3 dives
    const header = document.createElement('nav');
    const links = document.createElement('div');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const divCart = document.createElement('div');
    let spanCart = document.createElement('span');
    const list = document.createElement('list')
    const burger = document.createElement('div');
    const divLogo = document.createElement('div');

    div1.setAttribute("id",'home-btn')
    div2.setAttribute("id",'menu-btn')
    div3.setAttribute("id",'contact-btn')
    
    //set classes to the div 
    header.classList.add('navbar');
    links.classList.add('Links');
    div1.classList.add('tab');
    div2.classList.add('tab');
    div3.classList.add('tab');
    divCart.classList.add('cart');
    spanCart.classList.add('quantity');
    list.classList.add('list');
    burger.classList.add('burger');
    divLogo.classList.add("logo");

    //set text content for the tabs
    div1.textContent='Home';
    div2.textContent='Menu';
    div3.textContent='Contact';
    spanCart.textContent='0';
    divCart.innerHTML='<i class="fa-light fa-bag-shopping fa-2x"></i>';
    divCart.appendChild(spanCart);
    burger.innerHTML=`<i class="fa-solid fa-burger" ></i>`;
    divLogo.innerHTML='<img src="images/pizza-box.png">';

      //srat the cart logic
    //crreat a div with class card
    const card = document.createElement('div');
    card.classList.add('card');
    //creat a heading with an text cart and append it to the big div with class cart
    const h1 = document.createElement('h1');
    h1.textContent='My order';
    card.appendChild(h1);
    //creat an ul with a class of listcard and append it to card
    const ul = document.createElement('ul');
    ul.classList.add('listCard'); // Corrected class name
    card.appendChild(ul);
    //creat a div with class checkout 
    const checkout = document.createElement('div');
    checkout.classList.add('checkout');
    //creat another div inside of the checkout the hold the totale of shopping
    //and other div to close 
    const total = document.createElement('div')
    total.classList.add('totale');
    total.textContent="0";
    const close = document.createElement('div');
    close.classList.add('closeShopping');
    close.textContent="close"

    checkout.appendChild(total);
    checkout.appendChild(close);
    card.appendChild(checkout);
    content.appendChild(card); 
    //append the divs to the content div
    links.appendChild(div1)
    links.appendChild(div2)
    links.appendChild(div3)
    header.appendChild(links)
    header.appendChild(divCart)
    header.appendChild(burger)
    header.prepend(divLogo)
    header.appendChild(list);
    content.appendChild(header);

    //now we append the checkout class to the card class

    function clearBack() {
        content.classList.remove('lightseagreen-bg');
    }

    div1.addEventListener('click', () => {
        clearContent();
        creaRestaurantPage();
        clearBack();
        removeAfter(); // Remove the ::after pseudo-element
    });
    
    div2.addEventListener('click', () => {
        clearContent();
        creatMenuPage();
        addAfter(); // Add the ::after pseudo-element
    });
    
    div3.addEventListener('click', () => {
        clearContent();
        creatContentPage();
        clearBack();
        removeAfter(); // Remove the ::after pseudo-element
    });

    burger.addEventListener("click", () => {
        if (links.classList.contains("active")) {
            // If the 'active' class is present, remove it smoothly
            links.style.transition = "opacity 0.3s ease-in-out";
            links.style.opacity = "0"; // Fade out the menu
            setTimeout(() => {
                links.classList.remove("active");
                links.style.transition = ""; // Reset the transition
            }, 500); // Wait for the fade-out transition to complete (0.3 seconds)
        } else {
            // If the 'active' class is not present, add it smoothly
            links.classList.add("active");
            setTimeout(() => {
                links.style.transition = "opacity 0.3s ease-in-out";
                links.style.opacity = "1"; // Fade in the menu
            }, 500); // Delay the fade-in to ensure 'active' class is applied first
        }
    });
    // document.addEventListener("click", (event) => {
    //     const isBurgerClicked = burger.contains(event.target); // Check if burger was clicked
    //     const isActive = links.classList.contains("active"); // Check if Links has 'active' class
    
    //     // If burger wasn't clicked and Links has 'active' class, remove 'active' class
    //     if (!isBurgerClicked && isActive && !event.target.classList.contains("active")) {
    //         links.classList.remove("active");
    //     }
    // });
    function removeActiveClass() {
        links.classList.remove("active");
    }
    const mediaQuery = window.matchMedia("(min-width: 480px)"); // Change the breakpoint as needed

    mediaQuery.addEventListener("change", (event) => {
        if (event.matches) {
            // Screen size is now greater than or equal to the breakpoint
            removeActiveClass();
        }
    });
    // Initial check to see if the screen size is already larger than the breakpoint
    if (mediaQuery.matches) {
        removeActiveClass();
    }
      // Clear the background color when leaving the "Menu" section
    div1.addEventListener('click', clearBack);
    div3.addEventListener('click', clearBack);

    //---------------------logic for add to cart------------------------------------------------------ 

    //chow the cart when the user click on the cart
    divCart.addEventListener("click", () => {
        console.log('clicked')
        card.classList.toggle('activate'); // Toggle the 'activate' class
    });
    //hide it when the user click on the close section
    close.addEventListener('click',()=>{
        card.classList.remove('activate');//Remove activate class from card
    })

}
function addAfter() {
    const pageContent = document.querySelector('.page-content');
    pageContent.classList.add('with-after');
}
function removeAfter() {
    const pageContent = document.querySelector('.page-content');
    pageContent.classList.remove('with-after');
}
function clearContent(){
    const content =document.querySelector("#content");
    const pageContent = document.querySelector(".page-content");
    if(pageContent){
        content.removeChild(pageContent);
    }
}

export default creatTab;