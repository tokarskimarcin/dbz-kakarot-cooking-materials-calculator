import MealComponent from '../../Meal';
import Material from './Material';

export type RequiredMaterial = {
    count: number,
    material: Material,
};

export default class Meal {
    protected type: string = 'Meal';

    constructor(
        public name: string,
        protected materials: Array<RequiredMaterial>,
        ) {}

    getRequiredMaterials = (): Array<RequiredMaterial> => this.materials;

    getType = (): string => this.type;

    getComponent = (): (props: {data: Meal}) => JSX.Element => MealComponent;
} 