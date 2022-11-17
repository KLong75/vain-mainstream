// import from react
import React, { useState } from 'react';
//  import from MUI
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
// import audio player
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import images
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import pixelRecord from '../../assets/images/pixel_record.png';

const AlbumTracks = () => {
  const [tracks] = useState([
    {
      title: 'All I Really Want',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'Violent Pornography',
      src: 'bst_no_vox.mp3'
    },
    
    {
      title: 'Girl, You Have No Faith In Medicine',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'Smooth',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'Number 1',
      src: 'bst_no_vox.mp3'
    },
    {
      title: "Don't Tell Me",
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'Feel No Ways',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'Fake Plastic Trees',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'Dancing Queen',
      src: 'DQ_no_vox.mp3'
    },
    {
      title: 'Change The World',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'Wildest Dreams',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'Dragon Attack',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'All I Wanna Do',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'Sizzler Promotional Commercial 1991',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'Parabola',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'Basket Case',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'Ray Of Light',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'Loser',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'The Locomotion',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'Cult of Personality',
      src: 'cult_of_personality.mp3'
    },
    {
      title: 'Love in Plaster',
      src: 'cult_of_personality.mp3'
    },
    {
      title: 'Stand Out',
      src: 'cult_of_personality.mp3'
    },
    {
      title: 'Warrior',
      src: 'cult_of_personality.mp3'
    },
    {
      title: 'Just A Clown',
      src: 'cult_of_personality.mp3'
    },
    {
      title: 'The Rockafeller Skank',
      src: 'cult_of_personality.mp3'
    }
  ])

  return (
    <section id='album-tracks-section'>
      <Box sx={{ flexGrow: 1 }}> 
        <Grid container spacing={4} >
          {tracks.map((track) => (  
            <Grid md ={3} sm={4} xs={12} key={track.title} className='track-grid'>
              <Paper elevation={24} className='track-paper'>
                <Grid spacing={2} className='track-title-grid'>
                  <h3 id='track-title'>"{track.title}"</h3>
                </Grid>
                <Grid>
                  <img src={pixelRecord} alt='pixelated vinyl record' className='pixel-record'></img>
                </Grid>
                <Grid>
                  {/* <audio controls className='album-tracks-audio-player'>
                    <source src={require(`../../assets/audio/${track.src}`)}></source>
                  </audio> */}
                  
                  <AudioPlayer className='react-h5-audio-player' src={require(`../../assets/audio/${track.src}`)} />

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
                  <span className='download-title-msg'>Download "{track.title}"</span>
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