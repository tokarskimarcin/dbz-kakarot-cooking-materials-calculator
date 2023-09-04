import {Typography} from '@mui/material';
import MealData from './data/classes/Meal';
import Meal from './Meal';


export default function MultiCourseMeal(props: {data: MealData}) {
    
    return (
      <Meal data={props.data}></Meal>
    );
}