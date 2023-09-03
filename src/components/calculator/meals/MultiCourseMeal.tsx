import {Typography} from '@mui/material';
import MealData from './data/classes/Meal';


export default function MultiCourseMeal(props: {data: MealData}) {
    
    return (
      <>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.data.getType()}
        </Typography>
        <Typography variant="h5" component="div">
            {props.data.name}
        </Typography>
      </>
    );
}