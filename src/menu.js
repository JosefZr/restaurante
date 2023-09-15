//menu.js
import pizaa1 from "./assets/pizza-01.png";
import pizaa2 from "./assets/pizza-02.png";
import pizaa3 from "./assets/pizza-03.png";
import pizaa4 from "./assets/pizza-04.png";
import pizaa5 from "./assets/pizza-05.png";
import pizaa6 from "./assets/pizza-06.png";
import pizaa7 from "./assets/pizza-07.png";
import pizaa8 from "./assets/pizza-08.png";


const creatMenuPage=()=>{
    let pruduct = [{
        id:1,
        name:'Margherita Pizza ',
        image:'pizaa1',
        price:35,
        addedToCart: false, // Initialize as false
    },
    {
        id:2 ,
        name:'Beef Pizza ',
        image:'pizaa2',
        price:30,
        addedToCart: false, // Initialize as false
    },
    {
        id:3 ,
        name:'Cheeseburger ',
        image:'pizaa3',
        price:25,
        addedToCart: false, // Initialize as false
    },
    {
        id:4 ,
        name:'Marinara Pizza ',
        image:'pizaa4',
        price:40,
        addedToCart: false, // Initialize as false
    },
    {
        id:5 ,
        name:'French Frise ',
        image:'pizaa5',
        price:15,
        addedToCart: false, // Initialize as false
    },
    {
        id:6 ,
        name:'Neapolitan Pizaa ',
        image:'pizaa6',
        price:22,
        addedToCart: false, // Initialize as false
    },
    {
        id:7 ,
        name:'chawarma ',
        image:'pizaa7',
        price:35,
        addedToCart: false, // Initialize as false
    },
    {
        id:8,
        name:' Sicilian Pizza',
        image:'pizaa8',
        price : 9,
        addedToCart: false, // Initialize as false
    }]
    let shoppingArray;
    let favArray;
    if(localStorage.favorite !=null){
        favArray = JSON.parse(localStorage.favorite);
    }
    else{
        favArray=[];
    }
    
    if (localStorage.shopping != null) {
        shoppingArray = JSON.parse(localStorage.shopping);
    } else {
        shoppingArray = [];
    }

    function getProductImageById(id) {
        switch (id) {
            case 1:
                return pizaa1;
            case 2:
                return pizaa2;
            case 3:
                return pizaa3;
            case 4:
                return pizaa4;
            case 5:
                return pizaa5;
            case 6:
                return pizaa6;
            case 7:
                return pizaa7;
            case 8:
                return pizaa8;
            default:
                return pizaa1; // Default to pizaa1 if the ID is not recognized
        }
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

    const buttonFav = document.createElement('div');
    buttonFav.textContent = 'Favorite ('+favArray.length+')';
    buttonFav.classList.add('favorite-btn');
    
    //buttonFav.innerHTML=`<i class="fa-regular fa-circle-heart fa-2xl" style="color: red;"></i>`;
    
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
    let url=`${pizaa3}`;
    img.src=`${url}`;

    bigImage.appendChild(img);
    let selectedColl = null; // Track the currently selected collection item
    pruduct.forEach((value, key) => {
        pruduct.addedToCart = false;
        const coll = document.createElement('div');
        coll.classList.add('coll');
        coll.dataset.index = value.id; // Use item.id instead of i
    
        let fav = document.createElement('div');
        fav.classList.add('favorite');
        fav.textContent="favorits";
        fav.innerHTML = '<i class="fa-light fa-heart fa-2x" style="color: #ff0000;"></i>';
    
        // the spec section under the image
        let specs = document.createElement('div');
        specs.classList.add('specs');
        let name = document.createElement('h3');
        name.innerHTML = `${value.name}`;
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
        price.innerHTML = "$" + value.price;
    
        const addToCart = document.createElement('div');
        addToCart.classList.add('to-cart');
    
        // Check if the product is already in the cart
        const productInCart = shoppingArray.some(item => item.id === value.id);
        if (productInCart) {
            addToCart.innerHTML = `<i class="fa-solid fa-cart-shopping fa-2xl" style="color: #ffffff;"></i>`;
            pruduct[key].addedToCart = true; // Set addedToCart to true
        } else {
            addToCart.innerHTML = `<i class="fa-regular fa-cart-shopping fa-2xl" style="color: #ffffff;"></i>`;
            pruduct[key].addedToCart = false; // Set addedToCart to false
        }
    
        addToCart.addEventListener('click', () => {
            if (!pruduct[key].addedToCart) {
                addToCart.innerHTML = `<i class="fa-solid fa-cart-shopping fa-2xl" style="color: #ffffff;"></i>`;
                pruduct[key].addedToCart = true;
                adding(key);
            } else {
                addToCart.innerHTML = `<i class="fa-regular fa-cart-shopping fa-2xl" style="color: #ffffff;"></i>`;
                pruduct[key].addedToCart = false;
                removing(key);
            }
        });
    
        // the image 
        let img = document.createElement('img');
        let url = `${getProductImageById(value.id)}`;
        img.src = url;

        specs.appendChild(name);
        specs.appendChild(stars);
        specs.appendChild(price);
        specs.appendChild(addToCart);
        specs.appendChild(fav); // This line was missing
    
        coll.appendChild(specs);
    
        // Add the "fav" element here so it's not duplicated
    
        coll.appendChild(img);
    
        collection.appendChild(coll);
    
        coll.addEventListener('click', (event) => {
            if (selectedColl !== coll) {
                // Check if the view is not small or not in the favorite view
                if (!menuBtn || menuShown) {
                    const big = document.querySelector('.big-image img');
                    big.style.transform = 'translate(0, -200%)';
                    
                    setTimeout(() => {
                        const clickedItem = pruduct.find(item => item.id === parseInt(coll.dataset.index));
                        const imageId = clickedItem.id;
                        big.src = getProductImageById(imageId);
                        big.style.transform = 'translate(0, 0)';
                    }, 1000);
                }
            }
            // Update the selectedColl variable
            selectedColl = coll;
        });
    });
    left.appendChild(bigImage);
    const collectionSmall = document.createElement('div');
    collectionSmall.setAttribute("class", "collection-fav");
    const mediaQuery = window.matchMedia("(max-width: 770px)");
    let favAdded;
    function applySmallScreenStyles() {
        const collectionElement = document.querySelector('.collection');
        const collElements = document.querySelectorAll('.coll');
        const specsElements = document.querySelectorAll('.specs');
        const cartElement = document.querySelectorAll('.to-cart');
        const favElements = document.querySelectorAll('.favorite'); // Select all elements with the class 'favorite'
    
        collectionElement.classList.add('collection-small');
        collectionElement.classList.remove('collection');
    
        cartElement.forEach(cart => {
            cart.classList.add('to-cart-small');
            cart.classList.remove('to-cart');
        });
    
        collElements.forEach((coll, index) => {
            coll.classList.add('coll-small');
            coll.classList.remove('coll');
    
            const button = document.createElement('button');
            button.classList.add('cart-btn');
            button.textContent = "add to cart";
            button.addEventListener('click', () => {
                if (!pruduct[index].addedToCart) {
                    pruduct[index].addedToCart = true;
                    adding(index);
                    console.log(index); // Log the index of the clicked item
                } else {
                    pruduct[index].addedToCart = false;
                    removing(index);
                }
            });
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
    
        
        // Loop through the 'favorite' elements and add click event listeners
        favElements.forEach((favElement, index) => {
            const productId = pruduct[index].id; // Get the product id
            
            // Initialize the favorite icon based on the initial state
            const productInFav = favArray.includes(productId);
            favElement.innerHTML = productInFav
                ? '<i class="fa-solid fa-heart fa-2x" style="color: #ff0000;"></i>'
                : '<i class="fa-light fa-heart fa-2x" style="color: #ff0000;"></i>';
            
            favElement.addEventListener('click', () => {
                // Recheck the favorite status when the element is clicked
                const productInFav = favArray.includes(productId);
                if (!productInFav) {
                    favElement.innerHTML = `<i class="fa-solid fa-heart fa-2x" style="color: #ff0000;"></i>`;
                    favAdded = true;
                    addFavorite(index);
                    
                } else {
                    favAdded = false;
                    favElement.innerHTML = `<i class="fa-light fa-heart fa-2x" style="color: #ff0000;"></i>`;
                    removeFavorite(index);
                }
            });
        });
    }
    function updateFavoriteDisplay() {
        const favElements = document.querySelectorAll('.favorite');
        favElements.forEach((favElement, index) => {
            const productId = pruduct[index].id;
            const productInFav = favArray.includes(productId);
    
            // Update the favorite icon based on whether it's in the favorites array
            favElement.innerHTML = productInFav
                ? '<i class="fa-solid fa-heart fa-2x" style="color: #ff0000;"></i>'
                : '<i class="fa-light fa-heart fa-2x" style="color: #ff0000;"></i>';
        });
    }

    function addFavorite(index) {
        const productId = pruduct[index].id; // Get the product ID
        if (!favArray.includes(productId)) {
            favArray.push(productId);
            localStorage.setItem('favorite', JSON.stringify(favArray));
            updateFavoriteDisplay();
            updateFavoriteCount();
            //first of all we clear the collectionfav and we add what we want 
            //to not mess it up
            collectionSmall.innerHTML=""
            showingFavorite();
        }
    }
    function removeFavorite(index) {
        const productId = pruduct[index].id; // Get the product ID
        const favIndex = favArray.indexOf(productId);
        if (favIndex !== -1) {
            favArray.splice(favIndex, 1);
            localStorage.setItem('favorite', JSON.stringify(favArray));
            updateFavoriteDisplay();
            updateFavoriteCount();
            collectionSmall.innerHTML="";
            showingFavorite();
        }
    }
    let menuShown = false;


    function showingFavorite(){
        collectionSmall.style.display="none";
        
        favArray.forEach(favoriteId => {
            // Find the corresponding product in pruduct array
            const favoriteProduct = pruduct.find(product => product.id === favoriteId);
            const coll = document.createElement('div');
            coll.classList.add('coll-fav'); // Use 'coll-small' class for small screen styles
            coll.dataset.index = favoriteProduct.id; // Use favorite product's id

            const addToCart = document.createElement('button');
            addToCart.classList.add('cart-btn');
            addToCart.textContent = "add to cart";
            addToCart.addEventListener('click', () => {
                if (!addedToCart) {
                    addedToCart = true;
                    adding(favoriteId);
                } else {
                    addedToCart = false;
                    removing(favoriteId);
                }
            });
            coll.prepend(addToCart);
            // the spec section under the image
            const specs = document.createElement('div');
            specs.classList.add('specs-fav'); // Use 'specs-small' class for small screen styles

            const name = document.createElement('h3');
            name.innerHTML = favoriteProduct.name;

            const stars = document.createElement('div');
            stars.classList.add('stars');

            for (let j = 0; j < 4; j++) {
                const starIcon = document.createElement('i');
                starIcon.classList.add('fa-solid', 'fa-star', 'fa-2x');
                starIcon.style.color = '#cad709';
                stars.appendChild(starIcon);
            }

            const starIcon = document.createElement('i');
            starIcon.classList.add('fa-regular', 'fa-star', 'fa-2x');
            starIcon.style.color = '#cad709';
            stars.appendChild(starIcon);

            const price = document.createElement('span');
            price.classList.add('price');
            price.innerHTML = `${favoriteProduct.price} $`;

            const img = document.createElement('img');
            img.src = `${getProductImageById(favoriteProduct)}`;

            // Append the elements to the 'coll' div
            specs.appendChild(name);
            specs.appendChild(stars);
            specs.appendChild(price);
            specs.appendChild(addToCart);

            coll.appendChild(addToCart); // Add addToCart div to the 'coll' div
            coll.appendChild(specs); // Add specs div to the 'coll' div
            coll.appendChild(img); // Add img element to the 'coll' div

            collectionSmall.appendChild(coll); // Append the 'coll' div to the 'collectionSmall' div
        });
        pageContent.appendChild(collectionSmall)

    }
    showingFavorite();
    buttonFav.addEventListener('click', () => {
    if (!menuShown) {
        container.style.display = "none";
        collection.style.display='none';
        menuShown = true; // Set it to true
        setTimeout(() => {
            collectionSmall.style.opacity="1";
            collectionSmall.style.display="flex";
        }, 300);
    }else {
        setTimeout(() => {
            collectionSmall.innerHTML="";
            showingFavorite();
            collectionSmall.style.display="none";
            collectionSmall.style.opacity="0";
            setTimeout(() => {
                container.style.display = "flex";
                collection.style.display="flex";
            }, 300);
        }, 500);
        menuShown = false; // Set it to false when closing the favorites
    }
    });
    function updateFavoriteCount() {
        const buttonFav = document.querySelector('.favorite-btn');
        buttonFav.textContent = 'Favorite (' + favArray.length + ')';
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
    }
    let menuBtn;
    mediaQuery.addEventListener("change", (event) => {
        if (event.matches) {
            applySmallScreenStyles();
            menuBtn=true;
        } else {
            removeSmallScreenStyles();
            menuBtn=false;
        }
    }); 
    btn.addEventListener('click', () => {
        console.log('clicked menu');
        collectionSmall.innerHTML=""
        showingFavorite()
        const collectionElement = document.querySelector('.collection');
        const collectionElement2 = document.querySelector('.collection-small');

        if (!menuBtn) {
            // If menuBtn is not true (i.e., menu is not shown), fade it in first.
            collectionElement.style.transition = "opacity 0.3s ease-in-out";
            collectionElement.style.opacity = "1"; // Fade in the menu
            
            // After a short delay, apply the small screen styles and set menuBtn to true.
            setTimeout(() => {
                applySmallScreenStyles();
                menuBtn = true;
            }, 300); // Adjust the timing as needed.
            s
        } else {
            setTimeout(() => {
            // If menu is already shown, simply remove the small screen styles.
            removeSmallScreenStyles();
            menuBtn = false;
            collectionElement2.style.display="flex"
            }, 300); // Adjust the timing as needed.
        }
    });
    function adding(key) {
        console.log("you have added plate n°" + key);
        const productToAdd = pruduct[key];
    
        // Check if the product is already in the cart
        const cartItem = shoppingArray.find((item) => item.id === productToAdd.id);
    
        if (cartItem) {
            cartItem.quantity++;
        } else {
            shoppingArray.push({
                ...productToAdd,
                quantity: 1,
            });
        }
    
        // Update the addedToCart property of the product
        productToAdd.addedToCart = true;
    
        localStorage.setItem("shopping", JSON.stringify(shoppingArray));
        updateCartDisplay();
    }
    
    function removing(key) {
        console.log("you have removed plate n°" + key);
        const productToRemove = pruduct[key];
    
        // Check if the product is in the cart
        const cartItem = shoppingArray.find((item) => item.id === productToRemove.id);
    
        if (cartItem) {
            if (cartItem.quantity > 1) {
                cartItem.quantity--;
            } else {
                // If quantity is 1 or less, remove the product entirely
                const index = shoppingArray.indexOf(cartItem);
                shoppingArray.splice(index, 1);
            }
    
            // Update the addedToCart property of the product
            productToRemove.addedToCart = false;
    
            // Update the local storage after the delete from the array
            localStorage.setItem("shopping", JSON.stringify(shoppingArray));
            updateCartDisplay();
        }
    }

function removing(key) {
    console.log("you have removed plate n°" + key);
    const productToRemove = pruduct[key];
    
    const cartItem = shoppingArray.find((item) => item.id === productToRemove.id);
    
    if (cartItem) {
        if (cartItem.quantity > 1) {
            cartItem.quantity--;
        } else {
            // If quantity is 1 or less, remove the product entirely
            const index = shoppingArray.indexOf(cartItem);
            shoppingArray.splice(index, 1);
        }
        
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
                <div><img src="${getProductImageById(item.id)}" alt="${item.name}"></div>
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
    pageContent.appendChild(buttonFav);

    content.appendChild(pageContent);
}
// create function that will add event listener on all images in the collection divs
export default creatMenuPage;