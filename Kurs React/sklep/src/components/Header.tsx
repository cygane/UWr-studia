import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import reactLogo from '../assets/react.svg'



export default function Header()  {
  const username = 'Nazwa zalogowanego użytkownika';

  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
            <Typography>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" style={{ width: '40px', height: 'auto'}} />
                </a>
            </Typography>
            <Tooltip title={username} arrow>
            <IconButton color="inherit" edge="end" aria-label="account">
                <AccountCircleIcon />
            </IconButton>
            </Tooltip>
        </Toolbar>
        </AppBar>
    </Box>
  );
};


