import { Grid } from '@mui/material';
import Item from './Item';
import { IndexedMenuItem, MenuActions } from '../Calculator';
import React from 'react';
export default function Menu(props: {menuItems: Array<IndexedMenuItem>, onMenuMealAction: React.Dispatch<MenuActions>}) {

    function onItemClicked(id: number) {
        return (checked: boolean) => props.onMenuMealAction({type: 'toggleCheck', id, checked});
    } 
    return (
        <Grid container spacing={2}>
            {props.menuItems.map((item) => <Grid key={item.id} item xs={12} md={4} ><Item meal={item.item.meal} checked={item.item.checked} onCheckToggle={onItemClicked(item.id)}></Item></Grid>)}
        </Grid>
    )
}