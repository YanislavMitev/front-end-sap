class Basket {
    constructor () {
        this.items = [];
    };

    addItem(item) {
        if (item !== null || item !== undefined) {
            if (this.items[item.name] !== undefined) {
                this.items[item.name].quantity++;
            } else {
                this.items[item.name] = 1;
            }
        }
    }

    removeItem(item) {
        if (item !== null || item !== undefined) {
            this.items[item.name] = undefined;
        }
    }

    clearBasket() {
        this.basket = [];
    }

    getBasket() {
        return this.basket;
    }
}