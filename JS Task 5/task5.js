let FName = document.getElementById('FName');
let ErrorFName = document.getElementById('Error-FName');

function ValidFName() {
    if (!FName.value.match(/^[a-zA-Z]+$/)) {
        ErrorFName.innerHTML = 'Please enter a valid Name';
    }
    else {
        ErrorFName.innerHTML = '';
    }
}

let LName = document.getElementById('LName');
let ErrorLName = document.getElementById('Error-LName');

function ValidLName() {
    if (!LName.value.match(/^[a-zA-Z]+$/)) {
        ErrorLName.innerHTML = 'Please enter a valid Name';
    }
    else {
        ErrorLName.innerHTML = '';
    }
}


let Bday = document.getElementById('Bdate');
let Error_Bdate = document.getElementById('Error-Bdate');

function ValidBdate() {
    if (!Bday.value.match(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/
    )) {
        Error_Bdate.innerHTML = 'Please enter a valid birth date';
    }
    else {
        Error_Bdate.innerHTML = '';
    }
}


let email = document.getElementById('email');
let Erroremail = document.getElementById('Error-email');

function Validemail() {
    if (!email.value.match(/^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/
    )) {
        Erroremail.innerHTML = 'Please enter a valid email';
    }
    else {
        Erroremail.innerHTML = '';
    }
}
let C_email = document.getElementById('Confirm');
let Error_Confirm_email = document.getElementById('Error-Confirm_email');

function ValidConfirmEmail() {
    if (C_email.value !== email.value) {
        Error_Confirm_email.innerHTML = 'Please enter a match email';
    }
    else {
        Error_Confirm_email.innerHTML = '';
    }
}


let Password = document.getElementById('Password');
let Error_Password = document.getElementById('Error-Password');

//////////////// At least 8 characters, one uppercase, one lowercase, one digit, and one special character
function ValidPassword() {
    if (!Password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/)) {
        Error_Password.innerHTML = 'Please enter a valid password';
    } else {
        Error_Password.innerHTML = '';
    }
}

let C_Password = document.getElementById('C_Password');
let Error_C_Password = document.getElementById('Error-C_Password');

function ValidConfirmPassword() {

    if (C_Password.value !== Password.value) {
        Error_C_Password.innerHTML = 'Please enter a match Password';
    }
    else {
        Error_C_Password.innerHTML = '';
    }
}
