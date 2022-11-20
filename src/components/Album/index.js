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


      <Grid container justifyContent='center' xs={12}>
        <Grid item>
        <h2 id='album-headline'>"Your Likeness"</h2>
        </Grid>
      </Grid>

      <Grid container justifyContent='center' xs={12}>
        <Grid item>
        <h3>by Vain Mainstream</h3>
        </Grid>
      </Grid>
      
      <Marquee speed={40} gradientWidth={100} gradientColor={[0, 0, 255]} className='now-playing-marquee'>
          <span 
            className='album-marquee-text'> 
              Download the smash hit new album "Your Likeness" by Vain Mainstream today!
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span 
            className='album-marquee-text'> 
              <a href='https://www.patreon.com/' target='_blank' rel="noreferrer" className='marquee-patreon-link'>
                Click to join The Mainstream on Patreon!
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </Marquee>
      <AlbumTracks />
    </section>
  );
};

export default Album;