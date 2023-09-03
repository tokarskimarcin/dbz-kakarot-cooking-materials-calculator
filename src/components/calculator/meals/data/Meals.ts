import MATERIALS from "./Materials";
import Meal from "./classes/Meal";
import MultiCourseMeal from "./classes/MultiCourseMeal";

export const MEALS = {
    SMILING_ULTRA_MEGA_ROAST: new Meal('Smiling Ultra Mega Roast', [
        { material: MATERIALS.PRIME_MARBLED_DINO_MEAT, count: 2 },
        { material: MATERIALS.PRIME_GOLDEN_WOLF_MEAT, count: 3 },
        { material: MATERIALS.PREMIUM_GOLD_GAZELLE_MEAT, count: 3 },
        { material: MATERIALS.PREMIUM_GOLDEN_VENSION, count: 3 },
        { material: MATERIALS.PREMIUM_REINDEER_MEAT, count: 3 },
    ]),
    OCEAN_JEWELRY_BOX_BOWL: new Meal('Ocean Jewelry Box Bowl', [
        { material: MATERIALS.SHINY_RICE, count: 4 },
        { material: MATERIALS.PREMIUM_GOLDEN_FISH_EGGS, count: 2 },
        { material: MATERIALS.EXTRA_FATTY_GIANT_FISH, count: 1 },
    ]),
    SEA_MONSTER_SOUP: new Meal('Sea Monster Soup', [
        { material: MATERIALS.GOLDEN_ENERGETIC_FISH, count: 2 },
        { material: MATERIALS.EXTRA_FATTY_GIANT_FISH, count: 1 },
        { material: MATERIALS.PREMIUM_WHIRE_SHELLFISH, count: 2 },
    ]),
    DREAMY_FRUIT_GELATIN: new Meal('Dreamy Fruit Gelatin', [
        { material: MATERIALS.PREMIUM_MILK, count: 4 },
        { material: MATERIALS.SUPERB_PEACH, count: 2 },
        { material: MATERIALS.SUPERB_MANGO, count: 2 },
        { material: MATERIALS.SUPERB_APPLE, count: 2 },
    ]),
    LOADED_SESAME_DUMPLING: new Meal('Loaded Sesame Dumpling', [
        { material: MATERIALS.SHINY_RICE, count: 4 },
        { material: MATERIALS.HIGH_QUALITY_BEAN_PASTE, count: 4 },
    ]),
};

export const MULTI_COURSE_MEAL = {
    PREMIUM_SEAFOOD_COURSE: new MultiCourseMeal('Premium Seafood Course', [
        { meal: MEALS.OCEAN_JEWELRY_BOX_BOWL, count: 1 },
        { meal: MEALS.SEA_MONSTER_SOUP, count: 1 },
        { meal: MEALS.SMILING_ULTRA_MEGA_ROAST, count: 1 },
        { meal: MEALS.DREAMY_FRUIT_GELATIN, count: 1 },
        { meal: MEALS.LOADED_SESAME_DUMPLING, count: 1 },
    ]),

};

