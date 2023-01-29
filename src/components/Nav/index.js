// import from React
import React from 'react';

// import CSS
import './Nav.css';

// import from MUI
import Grid from '@mui/material/Unstable_Grid2/Grid2';


const Nav = (props) => {
  return (
    <nav>
      <ul>
        <Grid container spacing={1}> 
          <Grid xs={4}>
            <li  
              onClick={() => { props.setCurrentPage('Mainstream')}} 
              className={props.currentPage==='Mainstream' ? 'navActive nav-list-item' : 'nav-list-item'}>
              Radio
            </li>
          </Grid>
          <Grid xs={4}> 
            <li 
              onClick={() => { props.setCurrentPage('Album')}} 
              className={props.currentPage==='Album' ? 'navActive nav-list-item' : 'nav-list-item'}>
              Audio
            </li>
          </Grid>
          <Grid xs={4}> 
            <li  
              onClick={() => { props.setCurrentPage('Tour')}} 
              className={props.currentPage==='Tour' ? 'navActive nav-list-item' : 'nav-list-item'}>
              Video
            </li>
          </Grid>
        </Grid> 
      </ul>
    </nav>
  );
};

export default Nav;