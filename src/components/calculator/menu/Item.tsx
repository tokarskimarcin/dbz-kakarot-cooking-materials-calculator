import './Item.css';

import MealData from "../meals/data/classes/Meal";
import { Card, CardContent } from '@mui/material';
import React, {useState} from 'react';

export default function Item(props: { meal: MealData, checked: boolean, onCheckToggle: (checked: boolean) => void }) {
    const [isChecked, setChecked] = useState(props.checked);

    const toggleCheck = () => {
      setChecked(current => {        
        const nextValue = !current;
        props.onCheckToggle(nextValue);
        return nextValue;
      });
    };
    
    return (
        <Card sx={{ minWidth: 100 }} onClick={toggleCheck} className={`menu-item ${isChecked ? 'item-checked' : ''}`}>
          <CardContent >
            {React.createElement(props.meal.getComponent(), {data: props.meal })}
          </CardContent>
        </Card>
    );
}