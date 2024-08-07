import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import DashboardDevelopmentCard from './DashboardDevelopmentCard';
import DatabaseAdministrationCard from './DatabaseAdministrationCard';

const GravelTechnologiesCard = () => {
  return (
    <Card style={{backgroundColor: '#D8FDDE'}}>
      <CardContent>
        <Typography variant="h5" component="div" style={{textDecoration: 'underline'}}>
          Gravel Technologies
        </Typography>
        <Grid container spacing={2} style={{ marginTop: 16 }}>
          <Grid item xs={12} md={6}>
            <DashboardDevelopmentCard />
          </Grid>
          <Grid item xs={12} md={6}>
            <DatabaseAdministrationCard />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default GravelTechnologiesCard;