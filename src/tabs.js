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

    div1.addEventListener('click',()=>{
        clearContent()
        creaRestaurantPage();
    })
    div2.addEventListener('click',()=>{
        clearContent()
        creatMenuPage();
    })
    div3.addEventListener('click',()=>{
        clearContent()
        creatContentPage();
    })
}   
function clearContent(){
    const content =document.querySelector("#content");
    const pageContent = document.querySelector(".page-content");
    if(pageContent){
        content.removeChild(pageContent);
    }
}
export default creatTab;