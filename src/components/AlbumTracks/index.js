// import from react
import React from 'react';

//  import Tracklist
import { TrackList } from '../../utils/TrackList';

// import components
import ShareComponent from '../ShareComponent';

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

  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(0),
    textAlign: 'center',
  }));

  return (    
    <section id='album-tracks-section'>
      <Box sx={{ flexGrow: 1 }} className='audio-share-box'>
        <Item className='album-share-paper' elevation={12}>
          <ShareComponent />
          <a 
            href='https://www.patreon.com/vainmainstream' target='_blank' rel="noreferrer" className='album-patreon-link'
          >
            <p className='font-effect-fire-animation album-patreon-link'>Click Here To Give Me a Dollar</p>
          </a>
        </Item>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4} className='album-tracks-grid'>
          {TrackList.map((track) => (  
            <Grid xs={12} sm={6} md={4} key={track.title} className='track-grid'>
              
              <Item className='track-paper' elevation={12}>
                <Grid className='track-title-grid' >
                  <h4 className='track-title'>{(`"${track.title}"`)}</h4>
                </Grid>

                <Grid className='track-title-grid' >
                  <h5 className='track-original-artist'>{(`(${track.original_artist}) `)}</h5>
                </Grid>

                <Grid className='track-location-grid' >
                  <h6 className='track-location'> {track.location}</h6>
                  <img width="64" alt={track.flag_alt} src={track.location_flag_src} className='nation-flag'></img>
                </Grid>

                <Grid>
                  <AudioPlayer
                    className='album-tracks-react-h5-audio-player' 
                    src={require(`../../assets/audio/${track.audio_src}`)} 
                    header='Vain Mainstream'
                    footer='Your Likeness'
                  />
                </Grid>
                <Grid>
                  <a 
                    href={require(`../../assets/audio/${track.audio_src}`)} 
                    download={(`Vain Mainstream - ${track.title} (${track.original_artist}) ${track.location}`)}
                  >
                    <FileDownloadIcon className='track-download'/>
                  </a>
                </Grid>
                <Grid>
                  <span className='download-title-msg font-effect-fire-animation'>Download</span>
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