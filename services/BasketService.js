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

    localStorage.setItem("items", JSON.stringify(Basket.items));

    let newListElement = document.createElement('li').appendChild(image);
    document.getElementById('items-list').appendChild(newListElement);
    document.getElementById('myModal').style.display = 'none';
}

function removeFromBasket() {

}

function purchase() {

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
