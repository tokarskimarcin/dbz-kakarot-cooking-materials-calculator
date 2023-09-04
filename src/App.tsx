import './App.css';
import Calculator from './components/calculator/Calculator';
import {Box, Grid} from '@mui/material';

function App() {
  return (
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
  );
}

export default App;
