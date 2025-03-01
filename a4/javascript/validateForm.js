function validateForm() {
    var valid = true;
    var firstErrorElement = null;

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    // First Name
    var firstname = document.getElementById("firstname").value;
    if (firstname === "" || firstname.length > 20 || !/^[a-zA-Z]+$/.test(firstname)) {
        document.getElementById("firstnameError").innerHTML = "The firstname is required, cannot be greater than 20 characters, and must contain only letters.";
        valid = false;
        if (!firstErrorElement) firstErrorElement = document.getElementById("firstname");
    }

    // Last Name
    var lastname = document.getElementById("lastname").value;
    if (lastname === "" || lastname.length > 20 || !/^[a-zA-Z]+$/.test(lastname)) {
        document.getElementById("lastnameError").innerHTML = "Last Name is required and must be less than 20 characters and contain only letters.";
        valid = false;
        if (!firstErrorElement) firstErrorElement = document.getElementById("lastname");
    }

    // Email
    var email = document.getElementById("email").value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        document.getElementById("emailError").innerHTML = "Invalid email format.";
        valid = false;
        if (!firstErrorElement) firstErrorElement = document.getElementById("email");
    }

    // Phone
    var phone = document.getElementById("phone").value;
    if (isNaN(phone) || phone.length > 15 || phone === "") {
        document.getElementById("phoneError").innerHTML = "Invalid phone number. Only numbers are allowed and should be less than 15 digits.";
        valid = false;
        if (!firstErrorElement) firstErrorElement = document.getElementById("phone");
    }

    // Username
    var username = document.getElementById("username").value;
    if (username === "" || username.length > 12) {
        document.getElementById("usernameError").innerHTML = "Username is required and must be less than 12 characters.";
        valid = false;
        if (!firstErrorElement) firstErrorElement = document.getElementById("username");
    }

    // Password
    var password = document.getElementById("password").value;
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{1,7}$/;
    if (password === "" || password.length > 7 || !passwordPattern.test(password)) {
        document.getElementById("passwordError").innerHTML = "Password is required and must be less than 7 characters, including 1 upper, 1 lower, 1 number, and 1 special character.";
        valid = false;
        if (!firstErrorElement) firstErrorElement = document.getElementById("password");
    }

    // Address
    var address = document.getElementById("address").value;
    if (address === "") {
        document.getElementById("addressError").innerHTML = "Address is required.";
        valid = false;
        if (!firstErrorElement) firstErrorElement = document.getElementById("address");
    }

    // City
    var city = document.getElementById("city").value;
    if (city === "") {
        document.getElementById("cityError").innerHTML = "City is required.";
        valid = false;
        if (!firstErrorElement) firstErrorElement = document.getElementById("city");
    }

    // State
    var state = document.getElementById("state").value;
    if (state === "") {
        document.getElementById("stateError").innerHTML = "State is required.";
        valid = false;
        if (!firstErrorElement) firstErrorElement = document.getElementById("state");
    }

    // Country
    var country = document.getElementById("country").value;
    if (country === "") {
        document.getElementById("countryError").innerHTML = "Country is required.";
        valid = false;
        if (!firstErrorElement) firstErrorElement = document.getElementById("country");
    }

    // Zip Code
    var zipcode = document.getElementById("zipcode").value;
    if (country === "USA") {
        if (zipcode === "" || isNaN(zipcode) || zipcode.length !== 5) {
            document.getElementById("zipcodeError").innerHTML = "Zip Code is required and must be a 5-digit number.";
            valid = false;
            if (!firstErrorElement) firstErrorElement = document.getElementById("zipcode");
        }
    }

    // Focus on the first error element
    if (firstErrorElement) {
        firstErrorElement.focus();
    }

    return valid;
}
