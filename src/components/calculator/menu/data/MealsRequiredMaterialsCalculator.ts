import Meal, { RequiredMaterial } from "../../meals/data/classes/Meal";
import { JoinMealsRequiredMaterials } from "./JoinMealsRequiredMaterials";

export default function MealsRequiredMaterialsCalculator(meals: Array<Meal>, portionsCount: number): Array<RequiredMaterial> {
    return JoinMealsRequiredMaterials(meals)
    // calculate required materials count
    .map(reqMaterial => ({
        material: reqMaterial.material, 
        count: reqMaterial.count * portionsCount
    }));
}