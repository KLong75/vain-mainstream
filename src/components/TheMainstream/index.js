import React from 'react';

// import { Stack } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

// import MusicPlayer from '../MusicPlayer';
// import images
import boombox from '../../assets/images/pixel_boombox_cropped.png';
import speakers from '../../assets/images/two_speakers.png';
import worldOnFire from '../../assets/images/pixel_world_on_fire.png';

// import audio
import cultOfP from '../../assets/audio/cult_of_personality.mp3';
import dancingQ from '../../assets/audio/DQ_no_vox.mp3';
import basketCase from '../../assets/audio/bst_no_vox.mp3';

const tracks = [cultOfP, dancingQ, basketCase]

const selectRandom = (array) => {
  let randomIndex = Math.floor(Math.random() * array.length); 
  let randomElement = array[randomIndex];
  return randomElement;
}

const randomTrack = selectRandom(tracks);
console.log(randomTrack);

const Mainstream = () => {
  return (
    <div id='mainstream-div'>
      
        <h2>Mainstream Radio</h2>
        <Box sx={{ flexGrow: 1 }} >

          <Grid container justifyContent='center'>
            <img src={worldOnFire} alt='pixelated burning earth'  id='world-on-fire' />
          </Grid>

          <Grid container spacing={2} >
            <Grid xs={3}>
              <img src={speakers} alt='pixelated loudspeakers' id='speakers-img' />
            </Grid>

            <Grid xs={6}>
              <img src={boombox} alt='pixelated boombox' id='boombox-img' />
            </Grid>

            <Grid xs={3}>
            <img src={speakers} alt='pixelated loudspeakers' id='speakers-img' />
            </Grid>
          </Grid>

          <Grid container justifyContent='center' >
            <audio id='music-player' controls loop >
              <source src={randomTrack}></source>
            </audio>
          </Grid>

        </Box>
    </div>
  );
};

export default Mainstream;