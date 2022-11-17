// import from react
import React from 'react';
// import CSS
import './Header.css';
// import components
import Nav from '../Nav';
// import from MUI
import { Stack } from '@mui/material';
// import images
import flyingV from '../../assets/images/blue_flying_v.png';
import blackGuitar from '../../assets/images/black_rock_guitar.png';

const Header = (props) => {
  return (
    <header>
      <Stack direction='row' justifyContent='center'>
      <img src={flyingV} className='header-guitar' alt='flying v electric guitar'/>
      <h1 className='headline font-effect-fire-animation'>Vain Mainstream</h1>
      <img src={blackGuitar} className='header-guitar' alt='black electric guitar'/>
      </Stack>
      <Nav
        setCurrentPage={props.setCurrentPage}
        currentPage={props.currentPage}
      />
    </header>
  );
};

export default Header;