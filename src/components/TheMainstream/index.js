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
import worldOnFireGif from '../../assets/images/world_on_fire.gif';
import drums from '../../assets/images/pixel_drums_big.png';
import drummerBody from '../../assets/images/drummer_body.png';
import drummerRightArm from '../../assets/images/drummer_right_arm_with_drumstick.png';
import drummerLeftArm from '../../assets/images/drummer_left_arm_with_drumstick.png';
import drummerHeadSolid from '../../assets/images/grey_mohawk_skull_solid.png'
import guitaristTorso from '../../assets/images/guitarist-torso.png';
import guitaristLegs from '../../assets/images/guitarist_legs.png';
import guitaristRightArm from '../../assets/images/guitarist_right_arm.png'
import guitaristLeftArm from '../../assets/images/guitar_left_arm_angled.png'
import skull from '../../assets/images/skull.png'
import flyingV from '../../assets/images/blue_flying_v.png';

// import audio
// import cultOfP from '../../assets/audio/cult_of_personality.mp3';
// import dancingQ from '../../assets/audio/DQ_no_vox.mp3';
// import basketCase from '../../assets/audio/bst_no_vox.mp3';


// const playList = [cultOfP, dancingQ, basketCase]

const playList = [
  {
    title: 'All I Really Want',
    original_artist: 'Alanis Morissette',
    location: 'Lisbon,Portugal',
    src: 'All_I_Really_Want.mp3',
  },
  {
    title: 'Violent Pornography',
    original_artist: 'System Of A Down',
    location: 'Barcelona, Spain',
    src: 'Violent_P.mp3'
  },
 
]

const selectRandom = (array) => {
  let randomIndex = Math.floor(Math.random() * array.length); 
  let randomElement = array[randomIndex];
  return randomElement;
}

const randomTrack = selectRandom(playList);
// console.log(randomTrack);
// console.log(randomTrack.src)

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  backgroundImage: `url(${worldOnFireGif})`,
}));

const Mainstream = () => {
  return (
    <div id='mainstream-div'>
      <Grid container justifyContent='center'>
        <Grid item >
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
              Now Playing on Mainstream Radio: "{randomTrack.title}" ({randomTrack.original_artist}) by Vain Mainstream
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
      </Marquee> 

      <Box sx={{ flexGrow: 1 }}>
        <Item className='mainstream-paper ' elevation={12}>
          <Grid container justifyContent='center'>
            <Grid  className='announcement-grid'>
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
      
            <Grid container spacing={1} disableEqualOverflow >
              <Grid item xs={3} >
                <img src={skull} className='guitarist-skull' alt='pixelated skull'/>
              </Grid>
              <Grid item xs={6}>
              <div></div>
              </Grid>
              <Grid item xs={3} >
                <img src={skull} className='guitarist-skull' alt='pixelated skull'/>
              </Grid>
            </Grid>
            <Grid container spacing={1} disableEqualOverflow id='guitarist-body-grid'>
              <Grid item xs={3} >
                <img src={guitaristTorso} alt='pixelated skeleton' className='guitarist-torso' />
              </Grid>
              <Grid item xs={6}>
              </Grid>
              <Grid item xs={3} >
                  <img src={guitaristTorso} alt='pixelated skeleton' className='guitarist-torso' />
              </Grid>
            </Grid>

            <Grid container spacing={1} disableEqualOverflow id='guitar-right-arm-grid'>
              <Grid item xs={3} >
                <img src={guitaristRightArm} className='guitarist-right-arm' alt='skeleton arm playing guitar'/>
              </Grid>
              <Grid item xs={6}>
              </Grid>
               <Grid item xs={3} >
               <img src={guitaristRightArm} className='guitarist-right-arm' alt='skeleton arm playing guitar'/>
              </Grid>
            </Grid>

            <Grid container spacing={1} disableEqualOverflow id='guitar-left-arm-grid'>
              <Grid item xs={3} >
                <img src={guitaristLeftArm} className='guitarist-left-arm' alt='skeleton arm playing guitar'/>
              </Grid>
              <Grid item xs={6}>
              </Grid>
              <Grid item xs={3} >
                <img src={guitaristLeftArm} className='guitarist-left-arm' alt='skeleton arm playing guitar'/>
              </Grid>
            </Grid>

            <Grid container spacing={1} disableEqualOverflow id='guitar-grid'>
              <Grid item xs={3} >
                <img src={flyingV} className='mainstream-guitar ' alt='flying v electric guitar'/>
              </Grid>
              <Grid item xs={6}>
              </Grid>
              <Grid item xs={3} >
                <img src={flyingV} className='mainstream-guitar' id='stage-left-guitar' alt='flying v electric guitar'/>
              </Grid>
            </Grid>

            <Grid container spacing={1} disableEqualOverflow id='guitarist-body-grid'>
              <Grid item xs={3} >
                <img src={guitaristLegs} alt='pixelated skeleton' className='guitarist-legs' />
              </Grid>
              <Grid item xs={6}>
              </Grid>
              <Grid item xs={3} >
                  <img src={guitaristLegs} alt='pixelated skeleton' className='guitarist-legs' />
              </Grid>
            </Grid>

            <Grid container spacing={1} disableEqualOverflow id='drummer-head-grid'>
            <Grid item xs={3}>
              </Grid>
              <Grid item xs={6} >
               <img item src={drummerHeadSolid} alt='pixelated skull with mohawk'  id='mohawk-skull' />
              </Grid>
              <Grid item xs={3}>
              </Grid>
            </Grid>

            <Grid container spacing={1} disableEqualOverflow>
            <Grid item xs={3}>
              </Grid>
              <Grid item xs={6}>
                <img item src={drummerRightArm} alt='skeleton arm with drumstick' className='drummer-right-arm'/>
              </Grid>
              <Grid item xs={3}>
              </Grid>
            </Grid>

            <Grid container spacing={1} disableEqualOverflow>
              <Grid item xs={3}>
              </Grid>
              <Grid item xs={6}>
              <img item src={drummerLeftArm} alt='skeleton arm with drumstick' className='drummer-left-arm'/>
              </Grid>
              <Grid item xs={3}>
              </Grid>
            </Grid>

            <Grid container spacing={1} disableEqualOverflow id="drummer-body-grid">
              <Grid item xs={3}>
              </Grid>
              <Grid item xs={6}>
              <img src={drummerBody} alt='pixelated skeleton torso' className='drummer-body' />
              </Grid>
              <Grid item xs={3}>
              </Grid>
            </Grid>

            <Grid container spacing={1} disableEqualOverflow id='speakers-drums-grid'>
              <Grid item xs={12} >
                <img src={drums} alt='pixelated drumset' id='' className='drums' />
              </Grid>
            </Grid>

            <Grid item id='mainstream-audio-player-grid'>
              <AudioPlayer
                id='mainstream-audio-player'
                autoPlay={true}
                loop 
                className='mainstream-react-h5-audio-player ' 
                src={require(`../../assets/audio/${randomTrack.src}`)} 
                header={(`"${randomTrack.title}" (${randomTrack.original_artist})`)}
              />
            </Grid>
          </Item>
        </Box>
    </div>
  );
};

export default Mainstream;