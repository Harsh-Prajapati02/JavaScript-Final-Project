// SHOW MENU
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    toggle.addEventListener("click", () => {
        // Add show-menu class to nav menu
        nav.classList.toggle("show-menu");

        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle("show-icon");
        // document.querySelector(".nav_link").style.border = "none";
    })
}

showMenu("nav-toggle", "nav-menu");

// SHOW DROPDOWN MENU
const dropdownItems = document.querySelectorAll(".dropdown_item");

// 1. Select each dropdown item
dropdownItems.forEach((item) => {
    const dropdownButton = item.querySelector(".dropdown_button");

    // 2. Select each button click
    dropdownButton.addEventListener("click", () => {
        // 7. Select the current show-dropdown class
        const showDropdown = document.querySelector(".show-dropdown");

        // 5. Call the toggleItem function
        toggleItem(item);

        // 8. Remove the show-dropdown class from other items
        if (showDropdown && showDropdown != item) {
            toggleItem(showDropdown);
        }
    })
});

// 3. Create a function to display the dropdown
const toggleItem = (item) => {
    // 3.1 Select each dropdown content 
    const dropdownContainer = item.querySelector(".dropdown_container");

    // 6. If the item contains the show-dropdown class, remove
    if (item.classList.contains("show-dropdown")) {
        dropdownContainer.removeAttribute("style");
        item.classList.remove("show-dropdown");
    } else {
        // 4. Add the maximum height to the dropdown content and add the show-dropdown class
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px';
        item.classList.add("show-dropdown");
    }
}

// DELETE DROPDOWN STYLES
const mediaQuery = matchMedia("(min-width: 1118px)"),
    dropdownContainer = document.querySelectorAll(".dropdown_container");

// Function to remove dropdown styles in mobile mode when browser resizes
const removeStyles = () => {
    // Validate if the media query eaches 1180px
    if (mediaQuery.matches) {
        // Remove the dropdown container height style
        dropdownContainer.forEach((e) => {
            e.removeAttribute("style");
        });

        // Remove the show-dropdown class from dropdown item
        dropdownItems.forEach((e) => {
            e.classList.remove("show-dropdown");
        });
    }
}
addEventListener("resize", removeStyles);


// Signup-Form
let SignupForm = document.getElementById("signup-form");

let userDataArr = JSON.parse(localStorage.getItem("UserData")) || [];
SignupForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let userSignupData = {
        firstName,
        lastName,
        email,
        password
    };

    let isValid = true;
    if (firstName == "") {
        if (firstName == "") {
            document.getElementById("firstNameError").innerText = "Please enter your first name";
            document.getElementById("first-name").style.border = "1px solid #d54d4d";
            isValid = false;
        } else {
            document.getElementById("firstNameError").innerText = "";
            document.getElementById("first-name").style.border = "1px solid #000";
        }
    } else if (lastName == "") {
        if (lastName == "") {
            document.getElementById("lastNameError").innerText = "Please enter your last name";
            document.getElementById("last-name").style.border = "1px solid #d54d4d";
            isValid = false;
        } else {
            document.getElementById("lastNameError").innerText = "";
            document.getElementById("last-name").style.border = "1px solid #000";
        }
    } else if (email == "") {
        if (email == "") {
            isValid = false;
            document.getElementById("emailError").innerText = "Please enter a valid email address";
            document.getElementById("email").style.border = "1px solid #d54d4d";
        } else {
            document.getElementById("emailError").innerText = "";
            document.getElementById("email").style.border = "1px solid #000";
        }
    } else {
        if (password == "") {
            isValid = false;
            document.getElementById("passwordError").innerText = "Please enter a valid password";
            document.getElementById("password").style.border = "1px solid #d54d4d";
        } else {
            document.getElementById("passwordError").innerText = "";
            document.getElementById("password").style.border = "1px solid #000";
        }
    }

    if (isValid) {
        alert("Account Created Successfully.")
    } else {
        alert("Form Not Submitted!")
    }

// Clear Inputs
// document.getElementById("first-name").value = "";
// document.getElementById("last-name").value = "";
// document.getElementById("email").value = "";
// document.getElementById("password").value = "";

//Push values(objects) in arr 
    userDataArr.push(userSignupData);
    console.log(userDataArr);

    // Set Data in Local Storage
    localStorage.setItem("UserData", JSON.stringify(userDataArr));
})

// Signin-Form
let signinForm = document.getElementById("signin-form");

signinForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

// Access values
let email = document.getElementById("signin-email").value;
let password = document.getElementById("signin-password").value;

// Object
let userSigninData = {
    email,
    password
}

isValid = true;
if (email == "") {
    if (email == "") {
        isValid = false;
        document.getElementById("LoginEmailError").innerText = "Please enter a valid email address";
        document.getElementById("signin-email").style.border = "1px solid #d54d4d";
    } else {
        document.getElementById("LoginEmailError").innerText = "";
        document.getElementById("signin-email").style.border = "1px solid #000";
    }
} else {
    if (password == "") {
        isValid = false;
        document.getElementById("LoginPasswordError").innerText = "Please enter a valid password";
        document.getElementById("signin-password").style.border = "1px solid #d54d4d";
    } else {
        document.getElementById("LoginPasswordError").innerText = "";
        document.getElementById("signin-password").style.border = "1px solid #000";
    }
}

// Clear Inputs
// document.getElementById("signin-email").value = "";
// document.getElementById("signin-password").value = "";

    let check = userDataArr.filter((el) => {
        return el.email == userSigninData.email &&
        el.password == userSigninData.password;
    });

    if (check[0] && isValid == true) {
        alert("Login Successfully !");
    } else {
        alert("Email or Password Incorrect");
    }
})
