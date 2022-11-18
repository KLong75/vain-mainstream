// import from React
import React from 'react';
// import CSS
import './TheMainstream.css';
// import from mui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
//  import scrolling marquee
import Marquee from "react-fast-marquee";

// import react-h5 audio player
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

// import images
// import boombox from '../../assets/images/pixel_boombox_cropped.png';
import speakers from '../../assets/images/two_speakers.png';
import worldOnFire from '../../assets/images/pixel_world_on_fire_cropped.png';
import drums from '../../assets/images/pixel_drums_big.png'
// import audio
// import cultOfP from '../../assets/audio/cult_of_personality.mp3';
// import dancingQ from '../../assets/audio/DQ_no_vox.mp3';
// import basketCase from '../../assets/audio/bst_no_vox.mp3';


// const playList = [cultOfP, dancingQ, basketCase]

const playList = [
  {
    title: 'Cult of Personality',
    src: 'cult_of_personality.mp3'
  },
  {
      title: 'Dancing Queen',
      src: 'DQ_no_vox.mp3'
  },
  {
      title: 'Basket Case',
      src: 'bst_no_vox.mp3'
  },
]

const selectRandom = (array) => {
  let randomIndex = Math.floor(Math.random() * array.length); 
  let randomElement = array[randomIndex];
  return randomElement;
}

const randomTrack = selectRandom(playList);
console.log(randomTrack);
console.log(randomTrack.src)

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  // color: theme.palette.text.secondary,
}));

const Mainstream = () => {
  return (
    <div id='mainstream-div'>
      
        {/* <h2>Mainstream Radio</h2> */}
         
        <Marquee speed={40} gradientWidth={200} gradientColor={[0, 0, 255]} className='now-playing-marquee'>
          <h2 className='marquee-text'>Now Playing on Mainstream Radio: "{randomTrack.title}" by Vain Mainstream </h2>
        </Marquee>
        <Box sx={{ flexGrow: 1 }}>

        

        <Item className='mainstream-paper' elevation={12}>

          <Grid container justifyContent='center'>
            <img item src={worldOnFire} alt='pixelated burning earth'  id='world-on-fire' />
          </Grid>

          <Grid container spacing={1} disableEqualOverflow>
            <Grid item xs={3} >
              <img src={speakers} alt='pixelated loudspeakers' id='speakers-img' />
            </Grid>
            <Grid item xs={6} >
              <img src={drums} alt='pixelated boombox' id='' className='drums' />
            </Grid>
            <Grid item xs={3} >
            <img src={speakers} alt='pixelated loudspeakers' id='speakers-img' />
            </Grid>
          </Grid>

          <Grid item>
            {/* <audio id='music-player' controls loop >
              <source src={require(`../../assets/audio/${randomTrack.src}`)} ></source>
            </audio> */}
            <AudioPlayer
              item
              autoPlay
              loop 
              className='react-h5-audio-player' 
              src={require(`../../assets/audio/${randomTrack.src}`)} 
            />
          </Grid>
          </Item>
        </Box>
        
    </div>
  );
};

export default Mainstream;