import MATERIALS from "./Materials";
import Meal, {Buff} from "./classes/Meal";
import MultiCourseMeal from "./classes/MultiCourseMeal";

export const MEALS = {
    SMILING_ULTRA_MEGA_ROAST: new Meal('Smiling Ultra Mega Roast', [
        { material: MATERIALS.PRIME_MARBLED_DINO_MEAT, count: 2 },
        { material: MATERIALS.PRIME_GOLDEN_WOLF_MEAT, count: 3 },
        { material: MATERIALS.PREMIUM_GOLD_GAZELLE_MEAT, count: 3 },
        { material: MATERIALS.PREMIUM_GOLDEN_VENSION, count: 3 },
        { material: MATERIALS.PREMIUM_REINDEER_MEAT, count: 3 },
    ], [Buff.meleeAtk(22).unit('%')], [Buff.hp(1000), Buff.meleeAtk(25), Buff.meleeDef(10)]),
    OCEAN_JEWELRY_BOX_BOWL: new Meal('Ocean Jewelry Box Bowl', [
        { material: MATERIALS.SHINY_RICE, count: 4 },
        { material: MATERIALS.PREMIUM_GOLDEN_FISH_EGGS, count: 2 },
        { material: MATERIALS.EXTRA_FATTY_GIANT_FISH, count: 1 },
    ], [Buff.hp(20).unit('%')], [Buff.hp(800), Buff.kiDef(10)]),
    SEA_MONSTER_SOUP: new Meal('Sea Monster Soup', [
        { material: MATERIALS.GOLDEN_ENERGETIC_FISH, count: 2 },
        { material: MATERIALS.EXTRA_FATTY_GIANT_FISH, count: 1 },
        { material: MATERIALS.PREMIUM_WHITE_SHELLFISH, count: 2 },
    ], [Buff.kiDef(20).unit('%')], [Buff.hp(800),Buff.kiDef(10)]),
    DREAMY_FRUIT_GELATIN: new Meal('Dreamy Fruit Gelatin', [
        { material: MATERIALS.PREMIUM_MILK, count: 4 },
        { material: MATERIALS.SUPERB_PEACH, count: 2 },
        { material: MATERIALS.SUPERB_MANGO, count: 2 },
        { material: MATERIALS.SUPERB_APPLE, count: 2 },
    ], [Buff.zOrb(30).unit('%')], [Buff.hp(1000), Buff.meleeDef(5), Buff.kiDef(5)]),
    LOADED_SESAME_DUMPLING: new Meal('Loaded Sesame Dumpling', [
        { material: MATERIALS.SHINY_RICE, count: 4 },
        { material: MATERIALS.HIGH_QUALITY_BEAN_PASTE, count: 4 },
    ], [Buff.critRate(5).unit('%')], [Buff.hp(500), Buff.meleeDef(1), Buff.kiDef(1)]),
    HEAP_OF_MEAT_RAMEN_Z: new Meal('Heap of Meat Ramen Z', [
        { material: MATERIALS.GOLDEN_WHEAT, count: 4 },
        { material: MATERIALS.PRIME_MARBLED_DINO_MEAT, count: 2 },
        { material: MATERIALS.PREMIUM_GOLDEN_FISH_EGGS, count: 2 },
    ], [], []),
    EXTRA_SOFT_CRUMBLY_FRIED_RICE: new Meal('Extra Soft Crumbly Fried Rice', [
        { material: MATERIALS.SHINY_RICE, count: 4 },
        { material: MATERIALS.PREMIUM_EGG, count: 4 },
        { material: MATERIALS.HIGH_QUALITY_CARROT, count: 4 },
    ], [], []),
    BOILED_TREASUER_OF_THE_SEA: new Meal('Boiled Treasure of the Sea', [
        { material: MATERIALS.EXTRA_FATTY_GIANT_FISH, count: 1 },
        { material: MATERIALS.GOLDEN_ENERGETIC_FISH, count: 2 },
        { material: MATERIALS.AROMATIC_HERB, count: 2 },
        { material: MATERIALS.FATTY_GIANT_FISH, count: 1 },
    ], [], []),
    SUPER_ULTRA_DUMPLING: new Meal('Super Ultra Dumpling', [
        { material: MATERIALS.SHINY_RICE, count: 4 },
        { material: MATERIALS.HIGH_QUALITY_BEAN_PASTE, count: 4 },
    ], [], []),
    RICH_CUPCAKE: new Meal('Rich Cupcake', [
        { material: MATERIALS.PREMIUM_MILK, count: 4 },
        { material: MATERIALS.SUPERB_APPLE, count: 2 },
        { material: MATERIALS.SUPERB_PEACH, count: 2 },
    ], [], []),
    ULTIMATE_MEAT_FEAST: new Meal('Ultimate Meat Feast', [
        { material: MATERIALS.SHINY_RICE, count: 4 },
        { material: MATERIALS.PREMIUM_GOLD_GAZELLE_MEAT, count: 3 },
        { material: MATERIALS.PREMIUM_GOLDEN_VENSION, count: 3 },
        { material: MATERIALS.PREMIUM_REINDEER_MEAT, count: 3 },
        { material: MATERIALS.PREMIUM_EGG, count: 4 },
    ], [], []),
    ROUGH_SEAS_SPARKING_PASTA: new Meal('Rough Seas Sparking Pasta', [
        { material: MATERIALS.GOLDEN_WHEAT, count: 4 },
        { material: MATERIALS.GOLDEN_ENERGETIC_FISH, count: 2 },
        { material: MATERIALS.EXTRA_FATTY_GIANT_FISH, count: 1 },
        { material: MATERIALS.PREMIUM_WHITE_SHELLFISH, count: 2 },
    ], [], []),
    EXTRA_JUICY_STEAMED_BUN: new Meal('Extra Juicy Steamed Bun', [
        { material: MATERIALS.PREMIUM_GOLDEN_VENSION, count: 3},
        { material: MATERIALS.HIGH_QUALITY_ONION, count: 4},
        { material: MATERIALS.HIGH_QUALITY_CARROT, count: 4 },
    ], [], []),
    ARTSY_CUPCAKE: new Meal('Artsy Cupcake', [
        { material: MATERIALS.HIGH_QUALITY_MILK, count: 4},
        { material: MATERIALS.HIGH_QUALITY_EGG, count: 4},
        { material: MATERIALS.RIPE_PEACH, count: 3},
    ], [], []),
    HELLFIRE_TOFU: new Meal('Hellfire Tofu', [
        { material: MATERIALS.PRIME_GOLDEN_WOLF_MEAT, count: 3},
        { material: MATERIALS.SPICY_MUSHROOM, count: 3},
        { material: MATERIALS.HIGH_QUALITY_TOFU, count: 4},
        { material: MATERIALS.HIGH_QUALITY_CARROT, count: 4},
    ], [], []),
    WHIRLPOOL_PASTA: new Meal('Whirlpool Pasta', [
        { material: MATERIALS.GOLDEN_ENERGETIC_FISH, count: 2},
        { material: MATERIALS.ROSE_WHEAT, count: 4},
        { material: MATERIALS.HORNED_TURBAN, count: 3},
    ], [], []),
    EXTRA_MEATY_RICE_BALL: new Meal('Extra Meaty Rice Ball', [
        { material: MATERIALS.PREMIUM_GAZELLE_MEAT, count: 3},
        { material: MATERIALS.PLAIN_WHITE_RICE, count: 4},
        { material: MATERIALS.SELECT_CHICKEN, count: 4},
    ], [], []),
    WILD_STEAK: new Meal('Wild Steak', [
        { material: MATERIALS.HIGH_QUALITY_WOLF_MEAT, count: 3},
        { material: MATERIALS.COCONUT, count: 3},
    ], [], []),
    CRUMBLY_FRIED_RICE: new Meal('Crumbly Fried Rice', [
        { material: MATERIALS.RICE, count: 4},
        { material: MATERIALS.EGG, count: 4},
        { material: MATERIALS.COCONUT, count: 4},
    ], [], []),
    MEATLOVERS_MEAT_FEAST: new Meal('Meatlovers\'s Meat Feast', [
        { material: MATERIALS.PLAIN_WHITE_RICE, count: 4},
        { material: MATERIALS.SELECT_BEAST_MEAT, count: 3},
    ], [], []),
    JUICY_GRILLED_FISH: new Meal('Juicy Grilled Fish', [
        { material: MATERIALS.GREAT_ENERGETIC_FISH, count: 2},
        { material: MATERIALS.HIGH_QUALITY_HERB, count: 3},
    ], [], []),
};

