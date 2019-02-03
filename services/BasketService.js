function addToBasket() {
    let newImgUrl = document.getElementById("modalImg");
    newImgUrl.src = newImgUrl.src.replace("2.jpg", "1.jpg");

    newImgUrl.setAttribute("height", "100");
    newImgUrl.setAttribute("width", "100");
    newImgUrl.classList.remove('modal-image');

    let newListElement = document.createElement('li').appendChild(newImgUrl);
    document.getElementById("items-list").appendChild(newListElement);
}

function removeFromBasket() {

}

function purchase() {

}