//menu.js
const creatMenuPage=()=>{
    const content = document.querySelector('#content');
    // const contnetMenu = document.createElement('div');
    // contnetMenu.setAttribute("id","content-menu");
    
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");
    const container = document.createElement('div');
    container.classList.add('container');
    const menu = document.createElement('div')
    menu.classList.add('menu');

    const left = document.createElement('div');
    left.classList.add('left');
    const text = document.createElement('div');
    text.classList.add('text');
    const collection = document.createElement("div");
    collection.classList.add('collection')

    const heading = document.createElement("h1");
    heading.textContent='we make the double cheasy pizza ';

    const paragraph = document.createElement('p');
    paragraph.textContent='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam aperiam alias officia error cum. Ex recusandae itaque totam eveniet consequuntur?'

    text.appendChild(heading);
    text.appendChild(paragraph);
    left.appendChild(text)

    for (let i = 1; i < 8; i++) {
        const coll = document.createElement('div');
        coll.classList.add("coll");
        coll.dataset.index = `${i}`;
        let img = document.createElement('img');
        let url = `images/pizza-0${i}.png`;
        img.src = url;
    
        coll.appendChild(img);
        collection.appendChild(coll);
    
        coll.addEventListener('click', (event) => {
            const big = document.querySelector('.big-image img');
            big.style.transform='translate(200%, 0)';
            setTimeout(()=> {
                big.src=`images/pizza-0${clickedColl.dataset.index}.png`;
                big.style.transform='translate(0, 0)'
                },1000 )
            const clickedColl = event.currentTarget; // Use 'currentTarget' instead of 'target'
            console.log(clickedColl.dataset.index);
        });
    }
    left.appendChild(collection)
    const bigImage = document.createElement('div')
    bigImage.classList.add('big-image');
    //create a new image element and give it an src attribute 
    let img=document.createElement('img');
    let url="images/pizza-01.png";
    img.src=`${url}`;

    bigImage.appendChild(img);

    container.appendChild(left);
    container.appendChild(bigImage);
    pageContent.appendChild(container)
    content.appendChild(pageContent);
}
// create function that will add event listener on all images in the collection divs

export default creatMenuPage;