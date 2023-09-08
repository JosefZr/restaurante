
// module for creating the content page 
const creatContentPage=()=>{
    const content = document.getElementById('content');
    const pageContent=document.createElement('div');
    pageContent.classList.add('page-content');
    pageContent.style.cssText="background-image: url(./images/6.jpg);background-size: cover;background-attachment: fixed;background-position: center;position: absolute;top: 0;width: 100%;min-height: 145vh;"
    
    const header = document.createElement('div');
    header.classList.add('header');
    const h1 = document.createElement('h1');
    h1.textContent='Contact Us';
    const h3 = document.createElement('h3');
    h3.textContent="we'd love to hear from you"
    h3.style.textTransform='uppercase';
    header.appendChild(h1);
    header.appendChild(h3);

    const form = document.createElement('div');
    form.classList.add("contact-form");

    const left=document.createElement('form');
    left.classList.add('left-contact');
    left.action="https://formspree.io/f/mvojryjr";
    left.method="POST"
    const right =document.createElement("div");
    right.classList.add('right');
    right.innerHTML='<img src="images/place.jpg.png"></img>';

    const headingInput = document.createElement('input');
    headingInput.type='text';
    headingInput.name="fname"
    headingInput.placeholder=" Your Name";
    headingInput.required=true;
    left.appendChild(headingInput);

    const phoneInput = document.createElement('input');
    phoneInput.type='text';
    phoneInput.name="number";
    phoneInput.placeholder="Your phone Number";
    left.appendChild(phoneInput);
    
    const addressInput = document.createElement('input');
    addressInput.type='text';
    addressInput.name="email";
    addressInput.placeholder="Your email";
    left.appendChild(addressInput);

    const context = document.createElement('textarea');
    context.rows="6";
    context.cols="10";
    context.name="message";
    context.placeholder=" Your Message here...";    
    left.appendChild(context);

    const btnSubmit =document.createElement('input');
    btnSubmit.type='submit';
    
    const footer = document.createElement('footer');
    const container = document.createElement('div');
    container.classList.add('container-footer');
    
    const personne = document.createElement('div');
    personne.classList.add('personne') ;
    personne.innerHTML='<i class="fa-solid fa-user-headset fa-4x" style="color: #ff0000;"></i>';
    container.appendChild(personne);

    const information = document.createElement('div');
    information.classList.add('information');
    const contact = document.createElement('h1');
    contact.innerText ='CONTACT ...' ;
    information.appendChild(contact);
    let icons = [
        '<i class="fa-solid fa-map-location-dot fa-2x" style="color: #ff0000;"></i>',
        '<i class="fa-solid fa-envelope fa-2x" style="color: #ff0000;"></i>',
        '<i class="fa-solid fa-magnifying-glass fa-2x" style="color: #ff0000;"></i>',
        '<i class="fa-solid fa-phone-office fa-2x" style="color: #ff0000;"></i>'
    ];
    
    let text = [
        '1/2 street sylhet, BD',
        'flanfjlkqdsqq@gmail.com',
        'https://www.sicillia.com',
        '+99976775335'
    ];
    const ul = document.createElement('ul');
    for (let i = 0; i < 4; i++) {
        const li = document.createElement('li');
    
        const iconSpan = document.createElement('span');
        iconSpan.innerHTML = icons[i];
    
        const textSpan = document.createElement('span');
        textSpan.innerHTML = text[i];
    
        li.appendChild(iconSpan);
        li.appendChild(textSpan);
    
        ul.appendChild(li);
    }
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    wrapper.innerHTML=`
    <div class="social-icons">
    <a 
        href="#"
        class="social-icon twitter"
        src="https://icons8.com/icon/102907/twitter">
        <i class="fab fa-twitter"></i>
    </a>
    <a href="#"
        class="social-icon instagram">
        <i class="fab fa-instagram"></i>
    </a>
        <a href="#" 
        class="social-icon whatsapp">
        <i class="fab fa-whatsapp"></i> 
    </a>
        <a class="social-icon facebook" 
        href="#" >
        <i class="fab fa-facebook-f"></i>
    </a>
    </div>`;

    information.appendChild(ul);
    container.appendChild(information);
    container.appendChild(wrapper)
    footer.appendChild(container);
    
    left.appendChild(btnSubmit)
    form.appendChild(left);
    form.appendChild(right)

    pageContent.appendChild(header);
    pageContent.appendChild(form);
    pageContent.appendChild(footer);
    content.appendChild(pageContent);
}
    export default creatContentPage;