import React from 'react';

import './App.css';
import Calculator from './components/calculator/Calculator';
import {Grid} from '@mui/material';

function App() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh' }}
    >
      <Grid item xs={12}>
        <Calculator></Calculator>
      </Grid>
    </Grid>
  );
}

export default App;
