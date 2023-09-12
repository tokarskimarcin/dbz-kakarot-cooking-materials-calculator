import './Item.css';

import MealData from "../meals/data/classes/Meal";
import { Card, CardActions, CardContent, Collapse, Divider, Grid, List, ListItem, Typography } from '@mui/material';
import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Item(props: { meal: MealData, checked: boolean, onCheckToggle: (checked: boolean) => void }) {
    const [isChecked, setChecked] = useState(props.checked);
    const [isExpanded, setIsExpanded] = useState(false);
    
    const toggleCheck = () => {
      setChecked(current => {        
        const nextValue = !current;
        props.onCheckToggle(nextValue);
        return nextValue;
      });
    };
    const handleExpandClick = () => {
      setIsExpanded(current => !current);
    };
    
    return (
        <Card sx={{ minWidth: 100 }} className={`menu-item ${isChecked ? 'item-checked' : ''}`}>
          <CardContent className='content' onClick={toggleCheck}>
            {React.createElement(props.meal.getComponent(), {data: props.meal })}
          </CardContent>
          <Divider></Divider>
          <CardActions disableSpacing>
            <ExpandMore
              expand={isExpanded}
              onClick={handleExpandClick}
              aria-expanded={isExpanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={isExpanded} timeout="auto" unmountOnExit>
            <Grid container spacing={1} sx={{px: 1}}>
              <Grid key="meal-effect" item md={12} lg={6} xs={6}>
                <Typography color="text.secondary">Meal Effect</Typography>
                <List dense>
                  {props.meal.getMealEffect().map(eff => <ListItem>{eff.getLabel()}</ListItem>)}
                </List>
              </Grid>
              <Grid key="stat-boost" item md={12} lg={6} xs={6}>
                <Typography color="text.secondary">StatBoost</Typography>
                <List dense>
                  {props.meal.getStatBoost().map(stat => <ListItem>{stat.getLabel()}</ListItem>)}
                </List>
              </Grid>
            </Grid>
          </Collapse>
        </Card>
    );
}