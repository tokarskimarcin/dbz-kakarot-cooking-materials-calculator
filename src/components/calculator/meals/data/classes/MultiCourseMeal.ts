import Meal from './Meal';
import MultiCourseMealComponent from '../../MultiCourseMeal';

export default class MultiCourseMeal extends Meal {
    protected type: string = 'Multi-Course Meal';

    constructor(
        public name: string,
        protected meals: Array<Meal>, 
    ) {
        super(name, []);
    }
    getComponent = (): (props: {data: Meal}) => JSX.Element => MultiCourseMealComponent;
}