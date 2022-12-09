// import from React
import React from 'react';
// import video gallery
import TourVideoGallery from '../TourVideoGallery';
// import from mui
import Grid from '@mui/material/Unstable_Grid2/Grid2';
// import marquee
// import Marquee from "react-fast-marquee";
// import CSS
import './Tour.css';

const Tour = () => {
  return (
    <div id='tour-div'>
      <Grid container>
        <Grid item xs={12}>
        <h2 id='tour-headline' className='font-effect-fire-animation tour-headline'>Life Expectancy Tour</h2>
        </Grid>
      </Grid>

      <Grid container  >
        <Grid item xs={12}>
        <h3 className='font-effect-fire-animation tour-date-sub-headline tour-dates'>December 2022 - May 2023</h3>
        </Grid>
      </Grid>

      <Grid container  >
        <Grid item xs={12}>
        <p className='tour-description-text font-effect-fire-animation'>Coming Soon to a town probably nowhere near you!</p>
        </Grid>
      </Grid>

      {/* <Marquee speed={40} gradientWidth={100} gradientColor={[0, 0, 255]} className='tour-marquee'>
          <span 
            className='tour-marquee-text'> 
              Download the smash hit new album "Your Likeness" by Vain Mainstream today!
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span 
            className='tour-marquee-text'> 
              <a href='https://www.patreon.com/vainmainstream' target='_blank' rel="noreferrer" className='marquee-patreon-link'>
              The album is free but medical bills are not. Please click to give me a dollar for health insurance.
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
      </Marquee> */}
    
      <TourVideoGallery />
    </div>
  );
};

export default Tour;