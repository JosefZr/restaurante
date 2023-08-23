// restaurant.js
const creaRestaurantPage = ()=>{
    const content = document.getElementById('content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    
    //creat and append image element 
    const image =document.createElement("img");
    image.src="aa.jpg.webp";
    image.height='300';
    pageContent.appendChild(image);

    //creat and append headline element 
    const headline = document.createElement("h1");
    headline.textContent="welcome to our restaurant";
    pageContent.appendChild(headline);

    //creat and append copy element
    const copy = document.createElement('p');
    copy.textContent='we serve the best food in town. come and tast';
    pageContent.appendChild(copy);
    content.appendChild(pageContent);

}
//now we have to expoet so that the other files can
//get acces to it
export default creaRestaurantPage;