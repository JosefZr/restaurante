(()=>{"use strict";const e=()=>{const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("div");n.classList.add("two-side");const a=document.createElement("div");a.classList.add("background-image");const d=document.createElement("h1");d.classList.add("text"),d.textContent="the real taste of naples",n.appendChild(d),n.appendChild(a),t.appendChild(n),a.style.backgroundImage='url("images/1.jpg")';const c=document.createElement("h1");c.textContent="Welcome to our restaurant",t.appendChild(c);const o=document.createElement("p");o.textContent="We serve the best food in town. Come and taste.",t.appendChild(o),e.appendChild(t);let l,i=["images/1.jpg","images/2.jpg","images/3.jpg"],s=["the real taste of naples","the true italian test","authustic tuscany flafor"];l=setInterval((function(){let e=Math.floor(Math.random()*i.length);a.style.backgroundImage=`url("${i[e]}")`,d.textContent=`${s[e]}`}),3e3)};function t(){const e=document.querySelector("#content"),t=document.querySelector(".page-content");t&&e.removeChild(t)}(()=>{const n=document.getElementById("content"),a=document.createElement("nav"),d=document.createElement("div"),c=document.createElement("div"),o=document.createElement("div"),l=document.createElement("div"),i=document.createElement("div"),s=document.createElement("div");c.setAttribute("id","home-btn"),o.setAttribute("id","menu-btn"),l.setAttribute("id","contact-btn"),a.classList.add("navbar"),d.classList.add("Links"),c.classList.add("tab"),o.classList.add("tab"),l.classList.add("tab"),i.classList.add("cart"),s.classList.add("logo"),c.textContent="Home",o.textContent="Menu",l.textContent="Contact",i.innerHTML='<i class="fa-regular fa-cart-plus"></i>',s.innerHTML='<img src="images/pizza-box.png">',d.appendChild(c),d.appendChild(o),d.appendChild(l),a.appendChild(d),a.appendChild(i),a.prepend(s),n.appendChild(a),c.addEventListener("click",(()=>{t(),e()})),o.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("h1");n.textContent="we make the double cheasy pizza ";const a=document.createElement("p");a.textContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam aperiam alias officia error cum. Ex recusandae itaque totam eveniet consequuntur?",document.createElement("div").setAttribute("class","big-image");let d=document.createElement("img");d.src="images/pizza-01.jpg";const c=document.createElement("lu"),o=document.createElement("li");o.textContent="Pomodoro";const l=document.createElement("li");l.textContent="Bolognesa";const i=document.createElement("li");i.textContent="French Toast",c.appendChild(o),c.appendChild(l),c.appendChild(i),t.appendChild(n),t.appendChild(a),t.appendChild(d),t.appendChild(c),e.appendChild(t)})()})),l.addEventListener("click",(()=>{t(),(()=>{const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("form");n.classList.add("contact-form");const a=document.createElement("input");a.type="text",a.placeholder="Enter Heading",n.appendChild(a);const d=document.createElement("input");d.type="text",d.placeholder="Enter Address",n.appendChild(d);const c=document.createElement("input");c.type="text",c.placeholder="Enter Phone Number",n.appendChild(c);const o=document.createElement("input");o.type="submit",o.valur="submit",n.appendChild(o),t.appendChild(n),e.appendChild(t)})()}))})(),e()})();