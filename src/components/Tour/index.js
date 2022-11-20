// import from React
import React from 'react';
// import video gallery
import TourVideoGallery from '../TourVideoGallery';
// import from mui
import Grid from '@mui/material/Unstable_Grid2/Grid2';
// import marquee
import Marquee from "react-fast-marquee";
// import CSS
import './Tour.css';

const Tour = () => {
  return (
    <div id='tour-div'>


      <Grid container>
        <Grid item xs={12}>
        <h2 id='tour-headline'>The Life Epectancy Tour</h2>
        </Grid>
      </Grid>

      <Grid container  >
        <Grid item xs={12} >
          <h3>2022 - 2023</h3>
        </Grid>
      </Grid>

    
      <Marquee speed={40} gradientWidth={100} gradientColor={[0, 0, 255]} className='now-playing-marquee'>
          <span 
            className='tour-marquee-text'> 
              Download the smash hit new album "Your Likeness" by Vain Mainstream today!
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span 
            className='tour-marquee-text'> 
              <a href='https://www.patreon.com/' target='_blank' rel="noreferrer" className='marquee-patreon-link'>
                Click to join The Mainstream on Patreon!
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </Marquee>
      <p>Coming soon to a town probably nowhere near you! lorem ipsum blah blah rock n roll fdfjaskffgfdgfsdgsfdgsdfgsdfgsfdgsdfgsdfgsdfgdg</p>

      <TourVideoGallery />



      <iframe width="560" height="315" src="https://www.youtube.com/embed/5XVP03JmRaI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>




    </div>
  );
};

export default Tour;