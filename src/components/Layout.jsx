// src/components/Layout.js

import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Box,
  Container,
} from '@mui/material';
import Sidenav from './Sidenav'; // Import the Sidenav component

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* AppBar (Top Navigation Bar) */}
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - 240px)`, ml: '240px' }} // Adjust for Sidenav width
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            My Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidenav (Sidebar) */}
      <Sidenav />

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
          width: `calc(100% - 240px)`, // Adjust for Sidenav width
          transition: 'margin-left 0.3s',
        }}
      >
        <Toolbar />
        <Container maxWidth="lg">
          {children} {/* This renders the page content passed into the Layout */}
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
