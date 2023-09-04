import {Typography} from '@mui/material';
import MealData from './data/classes/Meal';


export default function Meal(props: {data: MealData}) {
    
    return (
      <>
        <Typography sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
            {props.data.getType()}
        </Typography>
        <Typography variant="h6" component="div">
            {props.data.name}
        </Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </>
    );
}