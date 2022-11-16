import React, { useState } from 'react';

import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import pixelRecord from '../../assets/images/pixel_record.png';

const AlbumTracks = () => {
  const [tracks] = useState([
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
  ])

  return (
    <section id='album-tracks-section'>
      <Box sx={{ flexGrow: 1 }}> 
        <Grid container spacing={4} >
          {tracks.map((track) => (  
            <Grid xs={4} key={track.title} className='track-grid'>
              <Paper elevation={24} >
                <Grid className='track-title-grid'>
                  <h3 id='track-title'>{track.title}</h3>
                </Grid>
                <Grid>
                  <img src={pixelRecord} alt='pixelated vinyl record' className='pixel-record'></img>
                </Grid>
                <Grid>
                  <audio controls className='album-tracks-audio-player'>
                    <source src={require(`../../assets/audio/${track.src}`)} download></source>
                  </audio>
                </Grid>
                <Grid>
                  <a 
                    href={require(`../../assets/audio/${track.src}`)} 
                    download={(`Vain Mainstream - ${track.title}`)}
                    className='track-download'
                  >
                    <FileDownloadIcon />
                  </a>
                </Grid>
                <Grid>
                  <span>Download {track.title}</span>
                </Grid>
                
              </Paper>
            </Grid>
          ))} 
       </Grid>
      </Box> 
    </section>
  );
};
  
export default AlbumTracks;