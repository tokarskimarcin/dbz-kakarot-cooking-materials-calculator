import { BuffType } from './BuffType';



export type BuffUnit = '%' | '';

export const DEFAULT_BUFF_UNIT: BuffUnit = '';
export type BuffSign = '+' | '-';

export const DEFAULT_BUFF_SIGN: BuffSign = '+';

export type BuffProps = {
    value: number,
    unit?: BuffUnit, 
    sign?: BuffSign,
};
export class Buff {
    constructor(
        protected value: number,
        protected type: BuffType,
        protected u: BuffUnit = DEFAULT_BUFF_UNIT,
        protected s: BuffSign = DEFAULT_BUFF_SIGN
    ) { }

    getValue = (): number => Number(`${this.s}${this.value}`);

    getSign = (): string => this.s;

    getType = (): BuffType => this.type;

    getUnit = (): BuffUnit => this.u;

    getLabel(): string {
        const numberFormatter = Intl.NumberFormat('en', {notation: 'compact', signDisplay: 'always'});

        return `${numberFormatter.format(this.getValue())}${this.u} ${this.type}`;
    }

    sign(s: BuffSign): this {
        this.s = s;
        return this;
    }
    unit(u: BuffUnit): this {
        this.u = u;
        return this;
    }

    pctg = (): this => this.unit('%');
    sub = (): this => this.sign('-');
    add = (): this => this.sign('+');

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
