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
    divLogo.classList.add("logo");

    //set text content for the tabs
    div1.textContent='Home';
    div2.textContent='Menu';
    div3.textContent='Contact';
    divCart.innerHTML='<i class="fa-regular fa-cart-plus"></i>';
    divLogo.innerHTML='<img src="images/pizza-box.png">'

    //append the divs to the content div
    links.appendChild(div1)
    links.appendChild(div2)
    links.appendChild(div3)
    header.appendChild(links)
    header.appendChild(divCart)
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
    
    // ...
    

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