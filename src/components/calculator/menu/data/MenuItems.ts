import { MEALS, MULTI_COURSE_MEAL } from "../../meals/data/Meals";
import Meal from "../../meals/data/classes/Meal";
import Item from "./classes/Item";

export const menuItems: Array<Item> = [
    ...Object.keys(MEALS).map((mealName: string) => 
        new Item(MEALS[mealName as keyof typeof MEALS])),
    ...Object.keys(MULTI_COURSE_MEAL).map((mealName: string) => 
        new Item(MULTI_COURSE_MEAL[mealName as keyof typeof MULTI_COURSE_MEAL])),
];