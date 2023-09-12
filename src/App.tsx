import './App.css';
import Calculator from './components/calculator/Calculator';
import {Box, Grid} from '@mui/material';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <>
      <Helmet>
        <title>DBZ: Kakarot - Cooking Materials Calculator</title>
      </Helmet>
      <Box
        sx={{
          display: 'flex',
          height: '100vh',
          position: 'relative',
          justifyContent: 'center', 
          alignItems: 'center',
          minHeight: 350,
          minWidth: 500,
        }}
      >
        <Box sx={{position: 'relative', height: '90%'}}>
        <Calculator></Calculator>
        </Box>
      </Box>
    </>
  );
}

export default App;
