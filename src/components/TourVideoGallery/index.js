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
import worldOnFire from '../../assets/images/try_this_one.gif';

const TourVideoGallery = () => {
  const [videos] = useState([
    {
      city: 'city, state',
      date: '12/31/2023',
      landmark: 'cool or strange landmark associated with this place',
      fact: 'here at this cool or strange landmark something cool or strange or interesting once happened',
      title: 'All I Really Want',
      src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    },
    {
      city: 'city, state',
      date: '12/31/2023',
      landmark: 'cool or strange landmark associated with this place',
      fact: 'here at this cool or strange landmark something cool or strange or interesting once happened',
      title: 'Violent Pornography',
      src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    },
    
    {
      city: 'city, state',
      date: '12/31/2023',
      landmark: 'cool or strange landmark associated with this place',
      fact: 'here at this cool or strange landmark something cool or strange or interesting once happened',
      title: 'Girl, You Have No Faith In Medicine',
      src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    },
    // { 
    //   city: 'city, state',
    //   date: '12/31/2023',
    //   landmark: 'cool or strange landmark associated with this place',
    //   fact: 'here at this cool or strange landmark something cool or strange or interesting once happened',
    //   title: 'Smooth',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   city: 'city, state',
    //   date: '12/31/2023',
    //   landmark: 'cool or strange landmark associated with this place',
    //   fact: 'here at this cool or strange landmark something cool or strange or interesting once happened',
    //   title: 'Number 1',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   city: 'city, state',
    //   date: '12/31/2023',
    //   landmark: 'cool or strange landmark associated with this place',
    //   fact: 'here at this cool or strange landmark something cool or strange or interesting once happened',
    //   title: "Don't Tell Me",
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   city: 'city, state',
    //   date: '12/31/2023',
    //   landmark: 'cool or strange landmark associated with this place',
    //   fact: 'here at this cool or strange landmark something cool or strange or interesting once happened',
    //   title: 'Feel No Ways',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   city: '',
    //   date: '',
    //   landmark: '',
    //   fact: '',
    //   title: 'Fake Plastic Trees',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   city: '',
    //   date: '',
    //   landmark: '',
    //   fact: '',
    //   title: 'Dancing Queen',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   city: '',
    //   date: '',
    //   landmark: '',
    //   fact: '',
    //   title: 'Change The World',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   city: '',
    //   date: '',
    //   landmark: '',
    //   fact: '',
    //   title: 'Wildest Dreams',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   city: '',
    //   date: '',
    //   landmark: '',
    //   fact: '',
    //   title: 'Dragon Attack',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   city: '',
    //   date: '',
    //   landmark: '',
    //   fact: '',
    //   title: 'All I Wanna Do',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   city: '',
    //   date: '',
    //   landmark: '',
    //   fact: '',
    //   title: 'Sizzler Promotional Commercial 1991',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   city: '',
    //   date: '',
    //   landmark: '',
    //   fact: '',
    //   title: 'Parabola',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   city: '',
    //   date: '',
    //   landmark: '',
    //   fact: '',
    //   title: 'Basket Case',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   city: '',
    //   date: '',
    //   landmark: '',
    //   fact: '',
    //   title: 'Ray Of Light',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    {
      city: 'Waco, TX',
      date: '9/11/2001',
      landmark: 'Branch Davidian Compound',
      fact: '',
      title: 'Loser',
      src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    },
    // {
    //   city: '',
    //   date: '',
    //   landmark: '',
    //   fact: '',
    //   title: 'The Locomotion',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   city: '',
    //   date: '',
    //   landmark: '',
    //   fact: '',
    //   title: 'Cult of Personality',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   city: '',
    //   date: '',
    //   landmark: '',
    //   fact: '',
    //   title: 'Love in Plaster',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   city: '',
    //   date: '',
    //   landmark: '',
    //   fact: '',
    //   title: 'Stand Out',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   city: '',  
    //   date: '',
    //   landmark: '',
    //   fact: '',
    //   title: 'Warrior',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   city: '',
    //   date: '',
    //   landmark: '',
    //   fact: '',
    //   title: 'Just A Clown',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   city: '',
    //   date: '',
    //   landmark: '',
    //   fact: '',
    //   title: 'The Rockafeller Skank',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
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
          {videos.map((video) => (  
            <Grid xs={12} sm={6} lg={4}key={video.title} className='video-grid' >
              <Item className='video-gallery-paper' elevation={12} >
                <Grid item className='video-title-grid' >
                  <h3 id='video-title'>"{video.title}"</h3>
                </Grid>

                <Grid item>
                  <img src={worldOnFire} alt='burning earth' className='vid-gallery-logo'></img>
                </Grid>

                <Grid item>
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
                </Grid>

                <Grid item id='iframe-grid'>
                  <div className='video-container'>
                    <iframe
                      className='video-frame' 
                      src={video.src}
                      title="Vain Mainstream - Life Expectancy Tour" 
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