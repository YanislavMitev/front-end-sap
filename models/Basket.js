class Basket {

    constructor () {
        Basket.items = [];
        this.total = 0;
    };

    addItem(item) {
        if (item !== null && item !== undefined) {
            Basket.items.push(item);
        }
    }

    removeItem(item) {
        if (item !== null && item !== undefined) {
            for (let index = 0; index < Basket.items.length; index++) {
                if(item === Basket.items[index]) {
                    Basket.items.splice(index, 1);
                    break;
                }
            }
        }
    }

    clearBasket() {
        this.basket = [];
    }

    getBasket() {
        return this.basket;
    }

    static getInstance() {
        if (!Basket._instance) {
            Basket.instantiate();
        }
        return Basket._instance;
    }

    static instantiate() {
        Basket._instance = new Basket();
    }

    initBasket() {
        if (localStorage.getItem("items")) {
            Basket.items = JSON.parse(localStorage.getItem("items"));
        }

        if (localStorage.getItem(LOGGED_USER)) {
            let image = document.createElement('img');
            console.log(Basket.items.length);
            Basket.items.forEach(item => {
                image.setAttribute('src', item.url.replace('2.jpg', '1.jpg'));
                image.setAttribute('height', '100');
                image.setAttribute('width', '100');
                let newListElement = document.createElement('li').appendChild(image);
                document.getElementById('items-list').appendChild(newListElement);
                document.getElementById('myModal').style.display = 'none';
            });
        }
    }

}