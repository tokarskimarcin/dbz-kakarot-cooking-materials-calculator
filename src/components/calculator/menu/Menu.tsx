import { Box, Divider, Grid, Typography } from '@mui/material';
import Item from './Item';
import { MenuActions } from '../Calculator';
import React from 'react';
import ItemIndexed from './data/classes/IndexedItem';
export default function Menu(props: {menuItems: Array<ItemIndexed>, onMenuMealAction: React.Dispatch<MenuActions>}) {

    function onItemClicked(id: number) {
        return (checked: boolean) => props.onMenuMealAction({type: 'toggleCheck', id, checked});
    } 
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', position: 'relative', height: '100%'}}>
            <Typography variant="h5">
                Meals
            </Typography>
            <Divider />
            <Box className='first-color'
            sx={{position: 'relative', overflowY: 'auto', height: '90%', p: 0.5 }}>
                <Grid container 
                spacing={2}>
                {props.menuItems.map((item) => 
                    <Grid item xs={12} md={6}>
                        <Item meal={item.meal} checked={item.checked} onCheckToggle={onItemClicked(item.index)}></Item>
                    </Grid>
                )}
                </Grid>
            </Box>
            <Divider />
        </Box>
    )
}