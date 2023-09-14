import Meal, { DishTypes } from './Meal';
import { Buff } from './Buff';
import MultiCourseMealComponent from '../../MultiCourseMeal';
import { JoinMealsRequiredMaterials } from '../../../menu/data/JoinMealsRequiredMaterials';

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
        super(name, stars, DishTypes.MULTI_COURSE, JoinMealsRequiredMaterials(multipliedMeals), mealEffects, statBoost);
    }
    getComponent = (): (props: {data: Meal}) => JSX.Element => MultiCourseMealComponent;
}