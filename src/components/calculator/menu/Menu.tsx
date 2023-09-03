import { Grid } from '@mui/material';
import Meal from '../meals/Meal';
import Item from './Item';
import { menuMeals } from './data';
export default function Menu() {

    return (
        <Grid container spacing={2}>
            {menuMeals.map((item) => <Grid item xs={12} md={4} ><Item meal={item.meal} checked={item.checked}></Item></Grid>)}
        </Grid>
    )
}