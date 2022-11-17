import React from 'react';

// import from mui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Marquee from "react-fast-marquee";

// import react-h5 audio player
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

// import images
import boombox from '../../assets/images/pixel_boombox_cropped.png';
import speakers from '../../assets/images/two_speakers.png';
import worldOnFire from '../../assets/images/pixel_world_on_fire_cropped.png';

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

const Mainstream = () => {
  return (
    <div id='mainstream-div'>
      
        {/* <h2>Mainstream Radio</h2> */}
        <Marquee speed={40} gradientWidth={200} gradientColor={[0, 0, 255]} className='now-playing-marquee'>
          <h2 className='marquee-text'>Now Playing on Mainstream Radio: "{randomTrack.title}" by Vain Mainstream </h2>
        </Marquee>
        <Box sx={{ flexGrow: 1 }}>

          <Grid container justifyContent='center'>
            <img src={worldOnFire} alt='pixelated burning earth'  id='world-on-fire' />
          </Grid>

          <Grid container spacing={1} disableEqualOverflow>
            <Grid xs={3} >
              <img src={speakers} alt='pixelated loudspeakers' id='speakers-img' />
            </Grid>

            <Grid xs={6} >
              <img src={boombox} alt='pixelated boombox' id='boombox-img' />
            </Grid>

            <Grid xs={3} >
            <img src={speakers} alt='pixelated loudspeakers' id='speakers-img' />
            </Grid>
          </Grid>

          <Grid container justifyContent='center'>
            {/* <audio id='music-player' controls loop >
              <source src={require(`../../assets/audio/${randomTrack.src}`)} ></source>
            </audio> */}

            <AudioPlayer 
              loop 
              className='react-h5-audio-player' 
              src={require(`../../assets/audio/${randomTrack.src}`)} 
            />

          </Grid>

        </Box>
    </div>
  );
};

export default Mainstream;