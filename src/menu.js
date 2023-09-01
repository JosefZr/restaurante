//menu.js
const creatMenuPage=()=>{
    let pruduct = [{
        id:1,
        name:'Margherita Pizza ',
        image:'pizza-01.jpg',
        price:35
    },
    {
        id:2 ,
        name:'Beef Pizza ',
        image:'pizza-02.jpg',
        price:30
    },
    {
        id:3 ,
        name:'Cheeseburger ',
        image:'pizza-03.jpg',
        price:25
    },
    {
        id:4 ,
        name:'Marinara Pizza ',
        image:'pizza-04.jpg',
        price:40
    },
    {
        id:5 ,
        name:'French Frise ',
        image:'pizza-05.jpg',
        price:15
    },
    {
        id:6 ,
        name:'Neapolitan Pizaa ',
        image:'pizza-06.jpg',
        price:22
    },
    {
        id:7 ,
        name:'chawarma ',
        image:'pizza-07.jpg',
        price:35
    },]
    let shoppingArray;
    if (localStorage.shopping != null) {
        shoppingArray = JSON.parse(localStorage.shopping);
    } else {
        shoppingArray = [];
    }
    const content = document.querySelector('#content');

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
    const buttons = document.createElement('div');
    buttons.classList.add('buttons');
    const btn = document.createElement('button')
    btn.classList.add('button');
    const btn1 = document.createElement('button')
    btn1.classList.add('button');
    btn.innerHTML="view Menu";
    btn1.innerHTML='Book a Table';
    buttons.appendChild(btn)
    buttons.appendChild(btn1);

    const collection = document.createElement("div");
    collection.classList.add('collection')
    const h2 =document.createElement('h2');
    h2.innerText= "Now Taking Online Orders";
    const heading = document.createElement("h1");
    heading.textContent='Varety Of Pizza ';
    text.appendChild(h2);
    text.appendChild(heading);
    left.appendChild(text)

    const bigImage = document.createElement('div')
    bigImage.classList.add('big-image');
    //create a new image element and give it an src attribute 
    let img=document.createElement('img');
    let url="images/pizza-03.png";
    img.src=`${url}`;

    bigImage.appendChild(img);
    let selectedColl = null; // Track the currently selected collection item
    
    pruduct.forEach((value, key)=>{
        const coll = document.createElement('div');
        coll.classList.add('coll');
        coll.dataset.index = value.id; // Use item.id instead of i
        //the spec section inder the image
        let specs = document.createElement('div');
        specs.classList.add('specs');
        let name =document.createElement('h3');
        name.innerHTML=`${value.name}`;
        let stars = document.createElement('div');
        stars.classList.add('stars');

        for (let j = 0; j < 4; j++) {
            let starIcon = document.createElement('i');
            starIcon.classList.add("fa-solid", "fa-star", "fa-2x");
            starIcon.style.color = "#cad709";
            stars.appendChild(starIcon);
        }
        let starIcon = document.createElement('i');
        starIcon.classList.add("fa-regular", "fa-star", "fa-2x");
        starIcon.style.color = "#cad709";
        stars.appendChild(starIcon);
        let price = document.createElement('span');
        price.classList.add('price');
        price.innerHTML="$"+value.price;

        const addToCart = document.createElement('div');
        addToCart.classList.add('to-cart');
        let addedToCart ;
        
        // Check if the product is already in the cart
        const productInCart = shoppingArray.some(item => item.id === value.id);
        if (productInCart) {
            addToCart.innerHTML = `<i class="fa-solid fa-cart-shopping fa-2xl" style="color: #ffffff;"></i>`;
            addedToCart = true; // Set addedToCart to true
        } else {
            addToCart.innerHTML = `<i class="fa-regular fa-cart-shopping fa-2xl" style="color: #ffffff;"></i>`;
            addedToCart = false; // Set addedToCart to false
        }

        addToCart.addEventListener('click', () => {
            if (!addedToCart) {
                addToCart.innerHTML = `<i class="fa-solid fa-cart-shopping fa-2xl" style="color: #ffffff;"></i>`;
                addedToCart = true;
                adding(key);
            } else {
                addToCart.innerHTML = `<i class="fa-regular fa-cart-shopping fa-2xl" style="color: #ffffff;"></i>`;
                addedToCart = false;
                removing(key);
            }
        });
        //the image 
        let img = document.createElement('img');
        let url = `images/pizza-0${value.id}.png`;
        img.src = url;

        specs.appendChild(name);
        specs.appendChild(stars);
        specs.appendChild(price);
        specs.appendChild(addToCart)

        coll.appendChild(specs);
        coll.appendChild(img);
        collection.appendChild(coll);
        
        coll.addEventListener('click', (event) => {
            if (selectedColl !== coll) {
                const big = document.querySelector('.big-image img');
                big.style.transform = 'translate(0, -200%)';
                setTimeout(() => {
                    big.src = `images/pizza-0${value.id}.png`; // Use item.id
                    big.style.transform = 'translate(0, 0)';
                }, 1000);
            }
            // Update the selectedColl variable
            selectedColl = coll;
        });
    })
    left.appendChild(bigImage);

    const mediaQuery = window.matchMedia("(max-width: 770px)");

    function applySmallScreenStyles() {
        const collectionElement = document.querySelector('.collection');
        const collElements = document.querySelectorAll('.coll');
        const specsElements = document.querySelectorAll('.specs')
        const cartElement = document.querySelectorAll('.to-cart');


        collectionElement.classList.add('collection-small');
        collectionElement.classList.remove('collection');

        cartElement.forEach(cart=>{
            cart.classList.add('to-cart-small');
            cart.classList.remove('to-cart')
            cart.innerHTML=''
        })
    
        collElements.forEach(coll => {
            coll.classList.add('coll-small');
            coll.classList.remove('coll');

            const button =document.createElement('button');
            button.classList.add('cart-btn');
            button.textContent="add to cart";
            coll.prepend(button);

        });
    
        specsElements.forEach(specs => {
            specs.classList.add('specs-small');
            specs.classList.remove('specs');

        });
    
        const priceElements = document.querySelectorAll('.price');
        priceElements.forEach(price => {
            price.classList.add('price-small');
            price.classList.remove('price');
        });
    
        const imgElements = document.querySelectorAll('.specs img');
        imgElements.forEach(img => {
            img.style.width = '90px';
        });
    }
    
    function removeSmallScreenStyles() {
        const collectionElement = document.querySelector('.collection-small');
        collectionElement.classList.remove('collection-small');
        collectionElement.classList.add('collection');
    
        const collElements = document.querySelectorAll('.coll-small');
        const specsElements = document.querySelectorAll('.specs-small');
        const cartElement = document.querySelectorAll('.to-cart-small');

        cartElement.forEach(cart=>{
            cart.classList.add('to-cart');
            cart.classList.remove('to-cart-small')
            cart.innerHTML=`'<i class="fa-regular fa-cart-shopping fa-2xl" style="color: #ffffff;"></i>'`;
        })
    
        collElements.forEach(coll => {
            coll.classList.remove('coll-small');
            coll.classList.add('coll');
            const btnElement = coll.querySelector('.cart-btn');
            btnElement.remove();
        });
    
        specsElements.forEach(specs => {
            specs.classList.remove('specs-small');
            specs.classList.add('specs');

        });
    
        const priceElements = document.querySelectorAll('.price-small');
        priceElements.forEach(price => {
            price.classList.remove('price-small');
            price.classList.add('price');

        });
    
        const imgElements = document.querySelectorAll('.specs img');
        imgElements.forEach(img => {
            img.style.width = ''; // Remove inline style
        });
    }
    
    mediaQuery.addEventListener("change", (event) => {
        if (event.matches) {
            applySmallScreenStyles();
        } else {
            removeSmallScreenStyles();
        }
    }); 
    
    function adding(key) {
        console.log("you have added plate n°" + key);
        const productToAdd = pruduct[key];
        const cartItem = shoppingArray.find((item) => item.id === productToAdd.id);
    
        if (cartItem) {
            cartItem.quantity++;
        } else {
            shoppingArray.push({
                ...productToAdd,
                quantity: 1,
            });
        }
    
        localStorage.setItem("shopping", JSON.stringify(shoppingArray));
        updateCartDisplay();
    }
    function removing(key) {
        console.log("you have removed plate n°" + key);
        const productToRemove = shoppingArray.find((item) => item.id === pruduct[key].id);
        if (productToRemove) {
            if (productToRemove.quantity > 1) {
                productToRemove.quantity--;
            } else {
                // If quantity is 1 or less, remove the product entirely
                const index = shoppingArray.indexOf(productToRemove);
                shoppingArray.splice(index, 1);
            }
            // Update the local storage after the delete from the array
            localStorage.setItem("shopping", JSON.stringify(shoppingArray));
            updateCartDisplay();
        }
    }
    
    function updateCartDisplay() {
        const cartItemsElement = document.querySelector('.listCard');
        const cartTotalElement = document.querySelector('.totale');
        const cartQuantityElement = document.querySelector('.navbar .cart .quantity'); // Select the cart quantity element in the navbar
    
        // Clear the existing cart items
        cartItemsElement.innerHTML = '';
    
        // Calculate the total price and quantity
        let totalPrice = 0;
        let totalQuantity = 0;
    
        // Iterate over items in the shoppingArray
        shoppingArray.forEach((item, index) => {
            const cartItemElement = document.createElement('li');
            cartItemElement.classList.add('cart-item'); // Add a class for styling
    
            cartItemElement.innerHTML = `
                <div><img src="images/pizza-0${item.id}.png" alt="${item.name}"></div>
                <div> ${item.name}</div>
                <div>${item.quantity}</div>
                <div>$${(item.price * item.quantity).toFixed(2)}</div>
                <div>
                    <button class="remove-button btn-cmp" data-index="${index}">-</button>
                    <div class="count">${item.quantity}</div>
                    <button class="add-button btn-cmp" data-index="${index}">+</button>
                    </div>
                </div>
            `;
            // <span class="item-price">$${(item.price * item.quantity).toFixed(2)}</span>
            cartItemsElement.appendChild(cartItemElement);
    
            totalPrice += item.price * item.quantity;
            totalQuantity += item.quantity;
    
            // Add event listeners for the "+" and "-" buttons
            const addButton = cartItemElement.querySelector('.add-button');
            const removeButton = cartItemElement.querySelector('.remove-button');
            const countElement = cartItemElement.querySelector('.count'); // Get the count element
    
            addButton.addEventListener('click', () => {
                // Increase the quantity when the "+" button is clicked
                shoppingArray[index].quantity++;
                localStorage.setItem('shopping', JSON.stringify(shoppingArray));
                updateCartDisplay();
            });
    
            removeButton.addEventListener('click', () => {
                // Decrease the quantity and remove the item if it reaches 0
                shoppingArray[index].quantity--;
                if (shoppingArray[index].quantity <= 0) {
                    shoppingArray.splice(index, 1);
                }
                localStorage.setItem('shopping', JSON.stringify(shoppingArray));
                updateCartDisplay();
            });
    
            // Update the count element
            countElement.textContent = item.quantity; // Update the count
        });
    
        // Update the total price and quantity
        cartTotalElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
        
        // Update the cart quantity in the navbar
        cartQuantityElement.textContent = totalQuantity;
    }
        // Initialize databooks from localStorage if available
    const storedComand = localStorage.getItem("shopping");
    if (storedComand) {
        shoppingArray = JSON.parse(storedComand);
    }

    // Display the initial data
    updateCartDisplay();

        container.appendChild(buttons);
    container.appendChild(left);
    pageContent.appendChild(container)
    pageContent.appendChild(collection)
    content.appendChild(pageContent);

}
// create function that will add event listener on all images in the collection divs
export default creatMenuPage;