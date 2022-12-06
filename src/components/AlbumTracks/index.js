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
// import worldOnFire from '../../assets/images/try_this_one.gif';
import worldOnFireGif from '../../assets/images/world_on_fire.gif';
// import { blue } from '@mui/material/colors';


const AlbumTracks = () => {
  const [tracks] = useState([
    {
      title: 'All I Really Want',
      original_artist: '(Alanis Morissette)',
      location: 'Lisbon, Portugal',
      src: 'cult_of_personality.mp3'
    },
    // {
    //   title: 'Violent Pornography',
    //   original_artist: '()',
    //   location: '',
    //   src: ''
    // },
    
    // {
    //   title: 'Girl, You Have No Faith In Medicine',
    //   original_artist: '()',
    //   location: '',
    //   src: ''
    // },
    // {
    //   title: 'Smooth',
    //   original_artist: '()',
    //   location: '',
    //   src: ''
    // },
    // {
    //   title: 'Number 1',
    //   original_artist: '()',
    //   location: '',
    //   src: ''
    // },
    // {
    //   title: "Don't Tell Me",
    //   original_artist: '()',
    //   location: '',
    //   src: ''
    // },
    // {
    //   title: 'Feel No Ways',
    //   original_artist: '()',
    //   location: '',
    //   src: ''
    // },
    // {
    //   title: 'Fake Plastic Trees',
    //   original_artist: '()',
    //   location: '',
    //   src: ''
    // },
    // {
    //   title: 'Dancing Queen',
    //   original_artist: '()',
    //   location: '',
    //   src: 'DQ_no_vox.mp3'
    // },
    // {
    //   title: 'Change The World',
    //   original_artist: '()',
    //   location: '',
    //   src: ''
    // },
    // {
    //   title: 'Wildest Dreams',
    //   original_artist: '()',
    //   location: '',
    //   src: ''
    // },
    // {
    //   title: 'Dragon Attack',
    //   original_artist: '()',
    //   location: '',
    //   src: ''
    // },
    // {
    //   title: 'All I Wanna Do',
    //   original_artist: '()',
    //   location: '',
    //   src: ''
    // },
    // {
    //   title: 'Sizzler Promotional Commercial 1991',
    //   original_artist: '()',
    //   location: '',
    //   src: ''
    // },
    // {
    //   title: 'Parabola',
    //   original_artist: '()',
    //   location: '',
    //   src: ''
    // },
    // {
    //   title: 'Basket Case',
    //   original_artist: '()',
    //   location: '',
    //   src: 'bst_no_vox.mp3'
    // },
    // {
    //   title: 'Ray Of Light',
    //   original_artist: '()',
    //   location: '',
    //   src: ''
    // },
    // {
    //   title: 'Loser',
    //   original_artist: '()',
    //   location: '',
    //   src: ''
    // },
    // {
    //   title: 'The Locomotion',
    //   original_artist: '()',
    //   location: '',
    //   src: ''
    // },
    // {
    //   title: 'Cult of Personality',
    //   original_artist: '()',
    //   location: '',
    //   src: 'cult_of_personality.mp3'
    // },
    // {
    //   title: 'Love in Plaster',
    //   original_artist: '()',
    //   location: '',
    //   src: ''
    // },
    // {
    //   title: 'Stand Out',
    //   original_artist: '()',
    //   location: '',
    //   src: ''
    // },
    // {
    //   title: 'Warrior',
    //   original_artist: '()',
    //   location: '',
    //   src: ''
    // },
    // {
    //   title: 'Just A Clown',
    //   original_artist: '()',
    //   location: '',
    //   src: ''
    // },
    // {
    //   title: 'The Rockafeller Skank',
    //   original_artist: '()',
    //   location: '',
    //   src: ''
    // }
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
                  <h3 id='track-title'>"{track.title}" {track.original_artist} {track.location}</h3>
                </Grid>
                <Grid item>
                  <img src={worldOnFireGif} alt='pixelated earth on fire' className='pixel-record album-tracks-logo'></img>
                </Grid>
                <Grid item>
                  
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