"use strict";

const LOGGED_USER = 'loggedUser';
const BASKET_CONTENT = 'items';

function authenticate() {
    const repo = UserRepository.getInstance();

    let email = document.getElementById("email-login").value;
    let password = document.getElementById("password-login").value;


    let user = {
        email: email,
        isAdmin: false,
        password: password
    };

    if (!localStorage.getItem(LOGGED_USER)) {
        if(!repo.getUsers()) {
            repo.initLocalRepo();
        }
        _logOn(user, repo.getUsers());
    }

    return false;
}

function _logOn(user, users) {
    if (validate(user, users)) {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("register").style.display = "none";
        document.getElementById("basket").style.display = "block";

        document.getElementById("after-login-info").classList.remove("login");
        document.getElementById("after-login-info").classList.add("login-successful", "fadeOut");

        document.getElementById("after-login-info").innerHTML = '<p>Login successful</p>';
        document.getElementById("login").innerText = "Logout";

        localStorage.setItem(LOGGED_USER, 'true');
    } else {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("after-login-info").classList.remove("login");
        document.getElementById("after-login-info").classList.add("unsuccessful-login", "fadeOut");
        document.getElementById("after-login-info").innerHTML = '<p>Login unsuccessful</p>'
    }
}

function logOut() {
    localStorage.removeItem(LOGGED_USER);
    localStorage.removeItem(BASKET_CONTENT);

    document.getElementById("register").style.display = "block";
    document.getElementById("basket").style.display = "none";
    document.getElementById("login").innerText = "Login";

    Basket.getInstance().clearBasket();

    location.reload();
}