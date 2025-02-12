import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function MyAppBar() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Typography variant="h3" component="div">
          ポケモン図鑑
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

