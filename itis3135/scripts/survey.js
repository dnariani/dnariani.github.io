/*Add a JavaScript function that will reset the progress of the form */
function reset() {
    const form = document.querySelector(".BYOform");
    form.reset();
} 

/* Add a JavaScript function that will add new course text boxes*/
/* Add a JavaScript function that will add a delete button beside each new course text box*/
function addNewCourse() {
    let getButton = document.getElementById("add-course"); // Get the "Add Course" button
    // when button is clicked
    getButton.onclick = function() {
        let getDivOfCourse = document.getElementById("courses"); // Get the div list of courses
        // Create a new input field
        let newInput = document.createElement("input");
        newInput.type = "text";
        newInput.placeholder = "XXXX-1234 - Name";

        // create a delete button
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.type = "button"; 
    
        deleteButton.onclick = function() {
            getDivOfCourse.removeChild(newInput); 
            getDivOfCourse.removeChild(deleteButton); 
        };
        
        getDivOfCourse.appendChild(newInput);
        getDivOfCourse.appendChild(deleteButton);
    };
}

document.addEventListener("DOMContentLoaded", function() {
    addNewCourse();
});


/*When the user clicks 'Submit', use JavaScript to gather the data from the form and add content in place of the form. */


/*Add a JavaScript function that prevents the form from submitting w/o the necessary information. */












































/* When the user clicks 'Submit', use JavaScript to gather the data from the form and add content in place of the form.*/



/* Add a JavaScript function that prevents the form from submitting w/o the necessary information. */


/*
document.addEventListener("DOMContentLoaded", function () {
    /* Function to add new course text boxes and delete buttons 
    function addNewCourse() {
        const addButton = document.getElementById("add-course"); // Get "Add Course" button
        addButton.onclick = function () {
            const coursesContainer = document.getElementById("courses"); // Get courses section
            
            // Create a new input field
            const inputField = document.createElement("input");
            inputField.type = "text";
            inputField.placeholder = "XXXX-1234 - Name";
            inputField.required = true; // Required field

            // Create a delete button for the input
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.type = "button"; // Prevent button from submitting the form
            deleteButton.style.marginLeft = "10px";
            deleteButton.style.backgroundColor = "red";
            deleteButton.style.color = "white";
            deleteButton.style.border = "none";
            deleteButton.style.borderRadius = "5px";
            deleteButton.style.cursor = "pointer";

            // Add delete functionality
            deleteButton.addEventListener("click", function () {
                coursesContainer.removeChild(inputField); // Remove input
                coursesContainer.removeChild(deleteButton); // Remove button
            });

            // Append the input and delete button to the courses container
            coursesContainer.appendChild(inputField);
            coursesContainer.appendChild(deleteButton);
        };
    } */
