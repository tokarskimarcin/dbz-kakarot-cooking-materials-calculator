
export default class Meal {
    protected type: string = 'Meal';
    constructor(public name: string) {}

    getType = (): string => this.type;
} 