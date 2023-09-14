import Meal, { Buff, RequiredMaterial } from "../../meals/data/classes/Meal";
import { JoinMealsStatsBoost } from "./JoinMealsStatsBoost";

export default function MealsStatBoostCalculator(meals: Array<Meal>, portionsCount: number): Array<Buff> {
    return JoinMealsStatsBoost(meals)
    // calculate stat boost values
    .map(statBoost => statBoost.getUnit() === '%' ? 
    statBoost : 
    new Buff(Math.abs(
        statBoost.getValue()) * portionsCount, 
        statBoost.getType(), 
        statBoost.getUnit()).sign(statBoost.getValue() >= 0 ? '+' : '-')
    );
}