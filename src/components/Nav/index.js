import React from 'react';

import { Stack } from '@mui/system';

const Nav = () => {
  return (
    <nav className='nav'>
     
      <Stack direction='row' spacing={6} className='nav-stack'>
        
        <li className='nav-link'>The Tour</li>
        <li className='nav-link'>Join the Mainstream on Patreon</li>
        <li className='nav-link'>The Album</li>
        
      </Stack>
      
    </nav>
  );
};

export default Nav;