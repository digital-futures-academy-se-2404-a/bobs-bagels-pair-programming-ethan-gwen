
const basket = {
    addItem(item) {
        if (item === null) {
            return;
        }
        this.items.push(item);
    },
    items: [],
}

export default basket;