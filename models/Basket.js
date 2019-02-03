class Basket {

    constructor () {
        this.items = [];
        this.total = 0;
    };

    addItem(item) {
        if (item !== null && item !== undefined) {
            this.items.push(item);
            this.total += item.price * item.quantity;
        }
    }

    removeItem(item) {
        if (item !== null && item !== undefined) {
            for (let index = 0; index < this.items.length; index++) {
                if(item === this.items[index]) {
                    this.items.splice(index, 1);
                    break;
                }
            }
        }
    }

    clearBasket() {
        this.items = [];
    }

    getItems() {
        return this.items;
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
        this.items = [];
        if (localStorage.getItem("items") && localStorage.getItem("items")[0] !== undefined) {
            this.items = JSON.parse(localStorage.getItem("items"));
        }

        if (localStorage.getItem(LOGGED_USER) && this.items.length > 0) {
            this.items.forEach(item => {
                let image = document.createElement('img');
                image.setAttribute('src', item.url.replace('2.jpg', '1.jpg'));
                image.setAttribute('height', '100');
                image.setAttribute('width', '100');
                image.style.paddingBottom = '5px';
                image.style.paddingTop = '5px';

                let newListElement = document.createElement('li');
                newListElement.appendChild(image);

                newListElement.appendChild(createInnerUl(item));
                newListElement.appendChild(createRemoveButton());

                document.getElementById('items-list').appendChild(newListElement);
                document.getElementById('myModal').style.display = 'none';

                if(this.total === 0) {
                    this.total = 0;
                }

                this.total += item.quantity * item.price;
            });
            document.getElementById("total").innerText = "Total: " + this.total + " lv.";
        }
    }

    getTotal() {
        return this.total;
    }
}