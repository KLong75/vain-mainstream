// import from react
import React from 'react';

// import CSS
import './Header.css';

// import components
import Nav from '../Nav';

// import from MUI
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// import images
import worldOnFireGif from '../../assets/images/world_on_fire.gif';


const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
}));

const Header = (props) => {
  return (
    <header>
      <Item elevation={12} className='header-paper'>
        <Grid container >
          <Grid xs={3}>
            <img src={worldOnFireGif} className='header-earth' alt='vain mainstream logo'/>
          </Grid>
          <Grid xs={6}>
            <h1 className='header-headline font-effect-fire-animation'>Vain Mainstream</h1>
          </Grid>
          <Grid xs={3}>
            <img src={worldOnFireGif} className='header-earth' alt='vain mainstream logo'/>
          </Grid>
        </Grid>
      <Nav
        setCurrentPage={props.setCurrentPage}
        currentPage={props.currentPage}
      />
      </Item>
    </header>
  );
};

export default Header;