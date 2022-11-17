// import from React
import React from 'react';
// import CSS
import './Nav.css';
// import from MUI
import { Stack } from '@mui/system';


const Nav = (props) => {
  return (
    <nav>
      <ul>
        <Stack direction='row' spacing={6} justifyContent='center' className='nav-stack'>
          <li 
            id='nav-list-item' 
            onClick={() => { props.setCurrentPage('Mainstream')}} 
            className={props.currentPage==='Mainstream' ? 'navActive' : ''}>
            Mainstream Radio
          </li>
          <li 
            id='nav-list-item'
            onClick={() => { props.setCurrentPage('Album')}} 
            className={props.currentPage==='Album' ? 'navActive' : ''}>
            The Album
          </li>
          <li 
            id='nav-list-item' 
            onClick={() => { props.setCurrentPage('Tour')}} 
            className={props.currentPage==='Tour' ? 'navActive' : ''}>
            The Tour
          </li>
          <li 
            id='nav-list-item'
            onClick={() => { props.setCurrentPage('CallToAction')}} 
            className={props.currentPage==='CallToAction' ? 'navActive' : ''}>
            Join the Mainstream
          </li>
          
        </Stack>
      </ul>
    </nav>
  );
};

export default Nav;