import React from 'react';

import { Stack } from '@mui/system';
// import { Link } from '@mui/material';

const Nav = (props) => {
  return (
    <nav className='nav'>
      <ul>
        <Stack direction='row' spacing={6} justifyContent='center' className='nav-stack'>
          <li 
            id='nav-list-item' 
            onClick={() => { props.setCurrentPage('Mainstream')}} 
            className={props.setCurrentPage==='Mainstream'}>
            Mainstream Radio
          </li>
          <li 
            id='nav-list-item' 
            onClick={() => { props.setCurrentPage('Tour')}} 
            className={props.setCurrentPage==='Tour'}>
            The Tour
          </li>
          <li 
            id='nav-list-item'
            onClick={() => { props.setCurrentPage('CallToAction')}} 
            className={props.setCurrentPage==='CallToAction'}>
            Join the Mainstream on Patreon
          </li>
          <li 
            id='nav-list-item'
            onClick={() => { props.setCurrentPage('Album')}} 
            className={props.setCurrentPage==='Album'}>
            The Album
          </li>
        </Stack>
      </ul>
    </nav>
  );
};

export default Nav;