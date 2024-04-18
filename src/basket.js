
const basket = {
    addItem(item) {
        if (item === null) {
            return;
        }
        this.items.push(item);
    },
    removeItem(item) {
        let index = this.items.indexOf(item);
        this.items.splice(index, 1);

    },
    items: [],
}

export default basket;