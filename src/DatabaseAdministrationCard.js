import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Registering the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);


// const barData = {
//   labels: ['Frank', 'Grace', 'Heidi', 'Ivan', 'Judy'],
//   datasets: [
//     {
//       label: 'Hours Worked',
//       backgroundColor: 'rgba(75,192,192,0.6)',
//       borderColor: 'rgba(75,192,192,1)',
//       borderWidth: 1,
//       hoverBackgroundColor: 'rgba(75,192,192,0.8)',
//       hoverBorderColor: 'rgba(75,192,192,1)',
//       data: [38, 42, 36, 50, 45],
//     },
//   ],
// };


// const barOptions = {
//   indexAxis: 'y',
//   responsive: true,
//   maintainAspectRatio: false,
// };

const DatabaseAdministrationCard = ({arcInfo, arcParams, hoursWorked, hoursRemaining, barInfo, barParams}) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="div">
          Database Administration
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4} style={{ display: 'flex', alignItems: 'flex-start', height: '200px' }}>
            <div style={{ marginTop: '20px', width: '100%', height: '100%' }}>
              <Doughnut data={arcInfo} options={arcParams} />
              <Typography variant="h6" component="div" align='center' style={{position: 'relative', marginTop: '-6rem', fontWeight: 'bold', fontSize: '2rem'}}>
                {(hoursWorked / (hoursWorked + hoursRemaining) * 100).toFixed(0)}%
              </Typography>
              <Typography variant="h6" component="div" align='center' style={{color: 'gray', fontSize: '1rem'}}>
                {hoursWorked}/{hoursWorked+hoursRemaining} Hours
              </Typography>
            </div>
          </Grid>
           <Grid item xs={8}>
            <div style={{ height: '400px' }}>
              <Bar data={barInfo} options={barParams} />
            </div>
          </Grid> 
        </Grid>
      </CardContent>
    </Card>
  );
};

export default DatabaseAdministrationCard;