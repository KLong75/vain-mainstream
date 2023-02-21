// import from React
import React from 'react';

// import from mui
import Grid from '@mui/material/Unstable_Grid2/Grid2';

// import CSS
import './SkeletonGuitarist.css';

// import components

// import images
import guitaristBody from '../../assets/images/guitarist-body-legs.png'
import guitaristRightArm from '../../assets/images/guitarist_right_arm.png'
import guitaristLeftArm from '../../assets/images/guitar_left_arm_angled.png'
// import skull from '../../assets/images/skull.png'
import mohawkSkull from '../../assets/images/grey_mohawk_skull_solid.png'
import flyingV from '../../assets/images/blue_flying_v.png';


const SkeletonGuitarist = () => {
  return (
    <Grid container justifyContent='center'>

      <Grid xs={12} >
        <img src={mohawkSkull} className='component-guitarist-skull' alt='pixelated skull'/>
      </Grid>

      <Grid xs={12} >
        <img src={guitaristRightArm} className='component-guitarist-right-arm' alt='skeleton arm playing guitar'/>
      </Grid>

      <Grid xs={12} >
        <img src={guitaristLeftArm} className='component-guitarist-left-arm' alt='skeleton arm playing guitar'/>
      </Grid>

      <Grid xs={12} >
        <img src={flyingV} className='component-guitar' alt='flying v electric guitar'/>
      </Grid>

      <Grid xs={12} >
        <img src={guitaristBody} alt='pixelated skeleton' className='component-guitarist-body' />
      </Grid>

      

    </Grid>
    

)}
export default SkeletonGuitarist;