// import from React
import React from 'react';

// import video gallery component
import TourVideoGallery from '../TourVideoGallery';

// import from mui
import Grid from '@mui/material/Unstable_Grid2/Grid2';

// import CSS
import './Tour.css';

const Tour = () => {
  return (
    <div id='tour-div'>
      <Grid container>
        <Grid xs={12}>
        <h2 id='tour-headline' className='font-effect-fire-animation tour-headline'>Life Expectancy Tour</h2>
        </Grid>
      </Grid>

      <Grid container  >
        <Grid xs={12}>
        <h3 className='font-effect-fire-animation tour-date-sub-headline tour-dates'>December 2022 - July 2023</h3>
        </Grid>
      </Grid>

      <Grid container  >
        <Grid xs={12}>
        <p className='tour-description-text font-effect-fire-animation'>Coming Soon to a town probably nowhere near you!</p>
        </Grid>
      </Grid>
    
      <TourVideoGallery />
    </div>
  );
};

export default Tour;