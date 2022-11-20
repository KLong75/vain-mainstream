// import from React
import React from 'react';
// import CSS
import './Nav.css';
// import from MUI
// import { Stack } from '@mui/system';
import Grid from '@mui/material/Unstable_Grid2/Grid2';


const Nav = (props) => {
  return (
    <nav>
      <ul>
        <Grid container> 
          <Grid item xs={3}> 
            <li 
              id='nav-list-item' 
              onClick={() => { props.setCurrentPage('Mainstream')}} 
              className={props.currentPage==='Mainstream' ? 'navActive' : ''}>
              Mainstream Radio
            </li>
          </Grid>
          <Grid item xs={3}> 
            <li 
              id='nav-list-item'
              onClick={() => { props.setCurrentPage('Album')}} 
              className={props.currentPage==='Album' ? 'navActive' : ''}>
              The Album
            </li>
          </Grid>
          <Grid item xs={3}> 
            <li 
              id='nav-list-item' 
              onClick={() => { props.setCurrentPage('Tour')}} 
              className={props.currentPage==='Tour' ? 'navActive' : ''}>
              The Tour
            </li>
          </Grid>
          <Grid item xs={3}>

            {/* <li 
              id='nav-list-item'
              onClick={() => { props.setCurrentPage('CallToAction')}} 
              className={props.currentPage==='CallToAction' ? 'navActive' : ''}>
              Join the Mainstream
            </li> */}

            <a href='https://www.patreon.com/' target='_blank' rel="noreferrer" className='nav-patreon-link'>
              <li id='nav-list-item'>
              Join the Mainstream
              </li>
            </a>
          </Grid>
        </Grid> 
      </ul>
    </nav>
  );
};

export default Nav;