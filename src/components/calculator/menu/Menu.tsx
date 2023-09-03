import { Grid } from '@mui/material';
import Item from './Item';
import { MenuActions } from '../Calculator';
import React from 'react';
import ItemIndexed from './data/classes/IndexedItem';
export default function Menu(props: {menuItems: Array<ItemIndexed>, onMenuMealAction: React.Dispatch<MenuActions>}) {

    function onItemClicked(id: number) {
        return (checked: boolean) => props.onMenuMealAction({type: 'toggleCheck', id, checked});
    } 
    return (
        <Grid container spacing={2}>
            {props.menuItems.map((item) => 
            <Grid key={item.index} item xs={12} md={6} >
                <Item meal={item.meal} checked={item.checked} onCheckToggle={onItemClicked(item.index)}></Item>
            </Grid>)}
        </Grid>
    )
}