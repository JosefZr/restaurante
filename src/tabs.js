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
    burger.classList.add('burger');
    divLogo.classList.add("logo");

    //set text content for the tabs
    div1.textContent='Home';
    div2.textContent='Menu';
    div3.textContent='Contact';
    divCart.innerHTML='<i class="fa-regular fa-cart-plus"></i>';
    burger.innerHTML=`<i class="fa-solid fa-burger" ></i>`;
    divLogo.innerHTML='<img src="images/pizza-box.png">';

    //append the divs to the content div
    links.appendChild(div1)
    links.appendChild(div2)
    links.appendChild(div3)
    header.appendChild(links)
    header.appendChild(divCart)
    header.appendChild(burger)
    header.prepend(divLogo)
    content.appendChild(header);

    function setBackground(color) {
        const content = document.getElementById('content');
        content.classList.add(`${color}-bg`);
    }

    function setBackground(color) {
        content.classList.add(`${color}-bg`);
    }

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
        setBackground('lightseagreen');
        addAfter(); // Add the ::after pseudo-element
    });
    
    div3.addEventListener('click', () => {
        clearContent();
        creatContentPage();
        clearBack();
        removeAfter(); // Remove the ::after pseudo-element
    });

    burger.addEventListener("click", ()=>{
        if(links.classList.contains("active"))
            links.classList.remove("active");
        else    
            links.classList.add("active"); // Toggle the 'active' class on 'Links'
        
    });
    document.addEventListener("click", (event) => {
        const isBurgerClicked = burger.contains(event.target); // Check if burger was clicked
        const isActive = links.classList.contains("active"); // Check if Links has 'active' class
    
        // If burger wasn't clicked and Links has 'active' class, remove 'active' class
        if (!isBurgerClicked && isActive && !event.target.classList.contains("active")) {
            links.classList.remove("active");
        }
    });
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