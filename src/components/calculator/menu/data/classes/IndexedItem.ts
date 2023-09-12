import Item from "./Item";

export default class ItemIndexed extends Item {
    constructor(
        public index: number,
        item: Item
    ) {
        super(item.meal, item.checked);
    }
}