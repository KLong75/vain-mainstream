import React from 'react';

// import { Stack } from '@mui/system';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

// import MusicPlayer from '../MusicPlayer';

import boombox from '../../assets/images/pixel_boombox_cropped.png';
import cultOfP from '../../assets/audio/cult_of_personality.mp3';
import dancingQ from '../../assets/audio/DQ_no_vox.mp3';
import bST from '../../assets/audio/bst_no_vox.mp3';

const tracks = [cultOfP, dancingQ, bST]


const Mainstream = () => {
  return (
    <div id='mainstream-div'>
      
        <h4>Vain Mainstream Radio</h4>
        <Grid container justifyContent='center'>
          <img src={boombox} alt='pixelated boombox' id='boombox-img'></img>
        </Grid>



        <Grid container justifyContent='center'>
         <audio id='music-player' controls preload loop >
           <source src={cultOfP}></source>
         </audio>
        </Grid>
    </div>
  );
};

export default Mainstream;