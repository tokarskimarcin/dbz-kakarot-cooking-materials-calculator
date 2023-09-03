import { Box, Divider, Grid, Typography } from "@mui/material";
import Material from "./Material";
import { RequiredMaterial } from "../meals/data/classes/Meal";

export default function MaterialsList(props: {materials: Array<RequiredMaterial>}) {    
    return (
        <>
            <Typography variant="h5">
                Required materials
            </Typography>
            <Divider />
            <Grid container direction='column' spacing={2}
            // sx={{ width: 1, top: 10, height: 1, maxHeight: '100vh', overflowY: 'scroll', }}
            >
                {
                    props.materials.map((requiredMaterial, index) => 
                    <Grid item xs={11}>
                        <Material key={index} material={requiredMaterial.material} count={requiredMaterial.count} index={index}></Material>
                    </Grid>
                    )
                }
            </Grid>
        </>
    )
}