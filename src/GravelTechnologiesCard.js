import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import DashboardDevelopmentCard from './DashboardDevelopmentCard';
import DatabaseAdministrationCard from './DatabaseAdministrationCard';
import { common } from '@mui/material/colors';

// projectsArray[0].arcData
// projectsArray[0].arcData.datasets[0].data[0]

// fetch some data

const GravelTechnologiesCard = () => {
  // fetch data from backend (api layer)
  // Database -> API layer -> frontend -> makes the visual things
  let companiesArray = [
    {
      companyName: 'Gravel Technologies',
      color: '#D8FDDE',
      projectsArray: [
        {
          // workedHours: 200,
          // remainingHours: 250,
          projectName: 'Dashboard Development',
          arcData: {
            labels: ['Worked Hours', 'Remaining Hours'],
            datasets: [
              {
                data: [200, 250],
                backgroundColor: ['green', 'gray'],
                borderWidth: 0,
              },
            ],
          },
          barData: {
            labels: ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
            datasets: [
              {
                label: 'Hours Worked',
                backgroundColor: 'rgba(75,192,192,0.6)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.8)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: [40, 35, 50, 45, 30],
              },
            ],
          },
          barOptions: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              },
            },
          },
          arcOptions: {
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                callbacks: {
                  label: (context) => {
                    const label = context.label || '';
                    const value = context.raw;
                    return `${label}: ${value} hours`;
                  },
                },
              },
            },
            cutout: '70%', // Adjust this value to create the arc effect
            rotation: -90, // Rotate the chart to cut off the bottom
            circumference: 180, // Show only the top half
          }
        }, 
        {
          // workedHours: 211,
          // remainingHours:  110,
          projectName: 'Database Administration',
          arcData: {
            labels: ['Worked Hours', 'Remaining Hours'],
            datasets: [
              {
                data: [211, 110],
                backgroundColor: ['green', 'gray'],
                borderWidth: 0,
              },
            ],
          },
          barData: {
            labels: ['Frank', 'Grace', 'Heidi', 'Ivan', 'Judy'],
            datasets: [
              {
                label: 'Hours Worked',
                backgroundColor: 'rgba(75,192,192,0.6)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.8)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: [38, 42, 36, 50, 45],
              },
            ],
          },
          barOptions: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              },
            },
          },
          arcOptions: {
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                callbacks: {
                  label: (context) => {
                    const label = context.label || '';
                    const value = context.raw;
                    return `${label}: ${value} hours`;
                  },
                },
              },
            },
            cutout: '70%', // Adjust this value to create the arc effect
            rotation: -90, // Rotate the chart to cut off the bottom
            circumference: 180, // Show only the top half
          }
        }
      ],
    },
    {
      companyName: 'Montana State University',
      color: '#FFD0D3',
      projectsArray: [
        {
          // workedHours: 200,
          // remainingHours: 250,
          projectName: 'WebFOCUS Upgrade',
          arcData: {
            labels: ['Worked Hours', 'Remaining Hours'],
            datasets: [
              {
                data: [47, 400],
                backgroundColor: ['green', 'gray'],
                borderWidth: 0,
              },
            ],
          },
          barData: {
            labels: ['Mike', 'Billy', 'Adam'],
            datasets: [
              {
                label: 'Hours Worked',
                backgroundColor: 'rgba(75,192,192,0.6)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.8)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: [17, 10, 20],
              },
            ],
          },
          barOptions: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              },
            },
          },
          arcOptions: {
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                callbacks: {
                  label: (context) => {
                    const label = context.label || '';
                    const value = context.raw;
                    return `${label}: ${value} hours`;
                  },
                },
              },
            },
            cutout: '70%', // Adjust this value to create the arc effect
            rotation: -90, // Rotate the chart to cut off the bottom
            circumference: 180, // Show only the top half
          }
        },
      ],
    }
  ]

  // projectsArray.map(
  //   function (value) {
  //     return (value+1)
  //   }
  // )

  // make a new component generalizing a Project Card
  // Map over the data source to put the data in the card
  // render the results in the Gravel Technologies card


  
  return (
    <div>
      {companiesArray.map(
        function(company) {
          return(
            <Card style={{backgroundColor: company.color}}>
              <CardContent>
                <Typography variant="h5" component="div" style={{textDecoration: 'underline'}}>
                  {company.companyName}
                </Typography>
                <Grid container spacing={2} style={{ marginTop: 16 }}>
                  {company.projectsArray.map(
                    function(projectData) {
                      return (
                      <Grid item xs={12} md={6}>
                        <DashboardDevelopmentCard 
                          arcInfo={projectData.arcData} 
                          projectName={projectData.projectName}
                          arcParams={projectData.arcOptions} 
                          hoursWorked={projectData.arcData.datasets[0].data[0]} 
                          hoursRemaining={projectData.arcData.datasets[0].data[1]}
                          barInfo={projectData.barData}
                          barParams={projectData.barOptions} />
                      </Grid>
                      )
                    }
                  )}
                </Grid>
              </CardContent>
            </Card>
          )
        }
      )}
    </div>
  );
};

// companyArray = []
// // companyArray.map(x=>(thing))
// companyArray.map(function(company) {
//   return (stuff.map(function(projects){
//     return stuff2
//   }))
// })

// Array that contains all companies
// loop over that array to make each Company Card
// Within the company Card, loop over the projects to make a project card

export default GravelTechnologiesCard;