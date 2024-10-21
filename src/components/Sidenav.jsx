// src/components/Sidenav.js

import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const drawerWidth = 240;

const Sidenav = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Define the routes for navigation
  const handleNavigation = (route) => {
    // Map the text to the corresponding route
    const routes = {
      dashboard: '/dashboard',
      analytics: '/analytics',
      products: '/products',
      users: '/users',
      settings: '/settings',
    };
    navigate(routes[route]); // Navigate to the corresponding route
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          color: 'white',
          background: '#6b29c2', // Background color
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {['Dashboard', 'Analytics', 'Products', 'Users', 'Settings'].map((text) => (
            <ListItem 
              button 
              key={text} 
              onClick={() => handleNavigation(text.toLowerCase())} // Navigate on click
              sx={{ cursor: 'pointer' }} // Change cursor to pointer
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidenav;
