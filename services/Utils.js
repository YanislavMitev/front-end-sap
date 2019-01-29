"use strict";

function openPopup(id) {
    document.getElementById(id).style.display = "block";
}

function closePopup(id) {
    document.getElementById(id).style.display = "none";
}

function openPopupProduct(imageId) {
    let modal = document.getElementById('myModal');

    let img = document.getElementById(imageId);
    let modalImg = document.getElementById('modalImg');
    let captionText = document.getElementById('captionText');

    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
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