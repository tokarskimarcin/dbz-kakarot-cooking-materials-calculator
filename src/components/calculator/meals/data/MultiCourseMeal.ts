import Meal from './Meal';
import MultiCourseMealComponent from '../MultiCourseMeal';

export default class MultiCourseMeal extends Meal {
    protected type: string = 'Multi-Course Meal';

    getComponent = (): (props: {data: Meal}) => JSX.Element => MultiCourseMealComponent;
}