import MealComponent from '../../Meal';
import Material from './Material';

export type RequiredMaterial = {
    count: number,
    material: Material,
};




export enum BuffType {
    MELEE_ATK = 'to Melee ATK',
    HP = 'HP',
    MELEE_DEF = 'to Melee DEF',
    KI = 'Ki',
    KI_ATK = 'to Ki ATK',
    KI_DEF = 'to Ki DEF',
    CRIT_RATE = 'to Critical Hit Rate',
    Z_ORB = 'to Z Orbs earned in battle',
    EXP = 'EXP'
}

export type BuffProps = {
    value: number,
    unit?: '%' | '', 
    sign?: '+' | '-',
};

export class Buff {
    constructor(
        protected value: number,
        protected type: BuffType,
        protected u: '%' | '' = '',
        protected s: '+' | '-' = '+',
    ) {}

    getLabel(): string {
        return `${this.s}${this.value}${this.u} ${this.type}`;
    }

    sign(s: '+' | '-') {
        this.s = s;
        return this;
    }
    unit(u: '%' | '') {
        this.u = u;
        return this;
    }
    
    pctg = () => this.unit('%');
    sub = () => this.sign('-');
    add = () => this.sign('+');

    static meleeAtk(value: number): Buff {
        return new this(value, BuffType.MELEE_ATK);
    }

    static meleeDef(value: number): Buff {
        return new this(value, BuffType.MELEE_DEF);
    }

    static exp(value: number): Buff {
        return new this(value, BuffType.EXP);
    }
    static hp(value: number): Buff {
        return new this(value, BuffType.HP);
    }

    static ki(value: number): Buff {
        return new this(value, BuffType.KI);
    }
    static kiAtk(value: number): Buff {
        return new this(value, BuffType.KI_ATK);
    }

    static kiDef(value: number): Buff {
        return new this(value, BuffType.KI_DEF);
    }
    static critRate(value: number): Buff {
        return new this(value, BuffType.CRIT_RATE);
    }
    static zOrb(value: number): Buff {
        return new this(value, BuffType.Z_ORB);
    }
}

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
    getStarsCount = () => this.stars;
    getType = (): string => this.type;
    getMealEffect = (): Array<Buff> => this.mealEffects;
    getStatBoost = (): Array<Buff> => this.statBoost;

    getComponent = (): (props: {data: Meal}) => JSX.Element => MealComponent;
} 