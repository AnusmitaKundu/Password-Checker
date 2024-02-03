const password = document.getElementById("password");
const message = document.getElementById("message");
const strength = document.getElementById("strength");
const submitButton = document.querySelector("button");

password.addEventListener("input", function () {
    const passwordValue = password.value;
    const passwordLength = passwordValue.length;

    let strengthValue = '';

    // Check if the password is empty
    if (passwordLength === 0) {
        strengthValue = '';
    } else if (passwordLength < 3) {
        strengthValue = 'Weak';
    } else if (passwordLength < 6) {
        // Check for lowercase and uppercase letters
        if (/[a-z]/.test(passwordValue) && /[A-Z]/.test(passwordValue)) {
            strengthValue = 'Medium';
        } else {
            strengthValue = 'Weak';
        }
    } else {
        // Check for lowercase, uppercase, and special characters
        if (/[a-z]/.test(passwordValue) && /[A-Z]/.test(passwordValue) && /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/.test(passwordValue)) {
            strengthValue = 'Strong';
        } else {
            strengthValue = 'Medium';
        }
    }

    strength.textContent = strengthValue;
    message.style.display = "block";
});

submitButton.addEventListener("click", function () {
    const passwordType = password.getAttribute('type');

    // Toggle between password and text visibility
    if (passwordType === 'password') {
        password.setAttribute('type', 'text');
    } else {
        password.setAttribute('type', 'password');
    }
});
