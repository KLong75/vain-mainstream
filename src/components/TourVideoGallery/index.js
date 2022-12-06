// import from react
import React, { useState } from 'react';

// import CSS
import './TourVideoGallery.css';

//  import from MUI
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

// import images
// import worldOnFire from '../../assets/images/try_this_one.gif';
import worldOnFireGif from '../../assets/images/world_on_fire.gif';

const TourVideoGallery = () => {
  const [videos] = useState([
    {
      
      title: 'All I Really Want',
      original_artist: 'Alanis Morissette',
      location: 'Lisbon, Portugal',
      src: 'https://www.youtube.com/embed/CKuDsijE6Ow'
    },
    {
      title: 'Violent Pornography',
      original_artist: 'System Of A Down',
      location: 'city, state',
      src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    },
    
    {
      title: 'Loser',
      original_artist: 'Beck',
      location: 'Waco, TX',
      src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    },
    
])

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  // color: theme.palette.text.secondary,
}));

  return (
    <section id='video-gallery-section'>
      <Box sx={{ flexGrow: 1 }}> 
        <Grid container spacing={4} >
          {videos.map((video) => (  
            <Grid xs={12} sm={6} md={4}key={video.title} className='video-grid' >
              <Item className='video-gallery-paper' elevation={12} >
                <Grid item className='video-title-grid' >
                  {/* <h3 id='video-title'>"{video.title}" </h3> */}
                  <h4 id='video-title'>{(`"${video.title}" (${video.original_artist}) ${video.location}`)}</h4>
                </Grid>

                {/* <Grid item>
                  <h4>{`${video.location}`}</h4>
                </Grid> */}

                <Grid item>
                  <img src={worldOnFireGif} alt='burning earth' className='vid-gallery-logo'></img>
                </Grid>

                {/* <Grid item>
                  <span>{video.date}</span>
                </Grid>

                <Grid item>
                  <span>{video.city}</span>
                </Grid>

                <Grid item>
                  <span>{video.landmark}</span>
                </Grid>

                <Grid item>
                  <span>{video.fact}</span>
                </Grid> */}

                <Grid item id='iframe-grid'>
                  <div className='video-container'>
                    <iframe
                      className='video-frame' 
                      src={video.src}
                      title="Vain Mainstream - Life Expectancy Tour" 
                      allowfullscreen='true'
                    >
                    </iframe>
                  </div>
                </Grid>

                <Grid item>
                  <span className='video-caption'>
                    Vain Mainstream - Life Expectancy Tour
                  </span>
                </Grid>
              </Item>
            </Grid>
          ))} 
       </Grid>
      </Box> 
    </section>
  );
};
  
export default TourVideoGallery;