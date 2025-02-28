function validateForm() {
    var valid = true;

    // First Name
    var firstname = document.getElementById("firstname").value;
    if (firstname === "" || firstname.length > 20 || !/^[a-zA-Z]+$/.test(firstname)) {
        document.getElementById("firstnameError").innerHTML = "The firstname is required, cannot be greater than 20 characters, and must contain only letters.";
        valid = false;
    } else {
        document.getElementById("firstnameError").innerHTML = "";
    }

    // Last Name
    var lastname = document.getElementById("lastname").value;
    if (lastname === "" || lastname.length > 20 || !/^[a-zA-Z]+$/.test(lastname)) {
        document.getElementById("lastnameError").innerHTML = "Last Name is required and must be less than 20 characters and contain only letters.";
        valid = false;
    } else {
        document.getElementById("lastnameError").innerHTML = "";
    }

    // Email
    var email = document.getElementById("email").value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        document.getElementById("emailError").innerHTML = "Invalid email format.";
        valid = false;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }

    // Phone
    var phone = document.getElementById("phone").value;
    if (isNaN(phone) || phone.length > 15 || phone === "") {
        document.getElementById("phoneError").innerHTML = "Invalid phone number. Only numbers are allowed and should be less than 15 digits.";
        valid = false;
    } else {
        document.getElementById("phoneError").innerHTML = "";
    }

    // Username
    var username = document.getElementById("username").value;
    if (username === "" || username.length > 12) {
        document.getElementById("usernameError").innerHTML = "Username is required and must be less than 12 characters.";
        valid = false;
    } else {
        document.getElementById("usernameError").innerHTML = "";
    }

    // Password
    var password = document.getElementById("password").value;
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{1,7}$/;
    if (password === "" || password.length > 7 || !passwordPattern.test(password)) {
        document.getElementById("passwordError").innerHTML = "Password is required and must be less than 7 characters, including 1 upper, 1 lower, 1 number, and 1 special character.";
        valid = false;
    } else {
        document.getElementById("passwordError").innerHTML = "";
    }

    // Address
    var address = document.getElementById("address").value;
    if (address === "") {
        document.getElementById("addressError").innerHTML = "Address is required.";
        valid = false;
    } else {
        document.getElementById("addressError").innerHTML = "";
    }

    // City
    var city = document.getElementById("city").value;
    if (city === "") {
        document.getElementById("cityError").innerHTML = "City is required.";
        valid = false;
    } else {
        document.getElementById("cityError").innerHTML = "";
    }

    // State
    var state = document.getElementById("state").value;
    if (state === "") {
        document.getElementById("stateError").innerHTML = "State is required.";
        valid = false;
    } else {
        document.getElementById("stateError").innerHTML = "";
    }

    // Country
    var country = document.getElementById("country").value;
    if (country === "") {
        document.getElementById("countryError").innerHTML = "Country is required.";
        valid = false;
    } else {
        document.getElementById("countryError").innerHTML = "";
    }

    // Zip Code
    var zipcode = document.getElementById("zipcode").value;
    if (country === "USA") {
        if (zipcode === "" || isNaN(zipcode) || zipcode.length !== 5) {
            document.getElementById("zipcodeError").innerHTML = "Zip Code is required and must be a 5-digit number.";
            valid = false;
        } else {
            document.getElementById("zipcodeError").innerHTML = "";
        }
    } else {
        document.getElementById("zipcodeError").innerHTML = "";
    }

    return valid;
}
