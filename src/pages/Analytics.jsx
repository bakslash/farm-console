import React from 'react';
import Layout from './Layout'; // Import the reusable layout
import { Typography } from '@mui/material';

const AnalyticsPage = () => {
  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Analytics
      </Typography>
      {/* Content specific to the Analytics page */}
      <Typography variant="body1">
        Analytics data goes here.
      </Typography>
    </Layout>
  );
};

export default AnalyticsPage;
