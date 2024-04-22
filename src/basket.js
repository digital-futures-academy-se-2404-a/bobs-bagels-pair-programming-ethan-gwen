import Item from "../src/item.js";
class Basket {
    #items = [];
    #maxSize = 0;

    constructor(maxSize) {
        if (maxSize > 0) {
            this.#maxSize = maxSize;
        } else {
            this.#maxSize = 5;
        }
    }

    addItem = (item) => {
        if (item.getName() === null) {
            return;
        } else if (this.#items.length >= this.#maxSize) {
            return;
        }
        this.#items.push(item);
    }

    removeItem = (item) => {
        let index = this.#items.indexOf(item);
        this.#items.splice(index, 1);
    }

    getItems = () => {
        return this.#items;
    }

    setMaxSize = (newSize) => {
        if (newSize < this.#items.length) {
            console.log("ERROR: You can't make the basket smaller than the amount of items in it!");
            return
        } else if (newSize > 0) {
            this.#maxSize = newSize; 
        }
    }

    getMaxSize = () => {
        return this.#maxSize;
    }
}

export default Basket;