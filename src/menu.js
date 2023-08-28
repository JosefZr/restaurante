//menu.js
const creatMenuPage=()=>{
    const content = document.querySelector('#content');
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    const heading = document.createElement("h1");
    heading.textContent='we make the double cheasy pizza ';

    const paragraph = document.createElement('p');
    paragraph.textContent='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam aperiam alias officia error cum. Ex recusandae itaque totam eveniet consequuntur?'
    
    const bigImage = document.createElement('div')
    bigImage.setAttribute('class','big-image');
    //create a new image element and give it an src attribute 
    let img=document.createElement('img');
    let url="images/pizza-01.jpg";
    img.src=`${url}`;

    const menuList = document.createElement('lu');
    const menuItem1 = document.createElement("li");
    menuItem1.textContent="Pomodoro";

    const menuItem2=document.createElement("li");
    menuItem2.textContent='Bolognesa';

    const menuItem3=document.createElement("li");
    menuItem3.textContent='French Toast';

    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);

    pageContent.appendChild(heading);
    pageContent.appendChild(paragraph);
    pageContent.appendChild(img);
    pageContent.appendChild(menuList);
    content.appendChild(pageContent);
}
export default creatMenuPage;