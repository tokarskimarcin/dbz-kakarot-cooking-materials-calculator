import { Box, Divider, Grid, Typography } from "@mui/material";
import Material from "./Material";
import { RequiredMaterial } from "../meals/data/classes/Meal";

export default function MaterialsList(props: {materials: Array<RequiredMaterial>}) {    
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', position: 'relative', width: 1, height: 1}}>
            <Typography variant="h5">
                Required materials
            </Typography>
            <Divider />
            <Box className='first-color'
            sx={{position: 'relative', overflowY: 'auto', height: '90%', p: 0.5 }}>
                <Grid container direction='column' 
                spacing={2}>
                    {
                        props.materials.map((requiredMaterial, index) => 
                        <Grid item>
                            <Material key={requiredMaterial.material.name} material={requiredMaterial.material} count={requiredMaterial.count} index={index}></Material>
                        </Grid>
                        )
                    }

                </Grid>
            </Box>
            <Divider />
        </Box>
    )
}