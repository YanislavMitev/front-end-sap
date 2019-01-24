"use strict";

let _repo = new UserRepository();

function authenticate(db) {

    let email = document.getElementById("email-login").value;

    let password = document.getElementById("password-login").value;

    let user = {
        email: email,
        isAdmin: false,
        password: password
    };

    const ref = _repo.fetchUsers(db);

    //fetching data from firebase
    ref.on("value", function(snapshot) {
        let sourceRepo = snapshot.val();

        _repo.initLocalRepo(sourceRepo);

        if (_validate(user, _repo.getUsers)) {
            document.getElementById("login-form").style.display = "none";
            document.getElementById("after-login-info").classList.remove("login");
            document.getElementById("after-login-info").classList.add("login-successful", "fadeOut");
            document.getElementById("after-login-info").innerHTML = '<p>Login successful</p>'
        } else {
            document.getElementById("login-form").style.display = "none";
            document.getElementById("after-login-info").classList.remove("login");
            document.getElementById("after-login-info").classList.add("unsuccessful-login", "fadeOut");
            document.getElementById("after-login-info").innerHTML = '<p>Login unsuccessful</p>'
        }
    }, function (error) {
        console.log("Error: " + error.code);
    });

    return false;
}

function _validate(user, localRepo) {
    let validLogin = false;

    if(!user) {
        throw new Error("Untruthy user!!!")
    }

    if(!localRepo) {
        throw new Error("Untruthy repo!!!")
    }

    for(let child in localRepo) {
        if(_compare(localRepo[child], user)) {
            validLogin = true;
        }
    }
    return validLogin;
}

function _compare(loginUser, userFromRepo) {
    let comparisonValue = false;

    if (loginUser.email === userFromRepo.email) {
        if (loginUser.password === userFromRepo.password) {
            loginUser.isAdmin = userFromRepo.isAdmin;
            comparisonValue = true;
        }
    }
    return comparisonValue;
}