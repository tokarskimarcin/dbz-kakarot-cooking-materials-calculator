import Meal, { RequiredMaterial } from "../../meals/data/classes/Meal";
import { Buff } from '../../meals/data/classes/Buff';

export function JoinMealsStatsBoost(meals: Array<Meal>) : Array<Buff> {
    return meals.map(meal => meal.getStatBoost())
    .reduce((prevStatBoosts, nextStatBoosts) => [...prevStatBoosts, ...nextStatBoosts], [])
    .reduce((allStatBoosts: Array<Buff>, nextStatBoost) => {
        const foundDupIndex = allStatBoosts.findIndex(existingStatBoost => 
            existingStatBoost.getType() === nextStatBoost.getType() && 
            existingStatBoost.getUnit() === nextStatBoost.getUnit()
        );
        if (foundDupIndex >= 0 ) {
            const dup = allStatBoosts[foundDupIndex];
            const value = dup.getUnit() === '%' ? 
                (dup.getValue() > nextStatBoost.getValue() ? dup.getValue() : nextStatBoost.getValue()) : 
                (dup.getValue() + nextStatBoost.getValue());
            allStatBoosts[foundDupIndex] = new Buff(Math.abs(value), dup.getType(), dup.getUnit()).sign(value >= 0 ? '+' : '-' );
        } else {
            allStatBoosts.push(nextStatBoost);
        }
        return allStatBoosts;
    }, [])
}