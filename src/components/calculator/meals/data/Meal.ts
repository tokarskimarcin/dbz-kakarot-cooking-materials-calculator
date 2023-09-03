import MealComponent from '../Meal';

export default class Meal {
    protected type: string = 'Meal';
    constructor(public name: string) {}

    getType = (): string => this.type;

    getComponent = (): (props: {data: Meal}) => JSX.Element => MealComponent;
} 