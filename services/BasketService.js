function addToBasket() {
    let imgUrl = document.getElementById('modalImg').src;

    let image = document.createElement('img');
    let imageName = imgUrl.slice(47);
    let itemQuantity = document.getElementById("item-quantity").value;

    imageName = imageName.replace('2.jpg', '');

    image.setAttribute('src', imgUrl.replace('2.jpg', '1.jpg'));
    image.setAttribute('height', '100');
    image.setAttribute('width', '100');

    image.style.paddingBottom = '5px';
    image.style.paddingTop = '5px';

    let item = {
        name: imageName,
        quantity: itemQuantity,
        price: 13.99,
        url: imgUrl
    };
    Basket.getInstance().addItem(item);

    localStorage.removeItem("items");
    localStorage.setItem("items", JSON.stringify(Basket.getInstance().getItems()));

    let newListElement = document.createElement('li');
    newListElement.appendChild(image);

    newListElement.appendChild(createInnerUl(item));
    newListElement.appendChild(createRemoveButton());

    document.getElementById('items-list').appendChild(newListElement);

    document.getElementById("total").innerText = "Total: " + Basket.getInstance().getTotal() + " lv.";
    document.getElementById('myModal').style.display = 'none';
}

function removeFromBasket() {
    alert("To be implemented...");
}

function purchase() {
    //TODO: To be implemented
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

function createRemoveButton() {
    let button = document.createElement("button");
    button.classList.remove("button");
    button.classList.add("remove-item");

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