import React from 'react';

import { Stack } from '@mui/system';
// import { Link } from '@mui/material';

const Nav = () => {
  return (
    <nav className='nav'>
      <Stack direction='row' spacing={6} justifyContent='center' className='nav-stack'>
        <li className='nav-link'><a href='#tour-headline'>The Tour</a></li>
        <li className='nav-link'><a href='#patreon-headline'>Join the Mainstream on Patreon</a></li>
        <li className='nav-link'><a href='#album-headline'>The Album</a></li>
      </Stack>
    </nav>
  );
};

export default Nav;