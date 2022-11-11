import React from 'react';

import Nav from '../Nav';

import { Stack } from '@mui/material';

import flyingV from '../../assets/images/blue_flying_v.png';
import blackGuitar from '../../assets/images/black_rock_guitar.png';

const Header = () => {
  return (
    <header>
      <Stack direction='row' justifyContent='center'>
      <img src={flyingV} className='header-guitar' alt='flying v electric guitar'/>
      <h1 className='headline'>Vain Mainstream</h1>
      <img src={blackGuitar} className='header-guitar' alt='black electric guitar'/>
      </Stack>
      <Nav></Nav>
    </header>
  );
};

export default Header;