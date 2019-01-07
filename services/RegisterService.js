function register() {
    // var path = "../resources/users.json";
    // var userArray = JSON.parse(path);
    // console.log(userArray);
    let email = document.getElementById("email-register").value;
    let password = document.getElementById("password-register").value;
    let rePassword = document.getElementById("repassword-register").value;

    if(!_validateEmail(email)) {
        alert("Invalid mail pattern.");
    }

    if(password !== rePassword) {
        alert("Password mismatch");
    }

    var user = {
        email: email,
        password: password
    };
    alert(user.stringify());

    if(_validateEmail(email) && password === rePassword) {
        _persist(user);
    }
}

function _validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function _persist(user) {
    alert(user.stringify());
}