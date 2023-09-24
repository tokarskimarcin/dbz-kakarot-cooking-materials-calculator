import MATERIALS from "./Materials";
import Meal, {DishTypes} from "./classes/Meal";
import { Buff } from './classes/Buff';
import MultiCourseMeal from "./classes/MultiCourseMeal";

export const MEALS = {
    WHOLE_ROAST_ON_THE_BONE: new Meal('Whole Roast on the Bone', 1, DishTypes.MEAT, [
        { material: MATERIALS.BEAST_MEAT, count: 4},
        { material: MATERIALS.APPLE, count: 4},
    ], [Buff.meleeAtk(2).pctg()], [Buff.hp(50), Buff.meleeAtk(1)]),
    JUICY_STEAMED_BUN: new Meal('Juicy Steamed Bun', 1, DishTypes.MEAT, [
        { material: MATERIALS.BEAST_MEAT, count: 4},
        { material: MATERIALS.ONION, count: 4},
    ], [Buff.meleeAtk(5).pctg()], [Buff.hp(50), Buff.meleeAtk(1)]),
    BURNING_TOFU: new Meal('Burning Tofu', 1, DishTypes.MEAT, [
        { material: MATERIALS.WOLF_MEAT, count: 4},
        { material: MATERIALS.TOFU, count: 4},
    ], [Buff.kiAtk(7).pctg()], [Buff.hp(100), Buff.meleeAtk(2), Buff.kiAtk(3)]),
    WILD_STEAK: new Meal('Wild Steak', 2, DishTypes.MEAT, [
        { material: MATERIALS.HIGH_QUALITY_WOLF_MEAT, count: 3},
        { material: MATERIALS.COCONUT, count: 3},
    ], [Buff.kiAtk(10).pctg()], [Buff.hp(500), Buff.kiAtk(10)]),
    PIPING_HOT_CHARRED_ROAST_ON_THE_BONE: new Meal('Piping Hot Charred Roast on the Bone', 2, DishTypes.MEAT, [
        { material: MATERIALS.SELECT_BEAST_MEAT, count: 3},
        { material: MATERIALS.RIPE_APPLE, count: 3},
    ], [Buff.meleeAtk(12).pctg()], [Buff.hp(500), Buff.meleeAtk(10)]),
    EXTRA_JUICY_STEAMED_BUN: new Meal('Extra Juicy Steamed Bun', 2, DishTypes.MEAT, [
        { material: MATERIALS.PREMIUM_GOLDEN_VENSION, count: 3},
        { material: MATERIALS.HIGH_QUALITY_ONION, count: 4},
        { material: MATERIALS.HIGH_QUALITY_CARROT, count: 4 },
    ], [Buff.meleeAtk(15).pctg()], [Buff.hp(500), Buff.kiAtk(10)]),
    HELLFIRE_TOFU: new Meal('Hellfire Tofu', 3, DishTypes.MEAT, [
        { material: MATERIALS.PRIME_GOLDEN_WOLF_MEAT, count: 3},
        { material: MATERIALS.SPICY_MUSHROOM, count: 3},
        { material: MATERIALS.HIGH_QUALITY_TOFU, count: 4},
        { material: MATERIALS.HIGH_QUALITY_CARROT, count: 4},
    ], [Buff.kiAtk(17).pctg()], [Buff.hp(800), Buff.meleeAtk(12), Buff.kiAtk(13)]),
    AGED_WILD_STEAK: new Meal('Aged Wild Steak', 3, DishTypes.MEAT, [
        { material: MATERIALS.PRIME_MARBLED_DINO_MEAT, count: 2},
        { material: MATERIALS.PRIME_GOLDEN_WOLF_MEAT, count: 3},
        { material: MATERIALS.AROMATIC_FRUIT, count: 4},
        { material: MATERIALS.FROZEN_RABBIT_MEAT, count: 4},
    ], [Buff.kiAtk(20).pctg()], [Buff.hp(1000), Buff.meleeAtk(25), Buff.kiAtk(25)]),
    SMILING_ULTRA_MEGA_ROAST: new Meal('Smiling Ultra Mega Roast', 3, DishTypes.MEAT, [
        { material: MATERIALS.PRIME_MARBLED_DINO_MEAT, count: 2 },
        { material: MATERIALS.PRIME_GOLDEN_WOLF_MEAT, count: 3 },
        { material: MATERIALS.PREMIUM_GOLD_GAZELLE_MEAT, count: 3 },
        { material: MATERIALS.PREMIUM_GOLDEN_VENSION, count: 3 },
        { material: MATERIALS.PREMIUM_REINDEER_MEAT, count: 3 },
    ], [Buff.meleeAtk(22).pctg()], [Buff.hp(1000), Buff.meleeAtk(25), Buff.meleeDef(10)]),
    BOILED_FISH: new Meal('Boiled Fish', 1, DishTypes.SEAFOOD, [
        { material: MATERIALS.LEAN_GIANT_FISH, count: 1},
        { material: MATERIALS.GIANT_FISH_FIN_MUSCLE, count: 1},
    ], [Buff.kiDef(15).pctg()], [Buff.hp(50), Buff.kiDef(1)]),
    GRILLED_FISH: new Meal('Grilled Fish', 1, DishTypes.SEAFOOD, [
        { material: MATERIALS.ENERGETIC_FISH, count: 3},
        { material: MATERIALS.HERB, count: 3},
    ], [Buff.meleeDef(2).pctg()], [Buff.hp(50), Buff.meleeDef(1)]),
    REFRESHING_SEAFOOD_SOUP: new Meal('Refreshing Seafood Soup', 1, DishTypes.SEAFOOD, [
        { material: MATERIALS.GIANT_FISH_FIN_MUSCLE, count: 1},
        { material: MATERIALS.CLAM, count: 3},
        { material: MATERIALS.FISH_EGGS, count: 3},
    ], [Buff.kiDef(5).pctg()], [Buff.hp(75), Buff.kiDef(1)]),
    RICH_SEAFOOD_SOUP: new Meal('Rich Seafood Soup', 1, DishTypes.SEAFOOD, [
        { material: MATERIALS.LEAN_GIANT_FISH, count: 1},
        { material: MATERIALS.FISH_EGGS, count: 3},
        { material: MATERIALS.CLAM, count: 3},
    ], [Buff.kiDef(7).pctg()], [Buff.hp(75), Buff.meleeDef(1), Buff.kiDef(1)]),
    JUICY_GRILLED_FISH: new Meal('Juicy Grilled Fish', 2, DishTypes.SEAFOOD, [
        { material: MATERIALS.GREAT_ENERGETIC_FISH, count: 2},
        { material: MATERIALS.HIGH_QUALITY_HERB, count: 3},
    ], [Buff.meleeDef(10).pctg()], [Buff.hp(500), Buff.meleeDef(5)]),
    SIMMERED_SEAFOOD_STEW: new Meal('Simmered Seafood Stew', 2, DishTypes.SEAFOOD, [
        { material: MATERIALS.FATTY_GIANT_FISH, count: 1},
        { material: MATERIALS.MEATY_RIVER_SNAIL, count: 3},
        { material: MATERIALS.HIGH_QUALITY_FISH_EGGS, count: 2},
    ], [Buff.meleeDef(10).pctg()], [Buff.hp(500), Buff.meleeDef(5)]),
    STEAMING_HOT_GRILLED_FISH: new Meal('Steaming-Hot Grilled Fish', 3, DishTypes.SEAFOOD, [
        { material: MATERIALS.GOLDEN_ENERGETIC_FISH, count: 2},
        { material: MATERIALS.AROMATIC_HERB, count: 2},
    ], [Buff.meleeDef(17).pctg()], [Buff.hp(800), Buff.meleeDef(10)]),
    SEA_MONSTER_SOUP: new Meal('Sea Monster Soup', 3, DishTypes.SEAFOOD, [
        { material: MATERIALS.GOLDEN_ENERGETIC_FISH, count: 2 },
        { material: MATERIALS.EXTRA_FATTY_GIANT_FISH, count: 1 },
        { material: MATERIALS.PREMIUM_WHITE_SHELLFISH, count: 2 },
    ], [Buff.kiDef(20).pctg()], [Buff.hp(800),Buff.kiDef(10)]),
    BOILED_TREASUER_OF_THE_SEA: new Meal('Boiled Treasure of the Sea', 3, DishTypes.SEAFOOD, [
        { material: MATERIALS.EXTRA_FATTY_GIANT_FISH, count: 1 },
        { material: MATERIALS.GOLDEN_ENERGETIC_FISH, count: 2 },
        { material: MATERIALS.AROMATIC_HERB, count: 2 },
        { material: MATERIALS.FATTY_GIANT_FISH, count: 1 },
    ], [Buff.kiDef(22).pctg()], [Buff.hp(1000), Buff.meleeDef(10), Buff.kiDef(10)]),
    MEATY_RICE_BALL: new Meal('Meaty Rice Ball', 1, DishTypes.RICE, [
        { material: MATERIALS.RICE, count: 4},
        { material: MATERIALS.CHICKEN, count: 4},
    ], [Buff.hp(2).pctg()], [Buff.hp(50), Buff.meleeAtk(1)]),
    FISH_RICE_BALL: new Meal('Fish Rice Ball', 1, DishTypes.RICE, [
        { material: MATERIALS.RICE, count: 4},
        { material: MATERIALS.ENERGETIC_FISH, count: 3},
        { material: MATERIALS.SEAWEED, count: 3},
    ], [Buff.hp(5).pctg()], [Buff.hp(50), Buff.meleeDef(1)]),
    CRUMBLY_FRIED_RICE: new Meal('Crumbly Fried Rice', 1, DishTypes.RICE, [
        { material: MATERIALS.RICE, count: 4},
        { material: MATERIALS.EGG, count: 4},
        { material: MATERIALS.CARROT, count: 4},
    ], [Buff.hp(7).pctg()], [Buff.hp(75), Buff.meleeAtk(1), Buff.kiAtk(1)]),
    FRESH_SEAFOOD_RICE_BOWL: new Meal('Fresh Seafood Rice Bowl', 2, DishTypes.RICE, [
        { material: MATERIALS.PLAIN_WHITE_RICE, count: 4},
        { material: MATERIALS.HIGH_QUALITY_FISH_EGGS, count: 2},
    ], [Buff.hp(10).pctg()], [Buff.hp(500), Buff.meleeDef(5)]),
    MEATLOVERS_MEAT_FEAST: new Meal('Meatlovers\'s Meat Feast', 2, DishTypes.RICE, [
        { material: MATERIALS.PLAIN_WHITE_RICE, count: 4},
        { material: MATERIALS.SELECT_BEAST_MEAT, count: 3},
    ], [Buff.hp(12).pctg()], [Buff.hp(500), Buff.meleeAtk(10)]),
    EXTRA_MEATY_RICE_BALL: new Meal('Extra Meaty Rice Ball', 2, DishTypes.RICE, [
        { material: MATERIALS.PREMIUM_GAZELLE_MEAT, count: 3},
        { material: MATERIALS.PLAIN_WHITE_RICE, count: 4},
        { material: MATERIALS.SELECT_CHICKEN, count: 4},
    ], [Buff.hp(15).pctg()], [Buff.hp(500), Buff.meleeAtk(5), Buff.kiAtk(5)]),
    EXTRA_SOFT_CRUMBLY_FRIED_RICE: new Meal('Extra Soft Crumbly Fried Rice', 3, DishTypes.RICE, [
        { material: MATERIALS.SHINY_RICE, count: 4 },
        { material: MATERIALS.PREMIUM_EGG, count: 4 },
        { material: MATERIALS.HIGH_QUALITY_CARROT, count: 4 },
    ], [Buff.hp(17).pctg()], [Buff.hp(800), Buff.meleeDef(5), Buff.kiDef(5)]),
    OCEAN_JEWELRY_BOX_BOWL: new Meal('Ocean Jewelry Box Bowl', 3, DishTypes.RICE, [
        { material: MATERIALS.SHINY_RICE, count: 4 },
        { material: MATERIALS.PREMIUM_GOLDEN_FISH_EGGS, count: 2 },
        { material: MATERIALS.EXTRA_FATTY_GIANT_FISH, count: 1 },
    ], [Buff.hp(20).pctg()], [Buff.hp(800), Buff.kiDef(10)]),
    ULTIMATE_MEAT_FEAST: new Meal('Ultimate Meat Feast', 3, DishTypes.RICE, [
        { material: MATERIALS.SHINY_RICE, count: 4 },
        { material: MATERIALS.PREMIUM_GOLD_GAZELLE_MEAT, count: 3 },
        { material: MATERIALS.PREMIUM_GOLDEN_VENSION, count: 3 },
        { material: MATERIALS.PREMIUM_REINDEER_MEAT, count: 3 },
        { material: MATERIALS.PREMIUM_EGG, count: 4 },
    ], [Buff.hp(22).pctg()], [Buff.hp(1000), Buff.kiAtk(25), Buff.kiDef(10)]),
    MEATY_RAMEN: new Meal('Meaty Ramen', 1, DishTypes.NOODLE, [
        { material: MATERIALS.WHEAT, count: 4},
        { material: MATERIALS.CHICKEN, count: 4},
        { material: MATERIALS.EGG, count: 4},
    ], [Buff.ki(2).pctg(),], [Buff.hp(50), Buff.meleeAtk(1)]),
    FRESH_SEAFOOD_PASTA: new Meal('Fresh Seafood Pasta', 1, DishTypes.NOODLE, [
        { material: MATERIALS.WHEAT, count: 4},
        { material: MATERIALS.ENERGETIC_FISH, count: 3},
        { material: MATERIALS.CLAM, count: 3},
    ], [Buff.ki(5).pctg(),], [Buff.hp(50), Buff.meleeDef(1)]),
    DINO_RAMEN: new Meal('Dino Ramen', 1, DishTypes.NOODLE, [
        { material: MATERIALS.WHEAT, count: 4},
        { material: MATERIALS.LEAN_DINO_MEAT, count: 3},
        { material: MATERIALS.EGG, count: 4},
    ], [Buff.ki(7).pctg(),], [Buff.hp(75), Buff.meleeAtk(1), Buff.kiAtk(1)]),
    WILD_PASTA: new Meal('Wild Pasta', 2, DishTypes.NOODLE, [
        { material: MATERIALS.ROSE_WHEAT, count: 4},
        { material: MATERIALS.HIGH_QUALITY_WOLF_MEAT, count: 3},
    ], [Buff.ki(10).pctg(),], [Buff.hp(500), Buff.kiAtk(10)]),
    EXTRA_MEATY_RAMEN: new Meal('Extra Meaty Ramen', 2, DishTypes.NOODLE, [
        { material: MATERIALS.ROSE_WHEAT, count: 4},
        { material: MATERIALS.MARBLED_DINO_MEAT, count: 3},
        { material: MATERIALS.SHINY_LAVER, count: 3},
    ], [Buff.ki(12).pctg(),], [Buff.hp(500), Buff.kiAtk(10)]),
    WHIRLPOOL_PASTA: new Meal('Whirlpool Pasta', 2, DishTypes.NOODLE, [
        { material: MATERIALS.GOLDEN_ENERGETIC_FISH, count: 2},
        { material: MATERIALS.ROSE_WHEAT, count: 4},
        { material: MATERIALS.HORNED_TURBAN, count: 3},
    ], [Buff.ki(15).pctg(),], [Buff.hp(500), Buff.meleeDef(5)]),
    EXTRA_WILD_PASTA: new Meal('Extra Wild Pasta', 3, DishTypes.NOODLE, [
        { material: MATERIALS.GOLDEN_WHEAT, count: 4},
        { material: MATERIALS.PRIME_GOLDEN_WOLF_MEAT, count: 3},
        { material: MATERIALS.SPICY_MUSHROOM, count: 3},
    ], [Buff.ki(17).pctg(),], [Buff.hp(800), Buff.kiAtk(25)]),
    HEAP_OF_MEAT_RAMEN_Z: new Meal('Heap of Meat Ramen Z', 3, DishTypes.NOODLE, [
        { material: MATERIALS.GOLDEN_WHEAT, count: 4 },
        { material: MATERIALS.PRIME_MARBLED_DINO_MEAT, count: 2 },
        { material: MATERIALS.PREMIUM_GOLDEN_FISH_EGGS, count: 2 },
    ], [Buff.ki(20).pctg(),], [Buff.hp(800), Buff.kiAtk(25)]),
    ROUGH_SEAS_SPARKING_PASTA: new Meal('Rough Seas Sparking Pasta', 3, DishTypes.NOODLE, [
        { material: MATERIALS.GOLDEN_WHEAT, count: 4 },
        { material: MATERIALS.GOLDEN_ENERGETIC_FISH, count: 2 },
        { material: MATERIALS.EXTRA_FATTY_GIANT_FISH, count: 1 },
        { material: MATERIALS.PREMIUM_WHITE_SHELLFISH, count: 2 },
    ], [Buff.ki(20).pctg(),], [Buff.hp(1000), Buff.kiDef(10)]),
    FRUIT_GELATIN: new Meal('Fruit Gelatin', 1, DishTypes.DESSERT, [
        { material: MATERIALS.MILK, count: 4 },
        { material: MATERIALS.PEACH, count: 3 },
        { material: MATERIALS.MANGO, count: 3 },
    ], [Buff.zOrb(10).pctg()], [Buff.hp(50)]),
    SESAME_DUMPLING: new Meal('Sesame Dumpling', 1, DishTypes.DESSERT, [
        { material: MATERIALS.RICE, count: 4 },
        { material: MATERIALS.BEAN_PASTE, count: 4 },
    ], [Buff.critRate(2.5).pctg()], [Buff.hp(50)]),
    SUGARY_CUPCAKE: new Meal('Sugary Cupcake', 1, DishTypes.DESSERT, [
        { material: MATERIALS.MILK, count: 4 },
        { material: MATERIALS.APPLE, count: 4 },
        { material: MATERIALS.PEACH, count: 3 },
    ], [Buff.exp(10).pctg()], [Buff.hp(75)]),
    ARTSY_CUPCAKE: new Meal('Artsy Cupcake', 2, DishTypes.DESSERT, [
        { material: MATERIALS.HIGH_QUALITY_MILK, count: 4},
        { material: MATERIALS.HIGH_QUALITY_EGG, count: 4},
        { material: MATERIALS.RIPE_PEACH, count: 3},
    ], [Buff.exp(20).pctg()], [Buff.hp(500), Buff.meleeDef(1), Buff.kiDef(1)]),
    FRESH_FRUIT_GELATIN: new Meal('Fresh Fruit Gelatin', 2, DishTypes.DESSERT, [
        { material: MATERIALS.HIGH_QUALITY_MILK, count: 4 },
        { material: MATERIALS.RIPE_PEACH, count: 3 },
        { material: MATERIALS.RIPE_MANGO, count: 3 },
    ], [Buff.zOrb(20).pctg()], [Buff.hp(500), Buff.meleeDef(1), Buff.kiDef(1)]),
    LOADED_SESAME_DUMPLING: new Meal('Loaded Sesame Dumpling', 2, DishTypes.DESSERT, [
        { material: MATERIALS.SHINY_RICE, count: 4 },
        { material: MATERIALS.HIGH_QUALITY_BEAN_PASTE, count: 4 },
    ], [Buff.critRate(5).pctg()], [Buff.hp(500), Buff.meleeDef(1), Buff.kiDef(1)]),
    RICH_CUPCAKE: new Meal('Rich Cupcake', 3, DishTypes.DESSERT, [
        { material: MATERIALS.PREMIUM_MILK, count: 4 },
        { material: MATERIALS.SUPERB_APPLE, count: 2 },
        { material: MATERIALS.SUPERB_PEACH, count: 2 },
    ], [Buff.exp(30).pctg()], [Buff.hp(800), Buff.meleeDef(5), Buff.kiDef(5)]),
    DREAMY_FRUIT_GELATIN: new Meal('Dreamy Fruit Gelatin', 3, DishTypes.DESSERT, [
        { material: MATERIALS.PREMIUM_MILK, count: 4 },
        { material: MATERIALS.SUPERB_PEACH, count: 2 },
        { material: MATERIALS.SUPERB_MANGO, count: 2 },
        { material: MATERIALS.SUPERB_APPLE, count: 2 },
    ], [Buff.zOrb(30).pctg()], [Buff.hp(1000), Buff.meleeDef(5), Buff.kiDef(5)]),
    SUPER_ULTRA_DUMPLING: new Meal('Super Ultra Dumpling', 3, DishTypes.DESSERT, [
        { material: MATERIALS.SHINY_RICE, count: 4 },
        { material: MATERIALS.HIGH_QUALITY_BEAN_PASTE, count: 4 },
    ], [Buff.critRate(7.5).pctg()], [Buff.hp(1000), Buff.meleeDef(5), Buff.kiDef(5)]),
};

