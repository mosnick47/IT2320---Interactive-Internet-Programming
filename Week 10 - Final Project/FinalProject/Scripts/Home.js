
function User(userName, passWord, eMail) {
    this.userName = document.getElementById("Un").value;
    this.passWord = document.getElementById("Pw").value;
    this.eMail = document.getElementById("CEm").value;
}

function ValidateCreateLoginForm() {

    //validation of username
    var userName = document.getElementById("Un").value;
    var passWord = document.getElementById("Pw").value;
    var eMail = document.getElementById("Em").value;
    var confirmEmail = document.getElementById("CEm").value;

    if (userName.length < 6) {
        alert("Username must be at least 6 characters long.");
    }
    else if (passWord.length < 6) {        
        alert("Password must be at least 6 characters long.");
    }
    else if (!eMail.includes("@")) {
        alert("Email is not in correct format. Must be in the format of someone@mail.com");
    }
    else if (confirmEmail !== eMail) {
        alert("Please verify that the confirm email input matches the email input.");
    }
    else {
        var user = new User();
        var button = document.getElementById("submitButton");
        DisplayLogin();

        // modify submit button to call new method
        button.onclick = function () { ValidateLogin(user) };
    }
    
}

function DisplayLogin() {

    alert("You have successfully created an account.");

    // Accessing the parent node
    var myForm = document.getElementById("createLoginForm");    

    // Change the header to Login
    var myHeader = document.getElementById("formHeader").innerHTML = "Login";

    // Get the values of Create Login Form 
    var myUname = document.getElementById("Un").value;
    var myPword = document.getElementById("Pw").value;
    var myEmail = document.getElementById("Em").value;
    var myConfirmEmail = document.getElementById("CEm").value;

    // Empty the input boxes
    document.getElementById("Un").value = "";
    document.getElementById("Pw").value = "";

    // Remove the placeholders
    document.getElementById("Un").setAttribute("placeholder", " ");
    document.getElementById("Pw").setAttribute("placeholder", " ");

    // Modify/Hide Email and Confirm Email boxes    
    document.getElementById("eMailDiv").setAttribute("hidden", "hidden");    
    document.getElementById("confirmEmailDiv").setAttribute("hidden", "hidden");   
}

function ValidateLogin(user) {

    var loginUsername = document.getElementById("Un");
    var loginPassword = document.getElementById("Pw");
    if (loginUsername.value != user.userName) {

        alert("Username or Password is incorrect.");
    }
    else if (loginPassword.value != user.passWord) {
        alert("Username or Password is incorrect.");
    }
    else {
        DisplayAccountInformation(user);
    }
}

function DisplayAccountInformation(user) {
    alert("Welcome to your Tri-C Account Information page!")

    // change the header to Account Information
    document.getElementById("formHeader").innerHTML = "Account Information";

    // modify username and password boxes/label
    document.getElementById("Un").setAttribute("hidden", "hidden");
    document.getElementById("usernameLabel").innerHTML = "Username: " + user.userName + " ";
    document.getElementById("Pw").setAttribute("hidden", "hidden");
    document.getElementById("passwordLabel").innerHTML = "Password: " + user.passWord + " ";


    // make email visible again
    document.getElementById("eMailDiv").removeAttribute("hidden");
    document.getElementById("Em").setAttribute("hidden", "hidden");
    document.getElementById("emailLabel").innerHTML = "Email: " + user.eMail + "\t";

    // change submit button
    var button = document.getElementById("submitButton");
    button.setAttribute("value", "Update");
    button.onclick = function () { EditAccount(user) };
}

function EditAccount(user) {
    // change the header to Update Account Information
    document.getElementById("formHeader").innerHTML = "Update Account Information";

    // hide the Username input box
    document.getElementById("Un").setAttribute("hidden", "hidden");

    // make the password input box visible again
    document.getElementById("Pw").removeAttribute("hidden");
    document.getElementById("passwordLabel").innerHTML = "Password: ";
    var newPassword = document.getElementById("Pw").value;

    // make the email input box visible again
    document.getElementById("Em").removeAttribute("hidden");
    document.getElementById("emailLabel").innerHTML = "Email: ";
    var newEmail = document.getElementById("Em");

    document.getElementById("submitButton").setAttribute("value", "Save");

}