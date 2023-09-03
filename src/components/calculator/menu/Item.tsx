import Meal from "../meals/Meal";
import MealData from "../meals/data/Meal";
import { Card, CardContent } from '@mui/material';
import {useState} from 'react';

export default function Item(props: { meal: MealData, checked: boolean, onCheckToggle: (checked: boolean) => void }) {
    const [isChecked, setChecked] = useState(props.checked);

    const toggleCheck = () => {
      setChecked(current => !current);
      props.onCheckToggle(isChecked);
    };

    return (
        <Card sx={{ minWidth: 100 }} onClick={toggleCheck}>
          <CardContent>
            {props.meal instanceof MealData ? 
            <Meal data={props.meal}></Meal> : 
            <Meal data={props.meal}></Meal>}
          </CardContent>
        </Card>
    );
}