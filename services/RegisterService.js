"use strict";

function register(db) {
    let email = document.getElementById("email-register").value;
    let password = document.getElementById("password-register").value;
    let rePassword = document.getElementById("repassword-register").value;

    if(!_validateEmail(email)) {
        alert("Invalid mail pattern.");
        return false;
    }

    if(password !== rePassword) {
        alert("Password mismatch");
        return false;
    }

    const user = {
        email: email,
        isAdmin: false,
        password: password
    };
    _repo.registerUser(user);

    _persistUser(user, db)
}

function _validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function comparePasswords() {
    let password1 = document.getElementById("password-register");
    let password2 = document.getElementById("repassword-register");

    if (password1.value !== password2.value) {
        password2.pseudoClass = "input:invalid";
    } else {
        password2.pseudoClass = "input:valid";
    }
}

function _persistUser(user, db) {
    const usersRef = _repo.fetchUsers(db);

    usersRef.on("value", function(snapshot) {
        let sourceRepo = snapshot.val();

        _repo.initLocalRepo(sourceRepo);

    }, function (error) {
        console.log("Error: " + error.code);
    });

    usersRef.child("user" + (_repo.getUsers.length + 1)).update(user);
}