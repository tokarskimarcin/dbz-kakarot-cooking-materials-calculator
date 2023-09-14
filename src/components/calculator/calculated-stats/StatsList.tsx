import { Box, Divider, Grid, Typography } from "@mui/material";
import Stat from "./Stat";
import { Buff } from "../meals/data/classes/Meal";

export default function StatsList(props: {buffs: Array<Buff>}) {    
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', position: 'relative', width: 1, height: 1}}>
            <Typography variant="h5">
                Stats
            </Typography>
            <Divider />
            <Box 
            sx={{position: 'relative', overflowY: 'auto', height: '90%', p: 0.5 }}>
                <Grid container
                spacing={2}>
                    {
                        props.buffs.map((buff, index) => 
                        <Grid item xs={12} md={6} lg={4}>
                            <Stat key={index} buff={buff} index={index}></Stat>
                        </Grid>
                        )
                    }

                </Grid>
            </Box>
            <Divider />
        </Box>
    )
}