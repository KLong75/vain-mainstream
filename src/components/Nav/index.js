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
        <Grid container spacing={1}> 
          <Grid item xs={4}> 
            <li 
              id='nav-list-item' 
              onClick={() => { props.setCurrentPage('Mainstream')}} 
              className={props.currentPage==='Mainstream' ? 'navActive' : ''}>
              Radio
            </li>
          </Grid>
          <Grid item xs={4}> 
            <li 
              id='nav-list-item'
              onClick={() => { props.setCurrentPage('Album')}} 
              className={props.currentPage==='Album' ? 'navActive' : ''}>
              Audio
            </li>
          </Grid>
          <Grid item xs={4}> 
            <li 
              id='nav-list-item' 
              onClick={() => { props.setCurrentPage('Tour')}} 
              className={props.currentPage==='Tour' ? 'navActive' : ''}>
              Video
            </li>
          </Grid>
        </Grid> 
      </ul>
    </nav>
  );
};

export default Nav;