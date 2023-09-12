import {Typography} from '@mui/material';
import MealData from './data/classes/Meal';
import StarIcon from '@mui/icons-material/Star';

export default function Meal(props: {data: MealData}) {
    
  const starsCount = props.data.getStarsCount();
  const Star = <StarIcon sx={{ fontSize: 13, color: 'gold' }}></StarIcon>;
    const stars = starsCount < 5 ? 
      Array(starsCount).fill(Star) :
      <Typography display='inline-block' sx={{ fontSize: 13, fontWeight: 'bold', color: 'gold' }}>{Star}{starsCount}</Typography>
    return (
      <>
        <Typography key='meta' sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
            {stars} {props.data.getType()}
        </Typography>
        <Typography key='name' variant="h6" component="div">
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