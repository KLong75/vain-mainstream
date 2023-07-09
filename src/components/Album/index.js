// import from React
import React from 'react';

// import from mui
import Grid from '@mui/material/Unstable_Grid2/Grid2';

// import CSS
import './Album.css';

// import components
import AlbumTracks from '../AlbumTracks';

const Album = () => {
  return (
    <section id='album-div'>
      <Grid container justifyContent='center'>
        <Grid xs={12} >
          <h2 id='album-headline' className='font-effect-fire-animation'>Your Likeness</h2>
        </Grid>
      </Grid>
      <Grid container justifyContent='center'>
        <Grid xs={12} justifyContent='center'>
          <p id='album-headline-plain-text' className='font-effect-fire-animation'>or</p>
        </Grid>
      </Grid>
      <Grid container>
        <Grid xs={12}>
          <a href='https://www.patreon.com/vainmainstream' target='_blank' rel="noreferrer" className='album-patreon-link'>  
            <h3 id='album-sub-headline' className='font-effect-fire-animation'>Please Give Me a Dollar</h3>
            <h3 id='album-sub-headline' className='font-effect-fire-animation'>for Health Insurance</h3>
          </a>
        </Grid>
      </Grid>
      
      <AlbumTracks />
    </section>
  );
};

export default Album;