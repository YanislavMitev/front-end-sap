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
        document.getElementById("popuptext").innerHTML= products[this.id].text;
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

var products = {
    "ApplePie":{text: 'ApplePie ApplePie ApplePie ApplePie ApplePie ApplePie ApplePie ApplePie ApplePie ApplePie ApplePie ApplePie ApplePie ApplePie ApplePie ApplePie ApplePie ApplePie ApplePie ApplePie ApplePie ApplePie ApplePie ApplePie ApplePie ApplePie ApplePie ApplePie ApplePie ApplePie ApplePie ApplePie ApplePie ApplePie ApplePie ApplePie ApplePie '},
    "Blueberry":{text: 'Blueberry Blueberry Blueberry Blueberry Blueberry Blueberry Blueberry Blueberry Blueberry Blueberry Blueberry Blueberry Blueberry Blueberry Blueberry Blueberry Blueberry Blueberry Blueberry Blueberry Blueberry Blueberry Blueberry Blueberry Blueberry Blueberry Blueberry Blueberry Blueberry Blueberry Blueberry Blueberry Blueberry '},
    "Bourbon":{text: 'Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon Bourbon '},
    "Bubblegum":{text: 'Bubblegum Bubblegum Bubblegum Bubblegum Bubblegum Bubblegum Bubblegum Bubblegum Bubblegum Bubblegum Bubblegum Bubblegum Bubblegum Bubblegum Bubblegum Bubblegum Bubblegum Bubblegum Bubblegum Bubblegum Bubblegum Bubblegum Bubblegum Bubblegum Bubblegum Bubblegum Bubblegum Bubblegum Bubblegum Bubblegum Bubblegum Bubblegum Bubblegum Bubblegum'},
    "CatalanCream":{text: 'CatalanCream CatalanCream CatalanCream CatalanCream CatalanCream CatalanCream CatalanCream CatalanCream CatalanCream CatalanCream CatalanCream CatalanCream CatalanCream CatalanCream CatalanCream CatalanCream CatalanCream CatalanCream CatalanCream CatalanCream CatalanCream CatalanCream CatalanCream CatalanCream CatalanCream CatalanCream CatalanCream '},
    "Cherry":{text: 'Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry Cherry '},
    "Coffee":{text: 'Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee '},
    "Grape":{text: 'Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape Grape '},
    "GreenApple":{text: 'GreenApple GreenApple GreenApple GreenApple GreenApple GreenApple GreenApple GreenApple GreenApple GreenApple GreenApple GreenApple GreenApple GreenApple GreenApple GreenApple GreenApple GreenApple GreenApple GreenApple GreenApple GreenApple GreenApple GreenApple GreenApple GreenApple GreenApple GreenApple GreenApple GreenApple GreenApple GreenApple '},
    "IrishCream":{text: 'IrishCream IrishCream IrishCream IrishCream IrishCream IrishCream IrishCream IrishCream IrishCream IrishCream IrishCream IrishCream IrishCream IrishCream IrishCream IrishCream IrishCream IrishCream IrishCream IrishCream IrishCream IrishCream IrishCream IrishCream IrishCream IrishCream IrishCream IrishCream IrishCream IrishCream IrishCream IrishCream '},
    "Kiwi":{text: 'Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi Kiwi '},
    "Lemon":{text: 'Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon Lemon '},
    "Mango":{text: 'Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango Mango '},
    "Peppermint":{text: 'Peppermint Peppermint Peppermint Peppermint Peppermint Peppermint Peppermint Peppermint Peppermint Peppermint Peppermint Peppermint Peppermint Peppermint Peppermint Peppermint Peppermint Peppermint Peppermint Peppermint Peppermint Peppermint Peppermint Peppermint Peppermint Peppermint Peppermint Peppermint Peppermint Peppermint Peppermint Peppermint '},
    "Raspberry":{text: 'Raspberry Raspberry Raspberry Raspberry Raspberry Raspberry Raspberry Raspberry Raspberry Raspberry Raspberry Raspberry Raspberry Raspberry Raspberry Raspberry Raspberry Raspberry Raspberry Raspberry Raspberry Raspberry Raspberry Raspberry Raspberry Raspberry Raspberry Raspberry Raspberry Raspberry Raspberry Raspberry Raspberry Raspberry Raspberry Raspberry '},
    "Strawberry":{text: 'Strawberry trawberry trawberry trawberry trawberry trawberry trawberry trawberry trawberry trawberry trawberry trawberry trawberry trawberry trawberry trawberry trawberry trawberry trawberry trawberry trawberry trawberry trawberry trawberry trawberry trawberry trawberry trawberry trawberry trawberry trawberry trawberry trawberry trawberry trawberry trawberry '},

};