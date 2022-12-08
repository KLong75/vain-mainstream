// import from react
import React, { useState } from 'react';

// import CSS
import './AlbumTracks.css';

//  import from MUI
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

// import Typography from '@mui/material/Typography';

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
      original_artist: 'Alanis Morissette',
      location: 'Lisbon, Portugal',
      src: 'cult_of_personality.mp3'
    },
    {
      title: 'Violent Pornography',
      original_artist: 'System Of A Down',
      location: 'city, country',
      src: 'bst_no_vox.mp3'
    },
    
    {
      title: 'Girl, You Have No Faith In Medicine',
      original_artist: 'The White Stripes',
      location: 'city, country',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'Smooth',
      original_artist: 'Santana ft. Rob Thomas',
      location: 'city, country',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'Number 1',
      original_artist: 'Nelly',
      location: 'city, country',
      src: 'bst_no_vox.mp3'
    },
    {
      title: "Don't Tell Me",
      original_artist: 'Avril Lavigne',
      location: 'city, country',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'Feel No Ways',
      original_artist: 'Drake',
      location: 'city, country',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'Fake Plastic Trees',
      original_artist: 'Radiohead',
      location: 'city, country',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'Dancing Queen',
      original_artist: 'Abba',
      location: 'city, country',
      src: 'DQ_no_vox.mp3'
    },
    {
      title: 'Change The World',
      original_artist: 'The Offspring',
      location: 'city, country',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'Wildest Dreams',
      original_artist: 'Taylor Swift',
      location: 'city, country',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'Dragon Attack',
      original_artist: 'Queen',
      location: 'city, country',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'All I Wanna Do',
      original_artist: 'Sheryl Crow',
      location: 'city, country',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'Sizzler Promotional Commercial 1991',
      original_artist: 'Sizzler',
      location: 'city, country',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'Parabola',
      original_artist: 'Tool',
      location: 'city, country',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'Basket Case',
      original_artist: 'Green Day',
      location: 'city, country',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'Ray Of Light',
      original_artist: 'Madonna',
      location: 'city, country',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'Loser',
      original_artist: 'Beck',
      location: 'city, country',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'The Locomotion',
      original_artist: 'Carol King',
      location: 'city, country',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'Cult of Personality',
      original_artist: 'Living Colour',
      location: '',
      src: 'cult_of_personality.mp3'
    },
    {
      title: 'Love in Plaster',
      original_artist: 'The Hives',
      location: 'city, country',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'Stand Out',
      original_artist: 'Tevin Campbell',
      location: 'city, country',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'Warrior',
      original_artist: 'The Yeah Yeah Yeahs',
      location: 'city, country',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'Just A Clown',
      original_artist: 'Charley Crockett',
      location: 'city, country',
      src: 'bst_no_vox.mp3'
    },
    {
      title: 'The Rockafeller Skank',
      original_artist: 'Fatboy Slim',
      location: 'city, country',
      src: 'bst_no_vox.mp3'
    }
])

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  // color: theme.palette.text.secondary,
}));

  return (
    <section id='album-tracks-section'>
      <Box sx={{ flexGrow: 1 }}> 
        <Grid container spacing={4} >
          {tracks.map((track) => (  
            <Grid xs={12} sm={6} md={4} key={track.title} className='track-grid'>
              {/* <Paper elevation={12} className='track-paper'> */}
              <Item className='track-paper' elevation={12}>

                <Grid item className='track-title-grid' >
                  {/* <h3 id='track-title'>"{track.title}" {track.original_artist} </h3> */}
                  <h3 id='track-title'>{(`"${track.title}" (${track.original_artist}) `)}</h3>
                </Grid>

                <Grid item className='track-location-grid' >
                  <h4 id='track-location'> {track.location}</h4>
                </Grid>

                {/* <Grid item>
                  <img src={worldOnFireGif} alt='pixelated earth on fire' className='album-tracks-logo'></img>
                </Grid> */}

                <Grid item>
                  <AudioPlayer
                    className='album-tracks-react-h5-audio-player' 
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
                  <span className='download-title-msg'>Download MP3 of "{track.title}"
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