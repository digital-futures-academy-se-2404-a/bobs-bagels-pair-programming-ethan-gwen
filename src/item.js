class Item {

    #name;

    constructor(item) {
        this.#name = item;
    }

    getName() {
        return this.#name;
    }
}

export default Item;