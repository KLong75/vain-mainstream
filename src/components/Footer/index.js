// import from React
import React from 'react';
import { useState } from 'react';

// import components
import ShareComponent from '../ShareComponent';
// import SEO from '../SEO';

// import from mui
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

// import CSS
import './Footer.css';


const Footer = () => {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <footer>
      <ShareComponent />
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <span className='follow-text'>Follow:</span>
        </Grid>
        <Grid item xs={4}>
          <a 
            href='https://www.youtube.com/@VainMainstream?sub_confirmation=1' 
            target='_blank' 
            rel='noreferrer' 
            className='social-media-follow-links'
            aria-label='Link to Vain Mainstream YouTube'>
            <YouTubeIcon/>
          </a>
        </Grid>
        <Grid item xs={4}>
          <a 
            href='https://www.instagram.com/vainmainstream' 
            target='_blank' 
            rel='noreferrer' 
            className='social-media-follow-links' 
            aria-label='Link to Vain Mainstream Instagram'>
            <InstagramIcon/>
          </a>  
        </Grid>
        <Grid item xs={4}>
          <a 
            href='https://twitter.com/vainmainstream' 
            target='_blank' 
            rel='noreferrer' 
            className='social-media-follow-links' 
            aria-label='Link to Vain Mainstream Twitter'>
            <TwitterIcon/>
          </a>
        </Grid>
        <Grid item xs={12} >
          <p className='font-effect-fire-animation copywrite'>©2023 Vain Mainstream</p>
          <p>design and development by <a 
              href='https://kevinlong.dev/'
              target='_blank' 
              rel='noreferrer'
              className={isHovering ? 'font-effect-fire-animation website-credit' : 'website-credit'}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
             >kevinlong.dev
             </a>
          </p>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;