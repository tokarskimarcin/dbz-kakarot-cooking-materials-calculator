
import { TextField, Box, Grid } from '@mui/material';
import Menu from './menu/Menu';
import React, { useReducer, useState } from 'react';
import { menuItems as initialMenuMeals } from './menu/data/MenuItems';
import Item from './menu/data/classes/Item';
import MaterialsList from './calculated-materials/MaterialsList';
import ItemIndexed from './menu/data/classes/IndexedItem';
import MealsRequiredMaterialsCalculator from './menu/data/MealsRequiredMaterialsCalculator';

const indexedInitialMenuMeals = initialMenuMeals.map((item, index) => new ItemIndexed(index, item));
export default function Calculator() {
    const [menuItems, dispatch] = useReducer(menuReducer, indexedInitialMenuMeals);
    const [portionsCount, setPortionsCount] = useState(1);
    
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPortionsCount(Number(e.target.value));
    }

    const checkedMeals = menuItems.filter(item => !!item.checked);
    const reqMaterials = MealsRequiredMaterialsCalculator(checkedMeals.map(item => item.meal), portionsCount);
    
    return (
        <Box
        component="form"
        // sx={{
        //     '& > :not(style)': { m: 1 },
        // }}
        noValidate
        autoComplete="off"
        sx={{
            display: 'flex',
            width: 1,
            height: 1,
        }}
        >
            <Box sx={{display: 'flex', flexDirection: 'column', width: '50%', px: 1}}>
                <MaterialsList materials={reqMaterials}></MaterialsList>
            </Box>
            
            <Box sx={{display: 'flex', flexDirection: 'column', width: '50%', px: 1}}>
                <Box sx={{display: 'flex', height: 'calc(100% - 80px)'}}>
                    <Menu menuItems={menuItems} onMenuMealAction={dispatch}></Menu>
                </Box>
                
                <Box sx={{display: 'flex', alignItems: 'center',  height: 80}}>
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
                </Box>
            </Box>
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