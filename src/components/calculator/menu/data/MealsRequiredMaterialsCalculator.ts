import Meal, { RequiredMaterial } from "../../meals/data/classes/Meal";

export default function MealsRequiredMaterialsCalculator(meals: Array<Meal>, portionsCount: number): Array<RequiredMaterial> {
    return JoinMealsRequiredMaterials(meals)
    // calculate required materials count
    .map(reqMaterial => ({
        material: reqMaterial.material, 
        count: reqMaterial.count * portionsCount
    }));
}

export function JoinMealsRequiredMaterials(meals: Array<Meal>) : Array<RequiredMaterial> {
    return meals.map(meal => meal.getRequiredMaterials())
    .reduce((prevReqMat, nextReqMat) => [...prevReqMat, ...nextReqMat], [])
    .reduce((allReqMaterials: Array<RequiredMaterial>, nextReqMat) => {
        const foundDup = allReqMaterials.find(existingReqMat => existingReqMat.material === nextReqMat.material);
        if (foundDup) {
            foundDup.count += nextReqMat.count;
        } else {
            allReqMaterials.push({material: nextReqMat.material, count: nextReqMat.count});
        }
        return allReqMaterials;
    }, [])
}