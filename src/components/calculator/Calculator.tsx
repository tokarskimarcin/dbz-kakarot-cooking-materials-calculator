
import { TextField, Box, Grid } from '@mui/material';
import Menu from './menu/Menu';
import React, { useReducer, useState } from 'react';
import { menuItems as initialMenuMeals } from './menu/data/MenuItems';
import Item from './menu/data/classes/Item';
import MaterialsList from './calculated-materials/MaterialsList';
import ItemIndexed from './menu/data/classes/IndexedItem';
import { RequiredMaterial } from './meals/data/classes/Meal';

// export const MenuMealsContext = createContext(initialMenuMeals);
const indexedInitialMenuMeals = initialMenuMeals.map((item, index) => new ItemIndexed(index, item));
export default function Calculator() {
    const [menuItems, dispatch] = useReducer(menuReducer, indexedInitialMenuMeals);
    const [portionsCount, setPortionsCount] = useState(1);
    
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPortionsCount(Number(e.target.value));
    }

    const checkedMeals = menuItems.filter(item => !!item.checked);
    const reqMaterials = checkedMeals.map(item => item.meal.getRequiredMaterials())
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
        // calculate required materials count
        .map(reqMaterial => ({
            material: reqMaterial.material, 
            count: reqMaterial.count * portionsCount
        }));
    
    return (
        <Box
        component="form"
        // sx={{
        //     '& > :not(style)': { m: 1 },
        // }}
        noValidate
        autoComplete="off"
        >
            <Grid container spacing={1}>
                <Grid item xs={5}>
                    <MaterialsList materials={reqMaterials}></MaterialsList>
                </Grid>
                <Grid item xs={7} container spacing={2} direction="column" 
                    sx={{ minHeight: '100vh', maxHeight: '100vh'}}>
                    <Grid item xs={10} sx={{ overflowY: 'scroll' }}>
                        <Menu menuItems={menuItems} onMenuMealAction={dispatch}></Menu>
                    </Grid>
                    <Grid item xs={2} container
                        alignItems="center"
                        justifyContent="left">
                        <TextField
                            id="number-of-portions"
                            label="Number of portions"
                            type="number"
                            value={portionsCount}
                            onChange={handleOnChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{
                                inputProps: {
                                    min: 1
                                }
                            }}
                            />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

type MenuItemToggleChecked = {type: 'toggleCheck', id: number, checked: boolean};
export type MenuActions =  MenuItemToggleChecked; 

function menuReducer(menuItems: Array<ItemIndexed>, action: MenuActions) {
    switch (action.type) {
        case 'toggleCheck': {
            return menuItems.map(item => {
                if (item.index === action.id) {
                    item.checked = action.checked;
                    return item;
                }
                return item;
            });
        }
        default: {
          throw Error('Unknown action: ' + action.type);
        }
    }
}