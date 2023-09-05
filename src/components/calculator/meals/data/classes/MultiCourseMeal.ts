import Meal, { Buff, DishTypes } from './Meal';
import MultiCourseMealComponent from '../../MultiCourseMeal';
import { JoinMealsRequiredMaterials } from '../../../menu/data/MealsRequiredMaterialsCalculator';

export type RequiredMeal = {
    count: number,
    meal: Meal,
};

export default class MultiCourseMeal extends Meal {
    protected type: string = 'Multi-Course Meal';

    constructor(
        public name: string,
        protected stars: number,
        protected reqMeals: Array<RequiredMeal>, 
        protected mealEffects: Array<Buff>,
        protected statBoost: Array<Buff>,
    ) {        
        const multipliedMeals = reqMeals.map(reqMeal => Array(reqMeal.count).fill(reqMeal.meal)).reduce((prevMeals, nextMeals) => [...prevMeals, ...nextMeals]);
        super(name, stars, DishTypes.MIXED, JoinMealsRequiredMaterials(multipliedMeals), mealEffects, statBoost);
    }
    getComponent = (): (props: {data: Meal}) => JSX.Element => MultiCourseMealComponent;
}