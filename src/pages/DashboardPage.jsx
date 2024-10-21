import React from 'react';
import Layout from '../components/Layout'; // Import the reusable layout
import { Typography, Grid, Box } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DashboardCard from '../components/DashboardCard'; // Import the reusable card component

const DashboardPage = () => {
  return (
    <Layout>
      <Box
        sx={{
          padding: 3,
          minHeight: '100vh', // Ensure full height for the dashboard
           // Consistent gradient background
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom textAlign="center" color="white">
          Dashboard Overview
        </Typography>
        <Grid container spacing={3}>
          {/* Total Users Card */}
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCard
              icon={PeopleIcon}
              label="Total Users"
              value="1,234"
              iconColor="primary.main"
            />
          </Grid>

          {/* Sales Card */}
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCard
              icon={AttachMoneyIcon}
              label="Sales"
              value="$12,345"
              iconColor="success.main"
            />
          </Grid>

          {/* Growth Card */}
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCard
              icon={TrendingUpIcon}
              label="Growth"
              value="15.7%"
              iconColor="warning.main"
            />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default DashboardPage;
