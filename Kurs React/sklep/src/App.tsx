import * as React from 'react';
import EnhancedTable from './components/Table';
import Header from './components/Header';
import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#967bb6', 
    },
    secondary: {
      main: '#03a9f4', 
    },
    error: {
      main: '#ff9800', 
    },
    background: {
      default: '#f0f0f0', 
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#64B5F6', 
          color: '#fff', 
          borderRadius: 10, 
          '&:hover': {
            backgroundColor: '#2196F3', 
          },
        },
      },
    },
  },
  typography: {
    fontFamily: [
      'BlinkMacSystemFont',
    ].join(','),
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Header/>
      <EnhancedTable/>
    </ThemeProvider>
    </>
  )
}

export default App
