// import from react
import React from 'react';

// import CSS
import './Header.css';

// import components
import Nav from '../Nav';

// import from MUI
import Grid from '@mui/material/Unstable_Grid2/Grid2';
// import { Stack } from '@mui/material'; 
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// import images
// import flyingV from '../../assets/images/blue_flying_v.png';
// import blackGuitar from '../../assets/images/black_rock_guitar.png';
// import mohawkSkull from '../../assets/images/mohawk_skull.png';
import worldOnFireGif from '../../assets/images/world_on_fire.gif';

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  // color: theme.palette.text.secondary,
}));



const Header = (props) => {
  return (
    <header>
      <Item elevation={12} className='header-paper'>

        <Grid container >

          <Grid item xs={3}>
            <img src={worldOnFireGif} className='header-earth' alt='vain mainstream logo'/>
          </Grid>
          <Grid item xs={6}>
            <h1 className='header-headline font-effect-fire-animation'>Vain Mainstream</h1>
          </Grid>
          <Grid item xs={3}>
            <img src={worldOnFireGif} className='header-earth' alt='vain mainstream logo'/>
          </Grid>

        </Grid>

        <Grid container >

          
          <Grid item xs={12}>
            <a 
              href='https://www.patreon.com/vainmainstream' target='_blank' rel="noreferrer"      className='header-patreon-link'>
              <h2 
                className='header-sub-headline font-effect-fire-animation'
              >Click Here To Give Me A Dollar
              </h2>
            </a>
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