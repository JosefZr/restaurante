(()=>{"use strict";const e=()=>{const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("page-content");const a=document.createElement("div");a.classList.add("two-side");const n=document.createElement("div");n.classList.add("background-image");const i=document.createElement("h1");i.classList.add("text"),i.textContent="the real taste of naples",a.appendChild(i),a.appendChild(n),t.appendChild(a),n.style.backgroundImage='url("images/1.jpg")';let s,c=["images/1.jpg","images/2.jpg","images/3.jpg"],d=["the real taste of naples","the true italian test","authustic tuscany flafor"];s=setInterval((function(){let e=Math.floor(Math.random()*c.length);n.style.backgroundImage=`url("${c[e]}")`,i.textContent=`${d[e]}`}),3e3);const l=document.createElement("section");l.setAttribute("class","about-section "),l.innerHTML='\n    <h2>OUR SPECIAL<span> CHEF\'s</span></h2>\n    <div class="chef-details">\n        <div class=\'chef-image reveal\'>\n            <div class="image-1">\n                <img src ="images/chef-1.jpg">\n                <div class="text-content-1">\n                    <div class="effect">\n                        <span>thomas cilber</span>\n                        <p class="ptext">Age=55</p>\n                        <p class="text-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, earum dolor quo cumque fuga dolorem.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\'chef-image chef-image-2 reveal\'>\n            <div class="image-1">\n                <img src ="images/chef-2.jpg">\n                <div class="text-content-1">\n                    <div class="effect">\n                        <span>karen madison</span>\n                        <p class="ptext">Age=29</p>\n                        <p class="text-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, earum dolor quo cumque fuga dolorem.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\'chef-image chef-image-3 reveal\'>\n            <div class="image-1">\n                <img src ="images/chef-3.jpg">\n                <div class="text-content-1">\n                    <div class="effect">\n                        <span>Ben cutting</span>\n                        <p class="ptext">Age=30</p>\n                        <p class="text-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, earum dolor quo cumque fuga dolorem.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    ',t.appendChild(l);const o=document.createElement("section");o.classList.add("facilities"),o.innerHTML='\n    <h2 class="heading">WHY <span> SICILIA FOOD</span></h2>\n    <div class="icon-section">\n        <div class="icon-text reveal">\n            <i class="fa-solid fa-memo-circle-check fa-5x" style="color: #b31217;"></i>\n            <h2>Easy to Order</h2>\n            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, </p>\n        </div>\n        <div class="icon-text reveal">\n        <i class="fa-regular fa-badge-check fa-5x"style="color: #b31217;"></i>\n            <h2>Best Quality</h2>\n            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, </p>\n        </div>\n        <div class="icon-text reveal">\n            <i class="fa-solid fa-memo-circle-check fa-5x" style="color: #b31217;"></i>\n            <h2>fast delivery</h2>\n            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,</p>\n        </div>\n    </div>\n    ',t.appendChild(o);const r=document.createElement("section");r.classList.add("reviews-section"),r.classList.add("reveal");const m=document.createElement("h2");m.innerHTML=" <h2>WHATS OUR <span>Client's Say</span></h2>",r.appendChild(m);const p=document.createElement("div");p.classList.add("reviews-container");const u=document.createElement("div");u.setAttribute("class","prev"),u.innerHTML='<i class="fa-solid fa-arrow-left fa-2x"></i>';const f=document.createElement("div");f.setAttribute("class","next"),f.innerHTML='<i class="fa-solid fa-arrow-right fa-2x"></i>',p.appendChild(f),p.appendChild(u);const h=[{imageSrc:"images/face-1.jpg",name:"loura .R",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse eveniet, ipsa blanditiis velit praesentium.",occupation:"Student",stars:4},{imageSrc:"images/face-2.jpg",name:"joesef .inderson",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse eveniet, ipsa blanditiis velit praesentium.",occupation:"Teacher",stars:5},{imageSrc:"images/face-3.jpg",name:"jones .bale",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse eveniet, ipsa blanditiis velit praesentium.",occupation:"Worker",stars:4},{imageSrc:"images/face-5.jpg",name:"jack smith",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati esse eveniet, ipsa blanditiis velit praesentium.",occupation:"Barber",stars:5}];!function(){for(const e of h){const t=document.createElement("div");t.classList.add("review"),t.classList.add("reveal"),t.innerHTML=`\n                <div class='review-image-section '>\n                    <img src='${e.imageSrc}'>\n                    <div class="review-text">\n                        <h2>${e.name}</h2>\n                        <p>${e.text}</p>\n                        <h5>${e.occupation}</h5>\n                        <div class="star">\n                            ${'<i class="fa-solid fa-star fa-2x"></i>'.repeat(e.stars)}\n                        </div>\n                    </div>\n                </div>\n            `,p.appendChild(t)}}(),e.appendChild(p);const g=document.querySelectorAll(".review");let v,L=0;function C(e){g.forEach(((t,a)=>{a===e?(t.style.opacity="1",t.style.display="block"):(t.style.opacity="0",t.style.display="none")}))}function y(){E(),v=setInterval((()=>{x()}),9e3)}function E(){clearInterval(v)}function x(){L=(L+1)%h.length,C(L)}C(L),C(L),y(),f.addEventListener("click",(()=>{x(),C(L),E(),setTimeout(y,15e3)})),u.addEventListener("click",(()=>{L=(L-1+h.length)%h.length,C(L),C(L),E(),setTimeout(y,15e3)})),window.addEventListener("scroll",(function(){for(var e=document.querySelectorAll(".reveal"),t=0;t<e.length;t++){var a=window.innerHeight;e[t].getBoundingClientRect().top<a-150?e[t].classList.add("activation"):e[t].classList.remove("activation")}})),r.appendChild(p),t.appendChild(r),e.appendChild(t)};function t(){document.querySelector(".page-content").classList.remove("with-after")}function a(){const e=document.querySelector("#content"),t=document.querySelector(".page-content");t&&e.removeChild(t)}const n=()=>{const n=document.getElementById("content"),i=document.createElement("nav"),c=document.createElement("div"),d=document.createElement("div"),l=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div");let m=document.createElement("span");const p=document.createElement("list"),u=document.createElement("div"),f=document.createElement("div");d.setAttribute("id","home-btn"),l.setAttribute("id","menu-btn"),o.setAttribute("id","contact-btn"),i.classList.add("navbar"),c.classList.add("Links"),d.classList.add("tab"),l.classList.add("tab"),o.classList.add("tab"),r.classList.add("cart"),m.classList.add("quantity"),p.classList.add("list"),u.classList.add("burger"),f.classList.add("logo"),d.textContent="Home",l.textContent="Menu",o.textContent="Contact",m.textContent="0",r.innerHTML='<i class="fa-light fa-bag-shopping fa-2x"></i>',r.appendChild(m),u.innerHTML='<i class="fa-solid fa-burger fa-2x" ></i>',f.innerHTML='<img src="images/pizza-box.png">';const h=document.createElement("div");h.classList.add("card");const g=document.createElement("h1");g.textContent="My order",h.appendChild(g);const v=document.createElement("ul");v.classList.add("listCard"),h.appendChild(v);const L=document.createElement("div");L.classList.add("checkout");const C=document.createElement("div");C.classList.add("totale"),C.textContent="0";const y=document.createElement("div");function E(){n.classList.remove("lightseagreen-bg")}y.classList.add("closeShopping"),y.textContent="close",L.appendChild(C),L.appendChild(y),h.appendChild(L),n.appendChild(h),c.appendChild(d),c.appendChild(l),c.appendChild(o),i.appendChild(c),i.appendChild(r),i.appendChild(u),i.prepend(f),i.appendChild(p),n.appendChild(i);const x={home:d,menu:l,contact:o};let b=null;function T(e){d.style.backgroundColor="",l.style.backgroundColor="",o.style.backgroundColor="";const t=x[e];t.style.background="#FFA36C",b=t}function S(){c.classList.remove("active")}d.addEventListener("click",(()=>{a(),e(),T("home"),E(),t()})),l.addEventListener("click",(()=>{a(),(()=>{let e,t,a=[{id:1,name:"Margherita Pizza ",image:"pizza-01.png",price:35,addedToCart:!1},{id:2,name:"Beef Pizza ",image:"pizza-02.png",price:30,addedToCart:!1},{id:3,name:"Cheeseburger ",image:"pizza-03.png",price:25,addedToCart:!1},{id:4,name:"Marinara Pizza ",image:"pizza-04.png",price:40,addedToCart:!1},{id:5,name:"French Frise ",image:"pizza-05.png",price:15,addedToCart:!1},{id:6,name:"Neapolitan Pizaa ",image:"pizza-06.png",price:22,addedToCart:!1},{id:7,name:"chawarma ",image:"pizza-07.png",price:35,addedToCart:!1},{id:8,name:" Sicilian Pizza",image:"pizza-08.png",price:9,addedToCart:!1}];t=null!=localStorage.favorite?JSON.parse(localStorage.favorite):[],e=null!=localStorage.shopping?JSON.parse(localStorage.shopping):[];const n=document.querySelector("#content"),i=document.createElement("div");i.classList.add("page-content");const c=document.createElement("div");c.classList.add("container"),document.createElement("div").classList.add("menu");const d=document.createElement("div");d.classList.add("left");const l=document.createElement("div");l.classList.add("text");const o=document.createElement("div");o.classList.add("buttons");const r=document.createElement("button");r.classList.add("button");const m=document.createElement("button");m.classList.add("button"),r.innerHTML="view Menu",m.innerHTML="Book a Table",o.appendChild(r),o.appendChild(m);const p=document.createElement("div");p.textContent="Favorite ("+t.length+")",p.classList.add("favorite-btn");const u=document.createElement("div");u.classList.add("collection");const f=document.createElement("h2");f.innerText="Now Taking Online Orders";const h=document.createElement("h1");h.textContent="Varety Of Pizza ",l.appendChild(f),l.appendChild(h),d.appendChild(l);const g=document.createElement("div");g.classList.add("big-image");let v=document.createElement("img");v.src="images/pizza-03.png",g.appendChild(v);let L=null;a.forEach(((t,n)=>{a.addedToCart=!1;const i=document.createElement("div");i.classList.add("coll"),i.dataset.index=t.id;let s=document.createElement("div");s.classList.add("favorite"),s.textContent="favorits",s.innerHTML='<i class="fa-light fa-heart fa-2x" style="color: #ff0000;"></i>';let c=document.createElement("div");c.classList.add("specs");let d=document.createElement("h3");d.innerHTML=`${t.name}`;let l=document.createElement("div");l.classList.add("stars");for(let e=0;e<4;e++){let e=document.createElement("i");e.classList.add("fa-solid","fa-star","fa-2x"),e.style.color="#cad709",l.appendChild(e)}let o=document.createElement("i");o.classList.add("fa-regular","fa-star","fa-2x"),o.style.color="#cad709",l.appendChild(o);let r=document.createElement("span");r.classList.add("price"),r.innerHTML="$"+t.price;const m=document.createElement("div");m.classList.add("to-cart"),e.some((e=>e.id===t.id))?(m.innerHTML='<i class="fa-solid fa-cart-shopping fa-2xl" style="color: #ffffff;"></i>',a[n].addedToCart=!0):(m.innerHTML='<i class="fa-regular fa-cart-shopping fa-2xl" style="color: #ffffff;"></i>',a[n].addedToCart=!1),m.addEventListener("click",(()=>{a[n].addedToCart?(m.innerHTML='<i class="fa-regular fa-cart-shopping fa-2xl" style="color: #ffffff;"></i>',a[n].addedToCart=!1,z(n)):(m.innerHTML='<i class="fa-solid fa-cart-shopping fa-2xl" style="color: #ffffff;"></i>',a[n].addedToCart=!0,H(n))}));let p=document.createElement("img"),f=`images/pizza-0${t.id}.png`;p.src=f,c.appendChild(d),c.appendChild(l),c.appendChild(r),c.appendChild(m),c.appendChild(s),i.appendChild(c),i.appendChild(p),u.appendChild(i),i.addEventListener("click",(e=>{if(L!==i&&(!T||S)){const e=document.querySelector(".big-image img");e.style.transform="translate(0, -200%)",setTimeout((()=>{e.src=`images/pizza-0${t.id}.png`,e.style.transform="translate(0, 0)"}),1e3)}L=i}))})),d.appendChild(g);const C=document.createElement("div");C.setAttribute("class","collection-fav");const y=window.matchMedia("(max-width: 770px)");let E;function x(){const e=document.querySelector(".collection"),n=document.querySelectorAll(".coll"),i=document.querySelectorAll(".specs"),s=document.querySelectorAll(".to-cart"),c=document.querySelectorAll(".favorite");e.classList.add("collection-small"),e.classList.remove("collection"),s.forEach((e=>{e.classList.add("to-cart-small"),e.classList.remove("to-cart")})),n.forEach(((e,t)=>{e.classList.add("coll-small"),e.classList.remove("coll");const n=document.createElement("button");n.classList.add("cart-btn"),n.textContent="add to cart",n.addEventListener("click",(()=>{a[t].addedToCart?(a[t].addedToCart=!1,z(t)):(a[t].addedToCart=!0,H(t),console.log(t))})),e.prepend(n)})),i.forEach((e=>{e.classList.add("specs-small"),e.classList.remove("specs")})),document.querySelectorAll(".price").forEach((e=>{e.classList.add("price-small"),e.classList.remove("price")})),c.forEach(((e,n)=>{const i=a[n].id,s=t.includes(i);e.innerHTML=s?'<i class="fa-solid fa-heart fa-2x" style="color: #ff0000;"></i>':'<i class="fa-light fa-heart fa-2x" style="color: #ff0000;"></i>',e.addEventListener("click",(()=>{t.includes(i)?(E=!1,e.innerHTML='<i class="fa-light fa-heart fa-2x" style="color: #ff0000;"></i>',function(e){const n=a[e].id,i=t.indexOf(n);-1!==i&&(t.splice(i,1),localStorage.setItem("favorite",JSON.stringify(t)),b(),k(),C.innerHTML="",q())}(n)):(e.innerHTML='<i class="fa-solid fa-heart fa-2x" style="color: #ff0000;"></i>',E=!0,function(e){const n=a[e].id;t.includes(n)||(t.push(n),localStorage.setItem("favorite",JSON.stringify(t)),b(),k(),C.innerHTML="",q())}(n))}))}))}function b(){document.querySelectorAll(".favorite").forEach(((e,n)=>{const i=a[n].id,s=t.includes(i);e.innerHTML=s?'<i class="fa-solid fa-heart fa-2x" style="color: #ff0000;"></i>':'<i class="fa-light fa-heart fa-2x" style="color: #ff0000;"></i>'}))}let T,S=!1;function q(){C.style.display="none",t.forEach((e=>{const t=a.find((t=>t.id===e)),n=document.createElement("div");n.classList.add("coll-fav"),n.dataset.index=t.id;const i=document.createElement("button");i.classList.add("cart-btn"),i.textContent="add to cart",i.addEventListener("click",(()=>{addedToCart?(addedToCart=!1,z(e)):(addedToCart=!0,H(e))})),n.prepend(i);const s=document.createElement("div");s.classList.add("specs-fav");const c=document.createElement("h3");c.innerHTML=t.name;const d=document.createElement("div");d.classList.add("stars");for(let e=0;e<4;e++){const e=document.createElement("i");e.classList.add("fa-solid","fa-star","fa-2x"),e.style.color="#cad709",d.appendChild(e)}const l=document.createElement("i");l.classList.add("fa-regular","fa-star","fa-2x"),l.style.color="#cad709",d.appendChild(l);const o=document.createElement("span");o.classList.add("price"),o.innerHTML=`$${t.price}`;const r=document.createElement("img");r.src=`./images/${t.image}`,s.appendChild(c),s.appendChild(d),s.appendChild(o),s.appendChild(i),n.appendChild(i),n.appendChild(s),n.appendChild(r),C.appendChild(n)})),i.appendChild(C)}function k(){document.querySelector(".favorite-btn").textContent="Favorite ("+t.length+")"}function M(){const e=document.querySelector(".collection-small");e.classList.remove("collection-small"),e.classList.add("collection");const t=document.querySelectorAll(".coll-small"),a=document.querySelectorAll(".specs-small");document.querySelectorAll(".to-cart-small").forEach((e=>{e.classList.add("to-cart"),e.classList.remove("to-cart-small"),e.innerHTML='\'<i class="fa-regular fa-cart-shopping fa-2xl" style="color: #ffffff;"></i>\''})),t.forEach((e=>{e.classList.remove("coll-small"),e.classList.add("coll"),e.querySelector(".cart-btn").remove()})),a.forEach((e=>{e.classList.remove("specs-small"),e.classList.add("specs")})),document.querySelectorAll(".price-small").forEach((e=>{e.classList.remove("price-small"),e.classList.add("price")}))}function H(t){console.log("you have added plate n°"+t);const n=a[t],i=e.find((e=>e.id===n.id));i?i.quantity++:e.push({...n,quantity:1}),n.addedToCart=!0,localStorage.setItem("shopping",JSON.stringify(e)),w()}function z(t){console.log("you have removed plate n°"+t);const n=a[t],i=e.find((e=>e.id===n.id));if(i){if(i.quantity>1)i.quantity--;else{const t=e.indexOf(i);e.splice(t,1)}n.addedToCart=!1,localStorage.setItem("shopping",JSON.stringify(e)),w()}}function z(t){console.log("you have removed plate n°"+t);const n=a[t],i=e.find((e=>e.id===n.id));if(i){if(i.quantity>1)i.quantity--;else{const t=e.indexOf(i);e.splice(t,1)}localStorage.setItem("shopping",JSON.stringify(e)),w()}}function w(){const t=document.querySelector(".listCard"),a=document.querySelector(".totale"),n=document.querySelector(".navbar .cart .quantity");t.innerHTML="";let i=0,s=0;e.forEach(((a,n)=>{const c=document.createElement("li");c.classList.add("cart-item"),c.innerHTML=`\n                <div><img src="images/pizza-0${a.id}.png" alt="${a.name}"></div>\n                <div> ${a.name}</div>\n                <div>${a.quantity}</div>\n                <div>$${(a.price*a.quantity).toFixed(2)}</div>\n                <div>\n                    <button class="remove-button btn-cmp" data-index="${n}">-</button>\n                    <div class="count">${a.quantity}</div>\n                    <button class="add-button btn-cmp" data-index="${n}">+</button>\n                    </div>\n                </div>\n            `,t.appendChild(c),i+=a.price*a.quantity,s+=a.quantity;const d=c.querySelector(".add-button"),l=c.querySelector(".remove-button"),o=c.querySelector(".count");d.addEventListener("click",(()=>{e[n].quantity++,localStorage.setItem("shopping",JSON.stringify(e)),w()})),l.addEventListener("click",(()=>{e[n].quantity--,e[n].quantity<=0&&e.splice(n,1),localStorage.setItem("shopping",JSON.stringify(e)),w()})),o.textContent=a.quantity})),a.textContent=`Total Price: $${i.toFixed(2)}`,n.textContent=s}q(),p.addEventListener("click",(()=>{S?(setTimeout((()=>{C.innerHTML="",q(),C.style.display="none",C.style.opacity="0",setTimeout((()=>{c.style.display="flex",u.style.display="flex"}),300)}),500),S=!1):(c.style.display="none",u.style.display="none",S=!0,setTimeout((()=>{C.style.opacity="1",C.style.display="flex"}),300))})),y.addEventListener("change",(e=>{e.matches?(x(),T=!0):(M(),T=!1)})),r.addEventListener("click",(()=>{console.log("clicked menu"),C.innerHTML="",q();const e=document.querySelector(".collection"),t=document.querySelector(".collection-small");T?setTimeout((()=>{M(),T=!1,t.style.display="flex"}),300):(e.style.transition="opacity 0.3s ease-in-out",e.style.opacity="1",setTimeout((()=>{x(),T=!0}),300),s)}));const A=localStorage.getItem("shopping");A&&(e=JSON.parse(A)),w(),c.appendChild(o),c.appendChild(d),i.appendChild(c),i.appendChild(u),i.appendChild(p),n.appendChild(i)})(),T("menu"),document.querySelector(".page-content").classList.add("with-after")})),o.addEventListener("click",(()=>{a(),(()=>{const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("page-content"),t.style.cssText="background-image: url(./images/6.jpg);background-size: cover;background-attachment: fixed;background-position: center;position: absolute;top: 0;width: 100%;min-height: 145vh;";const a=document.createElement("div");a.classList.add("header");const n=document.createElement("h1");n.textContent="Contact Us";const i=document.createElement("h3");i.textContent="we'd love to hear from you",i.style.textTransform="uppercase",a.appendChild(n),a.appendChild(i);const s=document.createElement("div");s.classList.add("contact-form");const c=document.createElement("form");c.classList.add("left-contact"),c.action="https://formspree.io/f/mvojryjr",c.method="POST";const d=document.createElement("div");d.classList.add("right"),d.innerHTML='<img src="images/place.jpg.png"></img>';const l=document.createElement("input");l.type="text",l.name="fname",l.placeholder=" Your Name",l.required=!0,c.appendChild(l);const o=document.createElement("input");o.type="text",o.name="number",o.placeholder="Your phone Number",c.appendChild(o);const r=document.createElement("input");r.type="text",r.name="email",r.placeholder="Your email",c.appendChild(r);const m=document.createElement("textarea");m.rows="6",m.cols="10",m.name="message",m.placeholder=" Your Message here...",c.appendChild(m);const p=document.createElement("input");p.type="submit";const u=document.createElement("footer"),f=document.createElement("div");f.classList.add("container-footer");const h=document.createElement("div");h.classList.add("personne"),h.innerHTML='<i class="fa-solid fa-user-headset fa-4x" style="color: #ff0000;"></i>',f.appendChild(h);const g=document.createElement("div");g.classList.add("information");const v=document.createElement("h1");v.innerText="CONTACT ...",g.appendChild(v);let L=['<i class="fa-solid fa-map-location-dot fa-2x" style="color: #ff0000;"></i>','<i class="fa-solid fa-envelope fa-2x" style="color: #ff0000;"></i>','<i class="fa-solid fa-magnifying-glass fa-2x" style="color: #ff0000;"></i>','<i class="fa-solid fa-phone-office fa-2x" style="color: #ff0000;"></i>'],C=["1/2 street sylhet, BD","flanfjlkqdsqq@gmail.com","https://www.sicillia.com","+99976775335"];const y=document.createElement("ul");for(let e=0;e<4;e++){const t=document.createElement("li"),a=document.createElement("span");a.innerHTML=L[e];const n=document.createElement("span");n.innerHTML=C[e],t.appendChild(a),t.appendChild(n),y.appendChild(t)}const E=document.createElement("div");E.classList.add("wrapper"),E.innerHTML='\n    <div class="social-icons">\n    <a \n        href="#"\n        class="social-icon twitter"\n        src="https://icons8.com/icon/102907/twitter">\n        <i class="fab fa-twitter"></i>\n    </a>\n    <a href="#"\n        class="social-icon instagram">\n        <i class="fab fa-instagram"></i>\n    </a>\n        <a href="#" \n        class="social-icon whatsapp">\n        <i class="fab fa-whatsapp"></i> \n    </a>\n        <a class="social-icon facebook" \n        href="#" >\n        <i class="fab fa-facebook-f"></i>\n    </a>\n    </div>',g.appendChild(y),f.appendChild(g),f.appendChild(E),u.appendChild(f),c.appendChild(p),s.appendChild(c),s.appendChild(d),t.appendChild(a),t.appendChild(s),t.appendChild(u),e.appendChild(t)})(),T("contact"),E(),t()})),u.addEventListener("click",(()=>{document.querySelector(".link .active"),c.classList.contains("active")?setTimeout((()=>{c.classList.remove("active"),c.style.transition=""}),500):(c.classList.add("active"),setTimeout((()=>{}),500))}));const q=window.matchMedia("(min-width: 480px)");q.addEventListener("change",(e=>{e.matches&&S()})),q.matches&&S(),d.addEventListener("click",E),o.addEventListener("click",E),r.addEventListener("click",(()=>{console.log("clicked"),h.classList.toggle("activate")})),y.addEventListener("click",(()=>{h.classList.remove("activate")}))};n(),e()})();