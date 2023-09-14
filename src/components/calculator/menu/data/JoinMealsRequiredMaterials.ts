import Meal, { RequiredMaterial } from "../../meals/data/classes/Meal";

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