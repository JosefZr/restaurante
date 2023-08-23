import creatContentPage from "./contact";
import creatMenuPage from "./menu";
import creaRestaurantPage from "./restaurant";
//tabs.js
const creatTab = ()=>{
    const content = document.getElementById('content');
    // creat 3 dives
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    
    div1.setAttribute("id",'home-btn')
    div2.setAttribute("id",'menu-btn')
    div3.setAttribute("id",'contact-btn')
    
    //set classes to the div 
    div1.classList.add('tab');
    div2.classList.add('tab');
    div3.classList.add('tab');

    //set text content for the tabs
    div1.textContent='Home';
    div2.textContent='Menu';
    div3.textContent='Contact';

    //append the divs to the content div
    content.appendChild(div1)
    content.appendChild(div2)
    content.appendChild(div3)

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