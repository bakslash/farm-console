import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const DashboardCard = ({ icon: Icon, label, value, iconColor }) => {
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', padding: 2, boxShadow: 3, borderRadius: 2 }}>
      <Box sx={{ color: iconColor, mr: 2 }}>
        <Icon fontSize="large" />
      </Box>
      <CardContent>
        <Typography variant="h5">{label}</Typography>
        <Typography variant="body1">{value}</Typography>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
