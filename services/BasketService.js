function addToBasket() {
    if (localStorage.getItem(LOGGED_USER)) {
        let imgUrl = document.getElementById('modalImg').src;

        let image = document.createElement('img');
        let imageName = imgUrl.slice(47);
        let itemQuantity = document.getElementById("item-quantity").value;

        imageName = imageName.replace('2.jpg', '');

        image.setAttribute('src', imgUrl.replace('2.jpg', '1.jpg'));
        image.setAttribute('height', '100');
        image.setAttribute('width', '100');

        image.style.paddingBottom = '0.3125rem';
        image.style.paddingTop = '0.3125rem';

        let item = {
            name: imageName,
            quantity: itemQuantity,
            price: 13.99,
            url: imgUrl
        };
        let id = Basket.getInstance().addItem(item);

        localStorage.removeItem("items");
        localStorage.setItem("items", JSON.stringify(Basket.getInstance().getItems()));

        let newListElement = document.createElement('li');

        newListElement.appendChild(image);
        newListElement.setAttribute('id', id);

        newListElement.appendChild(createInnerUl(item));
        newListElement.appendChild(createRemoveButton(id));

        document.getElementById('items-list').appendChild(newListElement);

        document.getElementById("total").innerText = "Total: " + Basket.getInstance().getTotal() + " lv.";
        document.getElementById('myModal').style.display = 'none';
    } else {
        closePopup('myModal');
        openPopup('login-form')
    }
}

function removeFromBasket() {
    let id = document.activeElement.getAttribute('id');
    let modifiedId = id / 100;
    const basketInstance = Basket.getInstance();

    if (basketInstance.removeItem(modifiedId - 1)) {
        document.getElementById(modifiedId).remove();
        document.getElementById('total').innerHTML = 'Total: ' + basketInstance.getTotal() + 'lv.'

    } else {
        let liElementById = document.getElementById(modifiedId);
        let quantity = basketInstance.getItems()[modifiedId-1].quantity;

        liElementById.childNodes.item(1).childNodes.item(1).innerHTML = 'Quantity: ' + quantity;
        liElementById.childNodes.item(1).childNodes.item(2).innerHTML = 'Price: ' + basketInstance.getItems()[modifiedId-1].price * quantity;

        document.getElementById('total').innerHTML = 'Total: ' + basketInstance.getTotal() + 'lv.'
    }

    localStorage.removeItem("items");
    localStorage.setItem("items", JSON.stringify(Basket.getInstance().getItems()));
}

function checkout() {
    const basketInstance = Basket.getInstance();
    let total = basketInstance.getTotal();

    basketInstance.clearBasket();
    localStorage.removeItem(BASKET_CONTENT);

    let ul = document.getElementById('items-list');

    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }

    document.getElementById("total").remove();

    let checkoutParagraph = document.createElement('p');
    checkoutParagraph.innerText = "Congratulations! You've just spent " + total + "lv.";
    checkoutParagraph.setAttribute('id', 'checkout-paragraph');

    ul.appendChild(checkoutParagraph);

    return false;
}

function increment() {
    let value = document.getElementById("item-quantity").value;
    if (value >= 1 && value < 10) {
        document.getElementById("item-quantity").value++;
    }
}

function decrement() {
    let value = document.getElementById("item-quantity").value;
    if (value > 1 && value <= 10) {
        document.getElementById("item-quantity").value--;
    }
}

function createInnerUl(item) {
    let innerUl = document.createElement('ul');
    innerUl.id = "inner-product-info";

    let name = document.createElement("li");
    name.innerText = "Name: " + item.name;
    innerUl.appendChild(name);

    let quantity = document.createElement("li");
    quantity.innerText = "Quantity: " + item.quantity;
    innerUl.appendChild(quantity);

    let price = document.createElement("li");
    price.innerText = "Price: " + item.price * item.quantity + "lv.";
    innerUl.appendChild(price);

    return innerUl;
}

function createRemoveButton(id) {
    let button = document.createElement("button");
    button.classList.remove("button");
    button.classList.add("remove-item");

    let buttonId = id*100;

    button.setAttribute('id', buttonId);
    button.type = "button";

    button.onclick = function () {
        removeFromBasket();
    };

    let icon = document.createElement("i");
    icon.classList.add("material-icons");
    icon.innerText = "clear";

    button.appendChild(icon);

    return button;
}