"use strict";

function openPopup(id) {
    if (localStorage.getItem(LOGGED_USER) && id !== 'basket-form') {
        logOut();
        return false;
    }
    document.getElementById(id).style.display = "block";
}

function closePopup(id) {
    document.getElementById(id).style.display = "none";
}

function openPopupProduct(imageId) {
    let modal = document.getElementById('myModal');
    let img = document.getElementById(imageId);
    img.onclick = function(){
        modal.style.display = "block";
        let newstring = this.src;
        newstring= newstring.replace("1","2");
        modalImg.src = newstring;
        console.log(this.alt);
        document.getElementById("popuptext").innerHTML= this.alt;
    };
}

function outsideModalClick(elementId) {
    let elementModal = document.getElementById(elementId);

    window.onclick = function (event) {
        if (event.target === elementModal) {
            elementModal.style.display = "none";
        }
    };
}

function validate(user, users) {
    for (let index = 0; index < users.length; index++) {
        if (user.email === users[index].email && user.password === users[index].password) {
            user.isAdmin = users[index].isAdmin;
            return true;
        }
    }
    return false;
}
