// import from React
import React from 'react';

// import from mui
import Grid from '@mui/material/Unstable_Grid2/Grid2';

// import CSS
import './Album.css';

// import marquee
// import Marquee from "react-fast-marquee";

// import components
import AlbumTracks from '../AlbumTracks';


const Album = () => {
  return (
    <section id='album-div'>
      <Grid container justifyContent='center'>
        <Grid item xs={12} justifyContent='center'>
          <h2 id='album-headline' className='font-effect-fire-animation'>Your Likeness</h2>
        </Grid>
      </Grid>
      <Grid container justifyContent='center'>
        <Grid item xs={12} justifyContent='center'>
          <p id='album-headline-plain-text' className='font-effect-fire-animation'>or</p>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <a href='https://www.patreon.com/vainmainstream' target='_blank' rel="noreferrer" className='album-patreon-link'>  
            <h3 id='album-sub-headline' className='font-effect-fire-animation'>Please Give Me A Dollar</h3>
            <h3 id='album-sub-headline' className='font-effect-fire-animation'>For Health Insurance</h3>
          </a>
        </Grid>
      </Grid>
      
      {/* <Marquee speed={40} gradientWidth={100} gradientColor={[0, 0, 255]} className='tour-marquee'>
          <span 
            className='album-marquee-text'> 
              Download tracks from the new album "Your Likeness" by Vain Mainstream today! A new track will be added each week of the Life Expectancy Tour until all 25 tracks have been revealed.
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span 
            className='album-marquee-text'> 
              <a href='https://www.patreon.com/vainmainstream' target='_blank' rel="noreferrer" className='marquee-patreon-link'>
                The album is free but medical bills are not. Please click to give me a dollar for health insurance.
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
      </Marquee> */}
      
      <AlbumTracks />
    </section>
  );
};

export default Album;