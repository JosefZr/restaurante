
// module for creating the content page 
const creatContentPage=()=>{
    const content = document.getElementById('content');
    const pageContent=document.createElement('div');
    pageContent.classList.add('page-content');
    pageContent.style.cssText="background-image: url(./images/6.jpg);background-size: cover;background-attachment: fixed;background-position: center;position: absolute;top: 0;width: 100%;height: 145vh;"
    
    const header = document.createElement('div');
    header.classList.add('header');
    const h1 = document.createElement('h1');
    h1.textContent='Contact Us';
    const h3 = document.createElement('h3');
    h3.textContent="we'd love to hear from you"
    h3.style.textTransform='uppercase';
    header.appendChild(h1);
    header.appendChild(h3);

    const form = document.createElement('form');
    form.classList.add("contact-form");

    const left=document.createElement('div');
    left.classList.add('left-contact');

    const right =document.createElement("div");
    right.classList.add('right');
    right.innerHTML='<img src="images/place.jpg.png"></img>';

    const headingInput = document.createElement('input');
    headingInput.type='text';
    headingInput.placeholder=" Your Name";
    left.appendChild(headingInput);
    
    const addressInput = document.createElement('input');
    addressInput.type='text';
    addressInput.placeholder="Your phone Number";
    left.appendChild(addressInput);
    
    const phoneInput = document.createElement('input');
    phoneInput.type='text';
    phoneInput.placeholder="Your email";
    left.appendChild(phoneInput);

    const context = document.createElement('textarea');
    context.rows="6";
    context.cols="10";
    context.placeholder=" Your Message here...";    
    left.appendChild(context);

    const btnSubmit =document.createElement('input');
    btnSubmit.type='submit';
    
    const footer = document.createElement('footer');
    
    left.appendChild(btnSubmit)
    form.appendChild(left);
    form.appendChild(right)

    pageContent.appendChild(header);
    pageContent.appendChild(form);
    pageContent.appendChild(footer);
    content.appendChild(pageContent);
}
    export default creatContentPage;