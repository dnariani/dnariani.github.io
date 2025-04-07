// THIS IS USED THAT IF U CLICK THE CONTACT US BUTTON YOU BY DEFAULT GO TO MESSAGE FORM
document.addEventListener("DOMContentLoaded", function () {
    const contactButton = document.getElementById("contact");
    contactButton.addEventListener("click", function (contact) {
        contact.preventDefault(); 
        window.location.href = "messageform.html"; 
    });
});
