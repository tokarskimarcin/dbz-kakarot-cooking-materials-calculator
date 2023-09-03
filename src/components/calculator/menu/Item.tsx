import Meal from "../meals/Meal";
import MealData from "../meals/data/Meal";
import {Checkbox, Box, Card, CardContent, Typography, CardActions} from '@mui/material';
import {useState} from 'react';

export default function Item(props: { meal: MealData, checked: boolean }) {
    const [checked, setChecked] = useState(props.checked);
    console.log(checked);
    return (
        <Card sx={{ minWidth: 100 }}>
          <CardContent>
            {props.meal instanceof MealData ? 
            <Meal data={props.meal}></Meal> : 
            <Meal data={props.meal}></Meal>}
          </CardContent>
        </Card>
    );
}