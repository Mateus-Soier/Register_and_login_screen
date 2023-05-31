// Function Validation Name to Register
function validationnameFunction() {

    document.getElementById("message4").style.display = "block";
    document.getElementById("register").style.opacity = 00;

    var name = document.getElementById("name");

    name.onkeyup = function () {

        if (name.value.length >= 10) {

            document.getElementById("message4").style.display = "none";
            document.getElementById("register").style.opacity = 100;

        } else {

            document.getElementById("message4").style.display = "block";
            document.getElementById("register").style.opacity = 00;

        }
    }

}


// Function Validation Email to Register
function validationemailFunction() {

    document.getElementById("message3").style.display = "block";
    document.getElementById("register").style.opacity = 00;

    var email = document.getElementById("email");

    email.onkeyup = function () {

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {

            document.getElementById("message3").style.display = "none";
            document.getElementById("register").style.opacity = 100;

        } else {

            document.getElementById("message3").style.display = "block";
            document.getElementById("register").style.opacity = 00;

        }
    }
}


// Functions to replace image password and can see and block see password
function revealpassword_ONE_Function() {

    var x = document.getElementById("password_1");
    if (x.type === "password") {
        x.type = "text";
        document.getElementById("img1").src = "imagens/invisible.png";
    } else {
        x.type = "password";
        document.getElementById("img1").src = "imagens/visible.png";
    }
}


function revealpassword_TWO_Function() {

    var x = document.getElementById("password_2");
    if (x.type === "password") {
        x.type = "text";
        document.getElementById("img2").src = "imagens/invisible.png";
    } else {
        x.type = "password";
        document.getElementById("img2").src = "imagens/visible.png";
    }
}


function revealpassword_THREE_Function() {

    var x = document.getElementById("password_3");
    if (x.type === "password") {
        x.type = "text";
        document.getElementById("img3").src = "imagens/invisible.png";
    } else {
        x.type = "password";
        document.getElementById("img3").src = "imagens/visible.png";
    }
}


// Function Validation Password to Register
function passwordvalidationFunction() {

    document.getElementById("message").style.display = "block";
    document.getElementById("register").style.opacity = 00;

    var password_1 = document.getElementById("password_1");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");


    password_1.onfocus = function () {
        document.getElementById("message").style.display = "block";
        document.getElementById("register").style.opacity = 00;
        document.getElementById("confirm").style.opacity = 00;
    }

    password_1.onblur = function () {
        document.getElementById("message").style.display = "none";
        document.getElementById("register").style.opacity = 100;
        document.getElementById("confirm").style.opacity = 100;
    }

    password_1.onkeyup = function () {
        // Validate lowercase letters
        var lowerCaseLetters = /[a-z]/g;
        if (password_1.value.match(lowerCaseLetters)) {
            letter.classList.remove("invalid");
            letter.classList.add("valid");
        } else {
            letter.classList.remove("valid");
            letter.classList.add("invalid");
        }

        // Validate capital letters
        var upperCaseLetters = /[A-Z]/g;
        if (password_1.value.match(upperCaseLetters)) {
            capital.classList.remove("invalid");
            capital.classList.add("valid");
        } else {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
        }

        // Validate numbers
        var numbers = /[0-9]/g;
        if (password_1.value.match(numbers)) {
            number.classList.remove("invalid");
            number.classList.add("valid");
        } else {
            number.classList.remove("valid");
            number.classList.add("invalid");
        }

        // Validate length
        if (password_1.value.length >= 8) {
            length.classList.remove("invalid");
            length.classList.add("valid");
        } else {
            length.classList.remove("valid");
            length.classList.add("invalid");
        }

        if (letter.classList == "valid" && capital.classList == "valid" && number.classList == "valid" && length.classList == "valid") {
            document.getElementById("message").style.display = "none";
            document.getElementById("confirm").style.display = "block";
            document.getElementById("confirm").style.opacity = 100;
        } else {
            document.getElementById("message").style.display = "block";
            document.getElementById("confirm").style.display = "none";
        }
    }
}

// Function Validation Confirm Password identical Real Password
function passwordconfirmFunction() {

    var pw1 = document.getElementById("password_1");
    var pw2 = document.getElementById("password_2");

    pw2.onkeyup = function () {
        if (pw1.value != pw2.value) {
            document.getElementById("message2").style.opacity = 100;
        } else {
            document.getElementById("message2").style.opacity = 00;
        }
    }
}

// Function Register 
function registerFunction() {

    var confirmname = document.getElementById("name");
    var confirmemail = document.getElementById("email");
    var confirmpassword1 = document.getElementById("password_1");
    var confirmpassword2 = document.getElementById("password_2");

    if (confirmname.value == "") {
        document.getElementById("message4").style.display = "block";
        confirmname.focus
    } else {

        var registername = confirmname.value

        if (confirmemail.value == "") {
            document.getElementById("message3").style.display = "block";
            confirmemail.focus
        } else {

            var registeremail = confirmemail.value

            if (confirmpassword1.value == "") {
                document.getElementById("message").style.display = "block";
                document.getElementById("register").style.opacity = 00;
                confirmpassword1.focus
            } else {

                var registerpassword = confirmpassword1.value

                if (confirmpassword2.value == "") {
                    document.getElementById("message2").style.display = "block";
                    confirmpassword2.focus
                } else {

                    alert("Cadastro realizado com sucesso!\r\nUsuario: " + registername + "\r\nEmail: " + registeremail + "\r\nSenha: " + registerpassword + "\r\nObrigado!")

                    confirmname.value = ""
                    confirmemail.value = ""
                    confirmpassword1.value = ""
                    confirmpassword2.value = ""
                }
            }
        }
    }

}

// Function to alter screen register to login
function alterscreenFunction() {

    var y = document.getElementById("box1");
    var z = document.getElementById("box2");
    if (y.style.display = "block") {
        y.style.display = "none";
        z.style.display = "block";
    } else {
        y.style.display = "block";
        z.style.display = "none"
    }

}

// Function to alter screen login to register
function alterscreen2Function() {

    var y = document.getElementById("box2");
    var z = document.getElementById("box1");
    if (y.style.display = "block") {
        y.style.display = "none";
        z.style.display = "block";
    } else {
        y.style.display = "block";
        z.style.display = "none"
    }

}



// Function Validation Email to LOGIN
function validationemail2Function() {

    document.getElementById("message5").style.display = "block";
    document.getElementById("login").style.opacity = 00;

    var email = document.getElementById("emailLogin");

    email.onkeyup = function () {

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {

            document.getElementById("message5").style.display = "none";
            document.getElementById("login").style.opacity = 100;

        } else {

            document.getElementById("message5").style.display = "block";
            document.getElementById("login").style.opacity = 00;

        }
    }
}

// Function to hidde message6
function leavepassword() {
    document.getElementById("message6").style.display = "none";
}

// Function Login
function loginFunction() {

    var email = document.getElementById("emailLogin")
    var password = document.getElementById("password_3")

    if (email.value == "") {
        document.getElementById("message5").style.display = "block";
        email.focus
    } else if (password.value == "") {
        document.getElementById("message6").style.display = "block";
        password.focus
    } else {
        alert("We don't have database :)")
    }
}