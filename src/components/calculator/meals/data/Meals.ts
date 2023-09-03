import MATERIALS from "./Materials";
import Meal from "./classes/Meal";
import MultiCourseMeal from "./classes/MultiCourseMeal";

export const MEALS: Record<string, Meal> = {
    SMILING_ULTRA_MEGA_ROAST: new Meal('Smiling Ultra Mega Roast', [
        { material: MATERIALS.PRIME_MARBLED_DINO_MEAT, count: 2 }
    ]),
    PREMIUM_SEAFOOR_COURSE: new Meal('Premium Seafood Course', [
        { material: MATERIALS.PRIME_MARBLED_DINO_MEAT, count: 1 }
    ]),
};

export const MULTI_COURSE_MEALS: Record<string, MultiCourseMeal> = {

};

