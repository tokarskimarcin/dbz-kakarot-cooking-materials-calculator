import { Box } from "@mui/material";
import Meal from "../meals/data/Meal";
import Material from "./Material";

export default function MaterialsList(props: {meals: Array<Meal>}) {    
    return (
        <Box sx={{ width: 1, height: 1, maxHeight: '100vh', background: '#eaeaea', overflowY: 'scroll', }}>
            {
                props.meals.map((meal, index) => (<Material key={index} meal={meal} index={index}></Material>))
            }
        </Box>
    )
}