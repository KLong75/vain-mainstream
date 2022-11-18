// import from react
import React from 'react';
// import CSS
import './Header.css';
// import components
import Nav from '../Nav';
// import from MUI
import { Stack } from '@mui/material';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
// import images
import flyingV from '../../assets/images/blue_flying_v.png';
import blackGuitar from '../../assets/images/black_rock_guitar.png';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  // color: theme.palette.text.secondary,
}));



const Header = (props) => {
  return (
    <header>
      <Item elevation={12} className='header-paper'>


      <Stack direction='row' justifyContent='center'>
      <img src={flyingV} className='header-guitar' alt='flying v electric guitar'/>
      <h1 className='headline font-effect-fire-animation'>Vain Mainstream</h1>
      <img src={blackGuitar} className='header-guitar' alt='black electric guitar'/>
      </Stack>
      <Nav
        setCurrentPage={props.setCurrentPage}
        currentPage={props.currentPage}
      />
      </Item>
    </header>
  );
};

export default Header;