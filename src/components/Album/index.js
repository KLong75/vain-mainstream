// import from React
import React from 'react';
// import from mui
import Grid from '@mui/material/Unstable_Grid2/Grid2';
// import CSS
import './Album.css';
// import marquee
import Marquee from "react-fast-marquee";
// import components
import AlbumTracks from '../AlbumTracks';


const Album = () => {
  return (
    <section id='album-div'>


      <Grid container justifyContent='center'>
        <Grid item xs={12} justifyContent='center'>
        <h2 id='album-headline' className='font-effect-fire-animation'>"Your Likeness"</h2>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
        <h3 id='album-sub-headline'>aka "Please Give Me A Dollar For Health Insurance"</h3>
        </Grid>
      </Grid>
      
      <Marquee speed={40} gradientWidth={100} gradientColor={[0, 0, 255]} className='tour-marquee'>
          <span 
            className='album-marquee-text'> 
              Download the smash hit new album "Your Likeness" by Vain Mainstream today!
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span 
            className='album-marquee-text'> 
              <a href='https://www.patreon.com/' target='_blank' rel="noreferrer" className='marquee-patreon-link'>
                {/* Click to join The Mainstream on Patreon! */}
                The album is free but medical bills are not. Please click to give me a dollar for health insurance.
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
      </Marquee>
      <AlbumTracks />
    </section>
  );
};

export default Album;