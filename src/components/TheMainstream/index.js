// import from React
import React from 'react';

// import TrackList
import { TrackList } from '../../utils/TrackList';

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
import worldOnFireGif from '../../assets/images/world_on_fire.gif';
import drums from '../../assets/images/pixel_drums_big.png';
import drummerBody from '../../assets/images/drummer_body_test.png';
import drummerRightArm from '../../assets/images/drummer_right_arm_with_drumstick.png';
import drummerLeftArm from '../../assets/images/drummer_left_arm_with_drumstick.png';
import drummerHead from '../../assets/images/grey_mohawk_skull_solid_white_eye.png'
import guitaristBody from '../../assets/images/guitarist-body-legs.png'
import guitaristRightArm from '../../assets/images/guitarist_right_arm.png'
import guitaristLeftArm from '../../assets/images/guitar_left_arm_angled.png'
import skull from '../../assets/images/skull.png'
import flyingV from '../../assets/images/blue_flying_v.png';

const latestTrack = TrackList[TrackList.length - 1];

const selectRandom = (array) => {
  let randomIndex = Math.floor(Math.random() * array.length); 
  let randomElement = array[randomIndex];
  return randomElement;
}

let randomTrack = selectRandom(TrackList);

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  backgroundImage: `url(${worldOnFireGif})`,
}));

const Mainstream = () => {

  return (
    <div id='mainstream-div'>
      <Grid container justifyContent='center'>
        <Grid>
          <a 
            href='https://www.patreon.com/vainmainstream' target='_blank' rel="noreferrer" id='mainstream-patreon-link'
          >
            <h2 className='mainstream-headline font-effect-fire-animation'>Click Here To Give Me a Dollar</h2>
          </a>
        </Grid>
      </Grid>
         
      <Marquee speed={40} gradientWidth={60} gradientColor={[255, 255, 255]} className='now-playing-marquee'>
        <span 
            className='mainstream-marquee-text'> 
              Now Playing on Mainstream Radio: "{randomTrack.title}" ({randomTrack.original_artist}) {randomTrack.location} by Vain Mainstream
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Download the latest track from Your Likeness: "{latestTrack.title}" ({latestTrack.original_artist}) {latestTrack.location} - Available Now!
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          </span>
      </Marquee> 

      <Box sx={{ flexGrow: 1 }}>
        <Item className='mainstream-paper ' elevation={12}>
          <Grid container justifyContent='center'>
            <Grid item className='announcement-grid'>
              <p className='font-effect-fire-animation announcement-plain-text'>The New Album</p>
              <h3 className='font-effect-fire-animation announcement-headline'>Your Likeness</h3>
              <span className='font-effect-fire-animation announcement-plain-text'>or</span>
              <a 
                href='https://www.patreon.com/vainmainstream' target='_blank' rel="noreferrer" className='announcement-patreon-link'
              >
                <h4 className='font-effect-fire-animation announcement-sub-headline'>Please Give Me a Dollar</h4>
                <h4 className='font-effect-fire-animation announcement-sub-headline'>for Health Insurance</h4>
              </a>
            </Grid>
          </Grid>
      
            <Grid container spacing={1} >

              <Grid xs={4} >
                <img src={skull} className='guitarist-skull' alt='pixelated skull'/>
              </Grid>

              <Grid xs={4} >
               <img src={drummerHead} alt='pixelated skull with mohawk'  id='mohawk-skull' />
              </Grid>

              <Grid xs={4} >
                <img src={skull} className='guitarist-skull' alt='pixelated skull'/>
              </Grid>
            </Grid>

            <Grid container spacing={1} id='body-grid'>

              <Grid xs={4} >
                <img src={guitaristBody} alt='pixelated skeleton' className='guitarist-body' />
              </Grid>

              <Grid xs={4}>
                <img src={drummerBody} alt='pixelated skeleton torso' className='drummer-body' />
              </Grid>

              <Grid xs={4} >
                  <img src={guitaristBody} alt='pixelated skeleton' className='guitarist-body' />
              </Grid>
            </Grid>

            <Grid container spacing={1} id='guitar-right-arm-grid'>
              <Grid xs={4} >
                <img src={guitaristRightArm} className='guitarist-right-arm' alt='skeleton arm playing guitar'/>
              </Grid>
              <Grid xs={4}>
              </Grid>
               <Grid xs={4} >
               <img src={guitaristRightArm} className='guitarist-right-arm' alt='skeleton arm playing guitar'/>
              </Grid>
            </Grid>

            <Grid container spacing={1} id='guitar-left-arm-grid'>
              <Grid xs={4} >
                <img src={guitaristLeftArm} className='guitarist-left-arm' alt='skeleton arm playing guitar'/>
              </Grid>
              <Grid xs={4}>
              </Grid>
              <Grid xs={4} >
                <img src={guitaristLeftArm} className='guitarist-left-arm' alt='skeleton arm playing guitar'/>
              </Grid>
            </Grid>

            <Grid container spacing={1} >
              
              <Grid xs={12}>
                <img src={drummerRightArm} alt='skeleton arm with drumstick' className='drummer-right-arm'/>
              </Grid>
              <Grid xs={12}>
              <img src={drummerLeftArm} alt='skeleton arm with drumstick' className='drummer-left-arm'/>
              </Grid>
              
            </Grid>

            <Grid container spacing={1} id='guitar-grid'>
              <Grid xs={4} >
                <img src={flyingV} className='mainstream-guitar ' alt='flying v electric guitar'/>
              </Grid>

              <Grid xs={4} >
              </Grid>

              <Grid xs={4} >
                <img src={flyingV} className='mainstream-guitar' id='stage-left-guitar' alt='flying v electric guitar'/>
              </Grid>

              <Grid xs={12} >
                <img src={drums} alt='pixelated drumset' className='drums' />
              </Grid>
            </Grid>

            <Grid container className='mainstream-audio-player-grid' >
              <AudioPlayer
                id='mainstream-audio-player'
                preload='auto'
                autoPlay={false}
                className='mainstream-react-h5-audio-player' 
                loop={true}
                src={require(`../../assets/audio/${randomTrack.audio_src}`)} 
                header={(`"${randomTrack.title}"`)}
              />
            </Grid>
          </Item>
        </Box>
    </div>
  );
};

export default Mainstream;