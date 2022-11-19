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
// import drums from '../../assets/images/pixel_drums_big.png';
import drumSkeleton from '../../assets/images/pixel_drums_headless_drummer2.png';
import mohawkSkull from '../../assets/images/mohawk_skull.png';
// import skeletonNoSkull from '../../assets/images/pixel_skeleton_no_head.png';
import guitaristBody from '../../assets/images/guitarist_no_arms_no_head.png';
// import guitaristNoArm from '../../assets/images/pixel_guitarist_no_arm.png';
import guitaristRightArm from '../../assets/images/guitarist_right_arm.png'
import guitaristLeftArm from '../../assets/images/guitarist_left_arm_straight.png'
import pixelSkull from '../../assets/images/pixel_skull.png';
import flyingV from '../../assets/images/blue_flying_v.png';
// import blackGuitar from '../../assets/images/black_rock_guitar.png';

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
         
        <Marquee speed={40} gradientWidth={100} gradientColor={[0, 0, 255]} className='now-playing-marquee'>
          <h2 
            className='marquee-text'> 
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Now Playing on Mainstream Radio: "{randomTrack.title}" by Vain Mainstream
          </h2>
        </Marquee>

        <Box sx={{ flexGrow: 1 }}>

          <Item className='mainstream-paper' elevation={12}>

            <Grid container spacing={1} disableEqualOverflow>

              <Grid item xs={3} >
                <img src={pixelSkull} className='guitarist-skull' alt='pixelated skull'/>
              </Grid>

              <Grid item xs={6}>
              <div></div>
              </Grid>

              <Grid item xs={3} >
                <img src={pixelSkull} className='guitarist-skull' alt='pixelated skull'/>
              </Grid>
            </Grid>
          
            <Grid container spacing={1} disableEqualOverflow>

              <Grid item xs={3} >
                  <img src={guitaristBody} alt='pixelated skeleton' className='skeleton-guitarist' />
              </Grid>


              <Grid item xs={6}>
                <img item src={worldOnFire} alt='pixelated burning earth'  id='world-on-fire' />
              </Grid>

              <Grid item xs={3} >
                <img src={guitaristBody} alt='pixelated skeleton' className='skeleton-guitarist' />
              </Grid>

            </Grid>

            <Grid container spacing={1} disableEqualOverflow>

              <Grid item xs={3} >
                <img src={guitaristRightArm} className='guitarist-right-arm' alt='skeleton arm playing guitar'/>
              </Grid>

              <Grid item xs={6}>
                <div></div>
              </Grid>

               <Grid item xs={3} >
               <img src={guitaristRightArm} className='guitarist-right-arm' alt='skeleton arm playing guitar'/>
              </Grid>

            </Grid>

            <Grid container spacing={1} disableEqualOverflow>

              <Grid item xs={3} >
                <img src={guitaristLeftArm} className='guitarist-left-arm' alt='skeleton arm playing guitar'/>
              </Grid>

              <Grid item xs={6}>
                <div></div>
              </Grid>

              <Grid item xs={3} >
                <img src={guitaristLeftArm} className='guitarist-left-arm' alt='skeleton arm playing guitar'/>
              </Grid>

            </Grid>

            <Grid container spacing={1} disableEqualOverflow>

              <Grid item xs={3} >
                <img src={flyingV} className='mainstream-guitar' alt='flying v electric guitar'/>
              </Grid>

              <Grid item xs={6}>
                <div></div>
              </Grid>

              <Grid item xs={3} >
                <img src={flyingV} className='mainstream-guitar' alt='black electric guitar'/>
              </Grid>

            </Grid>

            <Grid container justifyContent='center'>
             <img item src={mohawkSkull} alt='pixelated skull with mohawk'  id='mohawk-skull' />
            </Grid>

            <Grid container spacing={1} disableEqualOverflow>
              <Grid item xs={3} >
                <img src={speakers} alt='pixelated loudspeakers' id='speakers-img' />
              </Grid>
              <Grid item xs={6} >
                <img src={drumSkeleton} alt='pixelated drumset' id='' className='drums' />
              </Grid>
              <Grid item xs={3} >
              <img src={speakers} alt='pixelated loudspeakers' id='speakers-img' />
              </Grid>
            </Grid>

            <Grid item>
              <AudioPlayer
                id='mainstream-audio-player'
                autoPlay='false'
                // loop 
                className='mainstream-react-h5-audio-player' 
                src={require(`../../assets/audio/${randomTrack.src}`)} 
              />
            </Grid>
          </Item>
        </Box>
        
    </div>
  );
};

export default Mainstream;