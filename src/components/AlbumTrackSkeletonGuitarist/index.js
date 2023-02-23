// import from React
import React from 'react';

// import from mui
import Grid from '@mui/material/Unstable_Grid2/Grid2';

// import CSS
import './AlbumTrackSkeletonGuitarist.css';

// import components

// import images
import guitaristBody from '../../assets/images/guitarist-body-legs.png'
import guitaristRightArm from '../../assets/images/guitarist_right_arm.png'
import guitaristLeftArm from '../../assets/images/guitar_left_arm_angled.png'
// import skull from '../../assets/images/skull.png'
import mohawkSkull from '../../assets/images/grey_mohawk_skull_solid.png'
import flyingV from '../../assets/images/blue_flying_v.png';


const AlbumTrackSkeletonGuitarist = () => {
  return (
    <Grid container justifyContent='center'>

      <Grid xs={12} >
        <img src={mohawkSkull} className='album-track-guitarist-skull' alt='pixelated skull'/>
      </Grid>

      <Grid xs={12} >
        <img src={guitaristRightArm} className='album-track-guitarist-right-arm' alt='skeleton arm playing guitar'/>
      </Grid>

      <Grid xs={12} >
        <img src={guitaristLeftArm} className='album-track-guitarist-left-arm' alt='skeleton arm playing guitar'/>
      </Grid>

      <Grid xs={12} >
        <img src={flyingV} className='album-track-guitar' alt='flying v electric guitar'/>
      </Grid>

      <Grid xs={12} >
        <img src={guitaristBody} alt='pixelated skeleton' className='album-track-guitarist-body' />
      </Grid>
    </Grid>
    

)}
export default AlbumTrackSkeletonGuitarist;