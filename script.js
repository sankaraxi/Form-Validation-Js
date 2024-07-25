const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const submitError = document.getElementById('submit-error');

function validateName() {
    const name = document.getElementById('contact-name').value;
    if (name.length === 0) { // Check if name is empty
        nameError.innerHTML = 'Name is required';
        return false; // Return false to prevent form submission
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) { // Check if name is in the format "Firstname Lastname"
        nameError.innerHTML = 'Write your full name';
        return false; // Return false to prevent form submission
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true; // Return true to allow form submission
}

function validatePhone() {
    const phone = document.getElementById('contact-phone').value;
    if (phone.length === 0) { // Check if phone is empty
        phoneError.innerHTML = 'Phone No. is required';
        return false; // Return false to prevent form submission
    }
    if (phone.length !== 10) { // Check if phone is 10 digits
        phoneError.innerHTML = 'Phone No. should be 10 digits';
        return false; // Return false to prevent form submission
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true; // Return true to allow form submission
}

function validateEmail() {
    const email = document.getElementById('contact-email').value;
    if (email.length === 0) {
        emailError.innerHTML = 'Email is required';
        return false; 
    }

    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        emailError.innerHTML = 'Invalid email';
        return false; 
    }
    
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true; // Return true to allow form submission
}

function validateMessage() {
    const message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if (left > 0) {
        messageError.innerHTML =  `${left} characters left`;
        return false; 
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true; // Return true to allow form submission
}

function validateForm() {
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix errors!';
        setTimeout(function() {
            submitError.style.display = 'none';
        }, 3000);
        return false;
    }
}