export const MULTI_COURSE_MEAL = {
    SPECIAL_MEAT_COURSE: new MultiCourseMeal('Special Meat Course', 2 , [
        { meal: MEALS.MEATLOVERS_MEAT_FEAST, count: 1 },
        { meal: MEALS.JUICY_GRILLED_FISH, count: 1 },
        { meal: MEALS.EXTRA_JUICY_STEAMED_BUN, count: 1 },
    ], 
    [Buff.meleeAtk(25).pctg(), Buff.kiAtk(25).pctg(), Buff.critRate(7.5).pctg()], 
    [Buff.hp(10000), Buff.ki(3), Buff.meleeAtk(75)]),
    SUPER_DELUXE_MEAT_COURSE: new MultiCourseMeal('Super Deluxe Meat Course', 3 , [
        { meal: MEALS.SMILING_ULTRA_MEGA_ROAST, count: 1 },
        { meal: MEALS.WILD_STEAK, count: 1 },
        { meal: MEALS.HEAP_OF_MEAT_RAMEN_Z, count: 1 },
        { meal: MEALS.CRUMBLY_FRIED_RICE, count: 1 },
        { meal: MEALS.SUPER_ULTRA_DUMPLING, count: 1 },
    ], 
    [Buff.hp(45).pctg(), Buff.ki(45).pctg(), Buff.exp(35).pctg()], 
    [Buff.hp(20000), Buff.ki(5), Buff.meleeAtk(300)]),
    SUPER_DELUXE_SEAFOOD_COURSE: new MultiCourseMeal('Super Deluxe Seafood Course', 3 , [
        { meal: MEALS.BOILED_TREASUER_OF_THE_SEA, count: 1 },
        { meal: MEALS.HELLFIRE_TOFU, count: 1 },
        { meal: MEALS.WHIRLPOOL_PASTA, count: 1 },
        { meal: MEALS.EXTRA_MEATY_RICE_BALL, count: 1 },
        { meal: MEALS.DREAMY_FRUIT_GELATIN, count: 1 },
    ], 
    [Buff.hp(30).pctg(), Buff.meleeAtk(30).pctg(), Buff.meleeDef(30).pctg()], 
    [Buff.hp(20000), Buff.ki(5), Buff.meleeDef(150)]),
    PREMIUM_MEAT_COURSE: new MultiCourseMeal('Premium Meat Course', 3 , [
        { meal: MEALS.ULTIMATE_MEAT_FEAST, count: 1 },
        { meal: MEALS.SEA_MONSTER_SOUP, count: 1 },
        { meal: MEALS.ROUGH_SEAS_SPARKING_PASTA, count: 1 },
        { meal: MEALS.EXTRA_JUICY_STEAMED_BUN, count: 1 },
        { meal: MEALS.ARTSY_CUPCAKE, count: 1 },
    ], 
    [Buff.ki(30).pctg(), Buff.kiAtk(30).pctg(), Buff.kiDef(30).pctg()], 
    [Buff.hp(20000), Buff.ki(5), Buff.kiAtk(300)]),
    PREMIUM_SEAFOOD_COURSE: new MultiCourseMeal('Premium Seafood Course', 3 , [
        { meal: MEALS.OCEAN_JEWELRY_BOX_BOWL, count: 1 },
        { meal: MEALS.SEA_MONSTER_SOUP, count: 1 },
        { meal: MEALS.SMILING_ULTRA_MEGA_ROAST, count: 1 },
        { meal: MEALS.DREAMY_FRUIT_GELATIN, count: 1 },
        { meal: MEALS.LOADED_SESAME_DUMPLING, count: 1 },
    ], 
    [Buff.meleeAtk(35).pctg(), Buff.kiAtk(35).pctg(), Buff.critRate(10).pctg()], 
    [Buff.hp(20000), Buff.ki(5), Buff.meleeDef(150)]),
    HEAVENLY_RAMEN_COURSE: new MultiCourseMeal('Heavenly Ramen Course', 3 , [
        { meal: MEALS.HEAP_OF_MEAT_RAMEN_Z, count: 1 },
        { meal: MEALS.EXTRA_SOFT_CRUMBLY_FRIED_RICE, count: 1 },
        { meal: MEALS.BOILED_TREASUER_OF_THE_SEA, count: 1 },
        { meal: MEALS.SUPER_ULTRA_DUMPLING, count: 1 },
        { meal: MEALS.RICH_CUPCAKE, count: 1 },
    ], 
    [Buff.meleeDef(35).pctg(), Buff.kiDef(35).pctg(), Buff.zOrb(35).pctg()], 
    [Buff.hp(20000), Buff.ki(5), Buff.kiAtk(300)]),
};

