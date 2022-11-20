// import from React
import React from 'react';

// import from mui
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

// import CSS
import './Footer.css';


const Footer = () => {
  return (
    <footer>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <a href='https://www.youtube.com/@VainMainstream' target='_blank' rel='noreferrer' className='social-media-links'>
            <YouTubeIcon/>
          </a>
        </Grid>
        <Grid item xs={4}>
          <a href='https://www.instagram.com/vainmainstream/?hl=en' target='_blank' rel='noreferrer' className='social-media-links'>
            <InstagramIcon/>
          </a>  
        </Grid>
        <Grid item xs={4}>
          <a href='https://twitter.com/vainmainstream' target='_blank' rel='noreferrer' className='social-media-links'>
            <TwitterIcon/>
          </a>
        </Grid>
        <Grid item xs={12} >
          ©2022 Vain Mainstream
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;