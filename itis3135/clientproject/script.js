// THIS IS USED THAT IF U CLICK THE CONTACT US BUTTON YOU BY DEFAULT GO TO MESSAGE FORM
document.addEventListener("DOMContentLoaded", function () {
    const contactButton = document.getElementById("contact");
    contactButton.addEventListener("click", function (contact) {
        contact.preventDefault(); 
        window.location.href = "messageform.html"; 
    });
});

//1. When you hover on the boxes in About Us page
document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.boxes');

    boxes.forEach((box) => { // Corrected misplaced parentheses
        const title = box.querySelector('.title');
        const description = box.querySelector('p');

        box.addEventListener('mouseover', () => {
            title.style.color = '#C5A880'; 
            description.style.color = '#C5A880'; 
            box.style.backgroundColor = '#222D52'; 
            box.style.borderRadius = '20px'; 
            box.style.boxShadow = '5px 10px 25px rgba(197, 168, 128, 1)'; 
        });
    });
});

// 2. When you hover on the boxes in the Services page
document.addEventListener('DOMContentLoaded', () => {
    const serviceboxes = document.querySelectorAll('.servicebox');

    serviceboxes.forEach((box) => { // Corrected parentheses placement
        const title = box.querySelector('h2');
        const description = box.querySelector('p');

        box.addEventListener('mouseover', () => {
            title.style.color = '#C5A880'; 
            description.style.color = '#C5A880'; 
            box.style.backgroundColor = '#222D52'; 
            box.style.borderRadius = '20px'; 
            box.style.boxShadow = '5px 10px 25px rgba(197, 168, 128, 1)'; 
        });
    });
});

// 3. When you hover on the boxes in Testimonials page
document.addEventListener('DOMContentLoaded', () => {
    const testimonialboxes = document.querySelectorAll('.testimonialsbox');

    testimonialboxes.forEach((box) => { // Corrected parentheses placement
        const title = box.querySelector('h2');
        const role = box.querySelector('p:nth-of-type(1)');
        const feedback = box.querySelector('p:nth-of-type(2)');

        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = '#C5A880';
            box.style.borderRadius = '20px'; 
            title.style.color = '#000000'; 
        });  
    });
});



