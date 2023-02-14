// import from react
// import React, { useState } from 'react';
import React from 'react';

//  import Tracklist
import { TrackList } from '../../utils/TrackList';
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
// import { playList } from '../TheMainstream';

const AlbumTracks = () => {
//   const [tracks] = useState([
//     {
//       title: 'All I Really Want',
//       original_artist: 'Alanis Morissette',
//       location: 'Lisbon, Portugal',
//       src: 'All_I_Really_Want.mp3'
//     },
//     {
//       title: 'Violent Pornography',
//       original_artist: 'System Of A Down',
//       location: 'Barcelona, Spain',
//       src: 'Violent_P.mp3'
//     },
//     {
//       title: 'Girl, You Have No Faith In Medicine',
//       original_artist: 'The White Stripes',
//       location: 'Vatican City',
//       src: 'Girl_No_Faith_Med.mp3'
//     },
//     {
//       title: 'Smooth',
//       original_artist: 'Santana ft Rob Thomas',
//       location: 'Paris, France',
//       src: 'Smooth.mp3'
//     },
//     {
//       title: 'Fake Plastic Trees',
//       original_artist: 'Radiohead',
//       location: 'Rome, Italy',
//       src: 'Fake_Plastic_Trees.mp3'
//     },
//     {
//       title: "Don't Tell Me",
//       original_artist: 'Avril Lavigne',
//       location: 'Bar, Montenegro',
//       src: 'Dont_Tell_Me.mp3'
//     },
//     {
//       title: "Dragon Attack",
//       original_artist: 'Queen',
//       location: 'Belgrade, Serbia',
//       src: 'Dragon_Attack.mp3'
//     }
// ])

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