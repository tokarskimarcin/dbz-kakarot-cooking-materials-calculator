import { Box, Divider, Grid, ToggleButton, ToggleButtonGroup, Tooltip, Typography } from '@mui/material';
import Item from './Item';
import { MenuActions } from '../Calculator';
import React, { useState } from 'react';
import ItemIndexed from './data/classes/IndexedItem';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { DishTypes } from '../meals/data/classes/Meal';
export default function Menu(props: {menuItems: Array<ItemIndexed>, onMenuMealAction: React.Dispatch<MenuActions>}) {

    const [dishType, setDishType] = useState<DishTypes | 'all'>("all");

    const handleAlignment = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: DishTypes | 'all' | null,
    ) => {
        if (!!newAlignment) setDishType(newAlignment);
    };
  
    function onItemClicked(id: number) {
        return (checked: boolean) => props.onMenuMealAction({type: 'toggleCheck', id, checked});
    }

    const menuItems = dishType !== 'all' ? [...props.menuItems].filter(item => item.meal.getDishType() === dishType) : props.menuItems;
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', position: 'relative', height: '100%'}}>
            <Typography variant="h5">
                Meals<br></br>
                <ToggleButtonGroup
                    value={dishType}
                    exclusive
                    aria-label="text alignment"
                    onChange={handleAlignment}
                    size='small'
                    >
                    <ToggleButton key="all" value="all" aria-label="left aligned">
                        <Tooltip title="All">
                            <FilterAltOffIcon />
                        </Tooltip>
                    </ToggleButton>
                    <ToggleButton key={DishTypes.MULTI_COURSE} value={DishTypes.MULTI_COURSE} aria-label="left aligned">
                        <Tooltip title={DishTypes.MULTI_COURSE}>
                            <TextSnippetIcon />
                        </Tooltip>
                    </ToggleButton>
                    <ToggleButton key={DishTypes.MEAT} value={DishTypes.MEAT} aria-label="centered">
                        <Tooltip title={DishTypes.MEAT}>
                            <img src='/dbz-kakarot-cooking-materials-calculator/filters/meat-filter.png' alt={DishTypes.MEAT} />
                        </Tooltip>
                    </ToggleButton>
                    <ToggleButton key={DishTypes.SEAFOOD} value={DishTypes.SEAFOOD} aria-label="right aligned">
                        <Tooltip title={DishTypes.SEAFOOD}>
                            <img src='/dbz-kakarot-cooking-materials-calculator/filters/fish-filter.png' alt={DishTypes.SEAFOOD} />
                        </Tooltip>
                    </ToggleButton>
                    <ToggleButton key={DishTypes.RICE} value={DishTypes.RICE}aria-label="justified">
                        <Tooltip title={DishTypes.RICE}>
                            <img src='/dbz-kakarot-cooking-materials-calculator/filters/rice-filter.png' alt={DishTypes.RICE} />
                        </Tooltip>
                    </ToggleButton>
                    <ToggleButton key={DishTypes.NOODLE} value={DishTypes.NOODLE}aria-label="justified">
                        <Tooltip title={DishTypes.NOODLE}>
                            <img src='/dbz-kakarot-cooking-materials-calculator/filters/noodles-filter.png' alt={DishTypes.NOODLE} />
                        </Tooltip>
                    </ToggleButton>
                    <ToggleButton key={DishTypes.DESSERT} value={DishTypes.DESSERT}aria-label="justified">
                        <Tooltip title={DishTypes.DESSERT}>
                            <img src='/dbz-kakarot-cooking-materials-calculator/filters/cake-filter.png' alt={DishTypes.DESSERT} />
                        </Tooltip>
                    </ToggleButton>
                </ToggleButtonGroup>
            </Typography>
            <Divider />
            <Box className='first-color'
            sx={{position: 'relative', overflowY: 'auto', height: '90%', p: 0.5 }}>
                <Grid container 
                spacing={2}>
                {menuItems.map((item) =>
                    <Grid item xs={12} md={6}>
                        <Item key={item.index} meal={item.meal} checked={item.checked} onCheckToggle={onItemClicked(item.index)}></Item>
                    </Grid>
                )}
                </Grid>
            </Box>
            <Divider />
        </Box>
    )
}