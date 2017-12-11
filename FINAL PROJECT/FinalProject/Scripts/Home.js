//=================================================================================================
function displayAccountInfo() {
    var myForm = document.getElementsByTagName("form");

    myForm[0].innerHTML = document.forms["createLoginForm"]["Uname"].value;
    myForm[1].innerHTML = document.forms["createLoginForm"]["Pword"].value;
    myForm[2].innerHTML = document.forms["createLoginForm"]["Email"].value;
}

//=================================================================================================
//                        VALIDATION OF CREATE LOGIN SCREEN INPUT BOXES
//=================================================================================================
function validateCreateLoginForm() {
    // validation of username
    var userName = document.forms["createLoginForm"]["Uname"].value;
    if (userName.length < 6) {
        alert("Username must be at least 6 characters long.");
        return false;
    }

    // validation of password
    var passWord = document.forms["createLoginForm"]["Pword"].value;
    if (passWord.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    // validation of email
    var eMail = document.forms["createLoginForm"]["Email"].value;
    if (!eMail.includes("@")) {
        alert("Email is not in correct format. Must be in the format of someone@mail.com");
        return false;
    }

    // validate that confirm email box matches the text entered in the email box
    var confirmEmail = document.forms["createLoginForm"]["confirmEmail"].value;
    if (confirmEmail != eMail) {
        alert("Please verify that the cofirm email input matches the email input.");
        return false;
    }

    // when the user clicks the submit button, display the login page.
    displayLogin();
}
//====================================================================================================
//                                          LOGIN PAGE
//====================================================================================================
function displayLogin() {
    var myHeader = document.getElementsByTagName("h1");
    myHeader[0].innerHTML = "Login";

    var myForm = document.getElementsByTagName("createLoginForm");
    myForm[0].innerHTML = "Username: <input type=\"text\" name=\"Uname\" placeholder=\"must be at least 6 characters long\" autocomplete=\"on\"/><br />";
    myForm[1].innerHTML = "Password: <input type=\"text\" name=\"Pword\" placeholder=\"must be at least 6 characters long\" autocomplete=\"on\" /> <br />";
    myForm[2].innerHTML = "";
    myForm[3].innerHTML = "";
}