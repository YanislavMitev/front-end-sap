function authenticate() {
    var email = document.getElementById("email-login").value;
    var password = document.getElementById("password-login").value;

    let user = {
        email: email,
        password: password
    };

    alert(user.email + "/n" + user.password);
}