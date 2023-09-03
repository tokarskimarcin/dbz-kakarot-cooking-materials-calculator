
import { TextField, Box, Grid } from '@mui/material';
import Menu from './menu/Menu';

export default function Calculator() {
    const ariaLabel = { 'aria-label': 'description' };
    
    return (
        <Box
        component="form"
        // sx={{
        //     '& > :not(style)': { m: 1 },
        // }}
        noValidate
        autoComplete="off"
        >
            <Grid container spacing={1}>
                <Grid item xs={5}>
                    list of materials
                </Grid>
                <Grid item xs={7} container spacing={2} direction="column" 
                    sx={{ minHeight: '100vh', maxHeight: '100vh'}}>
                    <Grid item xs={10} sx={{ overflowY: 'scroll' }}>
                        <Menu></Menu>
                    </Grid>
                    <Grid item xs={2} container
                        alignItems="center"
                        justifyContent="left">
                        <TextField
                            id="number-of-portions"
                            label="Number of portions"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{
                                inputProps: {
                                    min: 1
                                }
                            }}
                            />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}