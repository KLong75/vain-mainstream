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
          <a href='https://www.youtube.com/@VainMainstream' target='_blank' rel='noreferrer' className='social-media-links' aria-label='Link to Vain Mainstream YouTube'>
            <YouTubeIcon/>
          </a>
        </Grid>
        <Grid item xs={4}>
          <a href='https://www.instagram.com/vainmainstream/?hl=en' target='_blank' rel='noreferrer' className='social-media-links' aria-label='Link to Vain Mainstream Instagram'>
            <InstagramIcon/>
          </a>  
        </Grid>
        <Grid item xs={4}>
          <a href='https://twitter.com/vainmainstream' target='_blank' rel='noreferrer' className='social-media-links' aria-label='Link to Vain Mainstream Twitter'>
            <TwitterIcon/>
          </a>
        </Grid>
        <Grid item xs={12} >
          <p>©2022 Vain Mainstream</p>
          <p className=''>website by <a href='https://kevinlong.dev/'target='_blank' rel='noreferrer'className='website-credit'>kevinlong.dev</a></p>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;