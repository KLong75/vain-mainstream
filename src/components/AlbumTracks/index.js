// import from react
import React, { useState } from 'react';

// import ShareComponent from '../ShareComponent';

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


const AlbumTracks = () => {
  const [tracks] = useState([
    {
      title: 'All I Really Want',
      original_artist: 'Alanis Morissette',
      location: 'Lisbon, Portugal',
      src: 'All_I_Really_Want.mp3'
    },
    {
      title: 'Violent Pornography',
      original_artist: 'System Of A Down',
      location: 'Barcelona, Spain',
      src: 'Violent_P.mp3'
    },
])

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(0),
  textAlign: 'center',
}));

  return (
    
    <section id='album-tracks-section'>
      {/* <Box sx={{ flexGrow: 1 }} className='audio-share-box'>
        <Item className='track-paper' elevation={12}>
          <ShareComponent />
        </Item>
      </Box> */}

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4} >
          {tracks.map((track) => (  
            <Grid xs={12} sm={6} md={4} key={track.title} className='track-grid'>
              
              <Item className='track-paper' elevation={12}>

                <Grid item className='track-title-grid' >
                  <h3 id='track-title'>{(`"${track.title}"`)}</h3>
                </Grid>

                <Grid item className='track-title-grid' >
                  <h3 id='track-original-artist'>{(`(${track.original_artist}) `)}</h3>
                </Grid>

                <Grid item className='track-location-grid' >
                  <h4 id='track-location'> {track.location}</h4>
                </Grid>

                <Grid item>
                  <AudioPlayer
                    className='album-tracks-react-h5-audio-player' 
                    src={require(`../../assets/audio/${track.src}`)} 
                    header='Vain Mainstream'
                    footer='Your Likeness'
                  />

                </Grid>
                <Grid item>
                  <a 
                    href={require(`../../assets/audio/${track.src}`)} 
                    download={(`Vain Mainstream - ${track.title} (${track.original_artist}) ${track.location}`)}
                  >
                    <FileDownloadIcon className='track-download'/>
                  </a>
                </Grid>
                <Grid item>
                  <span className='download-title-msg'>Download</span>
                </Grid>
              </Item>
            </Grid>
          ))} 
       </Grid>
      </Box> 
    </section>
    
  );
};
  
export default AlbumTracks;