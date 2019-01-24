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