export const MULTI_COURSE_MEAL = {
    SPECIAL_MEAT_COURSE: new MultiCourseMeal('Special Meat Course', [
        { meal: MEALS.MEATLOVERS_MEAT_FEAST, count: 1 },
        { meal: MEALS.JUICY_GRILLED_FISH, count: 1 },
        { meal: MEALS.EXTRA_JUICY_STEAMED_BUN, count: 1 },
    ], 
    [Buff.meleeAtk(25).unit('%'), Buff.kiAtk(25).unit('%'), Buff.critRate(7.5).unit('%')], 
    [Buff.hp(10000), Buff.ki(3), Buff.meleeAtk(75)]),
    SUPER_DELUXE_MEAT_COURSE: new MultiCourseMeal('Super Deluxe Meat Course', [
        { meal: MEALS.SMILING_ULTRA_MEGA_ROAST, count: 1 },
        { meal: MEALS.WILD_STEAK, count: 1 },
        { meal: MEALS.HEAP_OF_MEAT_RAMEN_Z, count: 1 },
        { meal: MEALS.CRUMBLY_FRIED_RICE, count: 1 },
        { meal: MEALS.SUPER_ULTRA_DUMPLING, count: 1 },
    ], 
    [Buff.hp(45).unit('%'), Buff.ki(45).unit('%'), Buff.exp(35).unit('%')], 
    [Buff.hp(20000), Buff.ki(5), Buff.meleeAtk(300)]),
    SUPER_DELUXE_SEAFOOD_COURSE: new MultiCourseMeal('Super Deluxe Seafood Course', [
        { meal: MEALS.BOILED_TREASUER_OF_THE_SEA, count: 1 },
        { meal: MEALS.HELLFIRE_TOFU, count: 1 },
        { meal: MEALS.WHIRLPOOL_PASTA, count: 1 },
        { meal: MEALS.EXTRA_MEATY_RICE_BALL, count: 1 },
        { meal: MEALS.DREAMY_FRUIT_GELATIN, count: 1 },
    ], 
    [Buff.hp(30).unit('%'), Buff.meleeAtk(30).unit('%'), Buff.meleeDef(30).unit('%')], 
    [Buff.hp(20000), Buff.ki(5), Buff.meleeDef(5)]),
    PREMIUM_MEAT_COURSE: new MultiCourseMeal('Premium Meat Course', [
        { meal: MEALS.ULTIMATE_MEAT_FEAST, count: 1 },
        { meal: MEALS.SEA_MONSTER_SOUP, count: 1 },
        { meal: MEALS.ROUGH_SEAS_SPARKING_PASTA, count: 1 },
        { meal: MEALS.EXTRA_JUICY_STEAMED_BUN, count: 1 },
        { meal: MEALS.ARTSY_CUPCAKE, count: 1 },
    ], 
    [Buff.ki(30).unit('%'), Buff.kiAtk(30).unit('%'), Buff.kiDef(30).unit('%')], 
    [Buff.hp(20000), Buff.ki(5), Buff.kiAtk(300)]),
    PREMIUM_SEAFOOD_COURSE: new MultiCourseMeal('Premium Seafood Course', [
        { meal: MEALS.OCEAN_JEWELRY_BOX_BOWL, count: 1 },
        { meal: MEALS.SEA_MONSTER_SOUP, count: 1 },
        { meal: MEALS.SMILING_ULTRA_MEGA_ROAST, count: 1 },
        { meal: MEALS.DREAMY_FRUIT_GELATIN, count: 1 },
        { meal: MEALS.LOADED_SESAME_DUMPLING, count: 1 },
    ], 
    [Buff.meleeAtk(35).unit('%'), Buff.kiAtk(35).unit('%'), Buff.critRate(10).unit('%')], 
    [Buff.hp(20000), Buff.ki(5), Buff.meleeDef(150)]),
    HEAVENLY_RAMEN_COURSE: new MultiCourseMeal('Heavenly Ramen Course', [
        { meal: MEALS.HEAP_OF_MEAT_RAMEN_Z, count: 1 },
        { meal: MEALS.EXTRA_SOFT_CRUMBLY_FRIED_RICE, count: 1 },
        { meal: MEALS.BOILED_TREASUER_OF_THE_SEA, count: 1 },
        { meal: MEALS.SUPER_ULTRA_DUMPLING, count: 1 },
        { meal: MEALS.RICH_CUPCAKE, count: 1 },
    ], 
    [Buff.meleeDef(35).unit('%'), Buff.kiDef(35).unit('%'), Buff.zOrb(35).unit('%')], 
    [Buff.hp(20000), Buff.ki(5), Buff.kiAtk(150)]),
};

