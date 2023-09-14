import MealComponent from '../../Meal';
import { Buff } from './Buff';
import Material from './Material';

export type RequiredMaterial = {
    count: number,
    material: Material,
};


export enum DishTypes {
    MEAT = 'Meat Dish',
    SEAFOOD = 'Seafood Dish',
    RICE = 'Rice Dish',
    NOODLE = 'Noodle Dish',
    DESSERT = 'Dessert',
    MULTI_COURSE = 'Multi-Course',
}

export default class Meal {
    protected type: string = 'Meal';

    constructor(
        public name: string,
        protected stars: number,
        protected dishType: DishTypes,
        protected materials: Array<RequiredMaterial>,
        protected mealEffects: Array<Buff>,
        protected statBoost: Array<Buff>,
        ) {}

    getRequiredMaterials = (): Array<RequiredMaterial> => this.materials;

    getDishType = (): DishTypes => this.dishType;
    getStarsCount = (): number => this.stars;
    getType = (): string => this.type;
    getMealEffect = (): Array<Buff> => this.mealEffects;
    getStatBoost = (): Array<Buff> => this.statBoost;

    getComponent = (): (props: {data: Meal}) => JSX.Element => MealComponent;
} 