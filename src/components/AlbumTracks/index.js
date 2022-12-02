// import from react
import React, { useState } from 'react';

// import CSS
import './AlbumTracks.css';

//  import from MUI
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

// import audio player
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

// import images
import FileDownloadIcon from '@mui/icons-material/FileDownload';
// import pixelRecord from '../../assets/images/pixel_record_blue_label.png';
import worldOnFire from '../../assets/images/try_this_one.gif';
// import { blue } from '@mui/material/colors';


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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  // color: theme.palette.text.secondary,
}));

  return (
    <section id='album-tracks-section'>
      <Box sx={{ flexGrow: 1 }}> 
        <Grid container spacing={4} >
          {tracks.map((track) => (  
            <Grid xs={12} sm={6} md={4}key={track.title} className='track-grid'>
              {/* <Paper elevation={24} className='track-paper'> */}
              <Item className='track-paper' elevation={12}>

                <Grid item className='track-title-grid' >
                  <h3 id='track-title'>"{track.title}"</h3>
                </Grid>
                <Grid item>
                  <img src={worldOnFire} alt='pixelated earth on fire' className='pixel-record album-tracks-logo'></img>
                </Grid>
                <Grid item>
                  {/* <audio controls className='album-tracks-audio-player'>
                    <source src={require(`../../assets/audio/${track.src}`)}></source>
                  </audio> */}
                  
                  <AudioPlayer
                    
                    className='react-h5-audio-player' 
                    src={require(`../../assets/audio/${track.src}`)} 
                    // header={(`${track.title}`)}
                    header='Vain Mainstream'
                    footer='"Your Likeness"'
                  />

                </Grid>
                <Grid item>
                  <a 
                    href={require(`../../assets/audio/${track.src}`)} 
                    download={(`Vain Mainstream - ${track.title}`)}
                    className=''
                  >
                    <FileDownloadIcon className='track-download'/>
                  </a>
                </Grid>
                <Grid item>
                  <span className='download-title-msg'>Download "{track.title}"
                  </span>
                </Grid>
                </Item>
              {/* </Paper> */}
            </Grid>
          ))} 
       </Grid>
      </Box> 
    </section>
  );
};
  
export default AlbumTracks;