import Meal from "../../../meals/data/classes/Meal";
import Item from "./Item";

export default class ItemIndexed extends Item {
    constructor(
        public index: number,
        protected item: Item
    ) {
        super(item.meal, item.checked);
    }
}