class Basket {

    constructor () {
        this.items = [];
        this.total = 0;
    };

    addItem(item) {
        if (item !== null && item !== undefined) {
            this.items.push(item);
            this.total += item.price * item.quantity;
            return this.items.length;
        }
    }

    removeItem(index) {
        if (index >= 0 && this.items[index] !== undefined) {
            if (this.items[index].quantity > 1) {
                --this.items[index].quantity;
                this.total -= this.items[index].price;
                return false;
            } else {
                this.total -= this.items[index].price;
                this.items.splice(index, 1);
                return true;
            }
        }
    }

    clearBasket() {
        this.items = [];
        this.total = 0;
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
            let index = 1;
            this.items.forEach(item => {
                let image = document.createElement('img');
                image.setAttribute('src', item.url.replace('2.jpg', '1.jpg'));
                image.setAttribute('height', '100');
                image.setAttribute('width', '100');
                image.style.paddingBottom = '0.3125rem';
                image.style.paddingTop = '0.3125rem';

                let newListElement = document.createElement('li');
                newListElement.appendChild(image);
                newListElement.setAttribute('id', index.toString());

                newListElement.appendChild(createInnerUl(item));
                newListElement.appendChild(createRemoveButton(index++));

                document.getElementById('items-list').appendChild(newListElement);
                document.getElementById('myModal').style.display = 'none';

                if (this.total === 0) {
                    this.total = 0;
                }

                this.total += item.quantity * item.price;
            });

            document.getElementById("total").innerText = "Total: " + this.getTotal() + " lv.";
        }
    }

    getTotal() {
        return this.total >= 0 ? this.total.toFixed(2) : "0.00";
    }
}