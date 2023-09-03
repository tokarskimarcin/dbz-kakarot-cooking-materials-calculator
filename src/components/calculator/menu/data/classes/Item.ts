import Meal from "../../../meals/data/classes/Meal";

export default class Item {
    constructor(public meal: Meal, public checked: boolean = false) {}
}