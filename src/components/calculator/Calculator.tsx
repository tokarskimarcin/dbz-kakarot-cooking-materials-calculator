
import { TextField, Box, Grid } from '@mui/material';
import Menu from './menu/Menu';
import React, { useReducer, useState } from 'react';
import { menuMeals as initialMenuMeals } from './menu/data';
import Item from './menu/data/Item';
import MaterialsList from './calculated-materials/MaterialsList';

// export const MenuMealsContext = createContext(initialMenuMeals);
const indexedInitialMenuMeals = initialMenuMeals.map((item, index) => ({id: index, item }));
export default function Calculator() {
    const [menuMeals, dispatch] = useReducer(menuReducer, indexedInitialMenuMeals);
    const [portionsCount, setPortionsCount] = useState(1);
    
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPortionsCount(Number(e.target.value));
    }
    const checkedMeals = menuMeals.filter(item => !!item.item.checked);
    
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
                    <MaterialsList meals={checkedMeals.map(item => item.item.meal)}></MaterialsList>
                </Grid>
                <Grid item xs={7} container spacing={2} direction="column" 
                    sx={{ minHeight: '100vh', maxHeight: '100vh'}}>
                    <Grid item xs={10} sx={{ overflowY: 'scroll' }}>
                        <Menu menuItems={menuMeals} onMenuMealAction={dispatch}></Menu>
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
export type IndexedMenuItem = {
    id: number;
    item: Item;
};

function menuReducer(menuItems: Array<IndexedMenuItem>, action: MenuActions) {
    switch (action.type) {
        case 'toggleCheck': {
            return menuItems.map(item => {
                if (item.id === action.id) {
                    item.item.checked = action.checked;
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