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
// import worldOnFireGif from '../../assets/images/world_on_fire.gif';

const TourVideoGallery = () => {
  const [videos] = useState([
    {
      title: 'All I Really Want',
      original_artist: 'Alanis Morissette',
      location: 'Lisbon, Portugal',
      location_flag_src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/512px-Flag_of_Portugal.svg.png',
      flag_alt: 'Flag of Portugal',
      src: 'https://www.youtube.com/embed/CKuDsijE6Ow',
      date: '12/4/2022'
    },
    {
      title: 'Loser',
      original_artist: 'Beck',
      location: 'Waco, TX',
      location_flag_src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Texas.svg/512px-Flag_of_Texas.svg.png',
      flag_alt: 'Flag of Texas',
      src: 'https://www.youtube.com/embed/5XVP03JmRaI',
      date: '10/17/2022'
    },
    // {
    //   title: 'Violent Pornography',
    //   original_artist: 'System Of A Down',
    //   location: 'city, country',
    //   location_flag_src: '',
    //   flag_alt: '',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   title: 'Girl, You Have No Faith In Medicine',
    //   original_artist: 'The White Stripes',
    //   location: 'city, country',
    //   location_flag_src: '',
    //   flag_alt: '',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   title: 'Smooth',
    //   original_artist: 'Santana ft. Rob Thomas',
    //   location: 'city, country',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   title: 'Number 1',
    //   original_artist: 'Nelly',
    //   location: 'city, country',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   title: "Don't Tell Me",
    //   original_artist: 'Avril Lavigne',
    //   location: 'city, country',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   title: 'Feel No Ways',
    //   original_artist: 'Drake',
    //   location: 'city, country',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   title: 'Fake Plastic Trees',
    //   original_artist: 'Radiohead',
    //   location: 'city, country',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   title: 'Dancing Queen',
    //   original_artist: 'Abba',
    //   location: 'city, country',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   title: 'Change The World',
    //   original_artist: 'The Offspring',
    //   location: 'city, country',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   title: 'Wildest Dreams',
    //   original_artist: 'Taylor Swift',
    //   location: 'city, country',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   title: 'Dragon Attack',
    //   original_artist: 'Queen',
    //   location: 'city, country',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   title: 'All I Wanna Do',
    //   original_artist: 'Sheryl Crow',
    //   location: 'city, country',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   title: 'Sizzler Promotional Commercial 1991',
    //   original_artist: 'Sizzler',
    //   location: 'city, country',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   title: 'Parabola',
    //   original_artist: 'Tool',
    //   location: 'city, country',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   title: 'Basket Case',
    //   original_artist: 'Green Day',
    //   location: 'city, country',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   title: 'Ray Of Light',
    //   original_artist: 'Madonna',
    //   location: 'city, country',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    
    // {
    //   title: 'The Locomotion',
    //   original_artist: 'Carole King',
    //   location: 'city, country',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   title: 'Cult Of Personality',
    //   original_artist: 'Living Colour',
    //   location: 'city, country',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   title: 'Love in Plaster',
    //   original_artist: 'The Hives',
    //   location: 'city, country',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   title: 'Stand Out',
    //   original_artist: 'Tevin Campbell',
    //   location: 'city, country',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   title: 'Warrior',
    //   original_artist: 'The Yeah Yeah Yeahs',
    //   location: 'city, country',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   title: 'Just A Clown',
    //   original_artist: 'Charley Crockett',
    //   location: 'city, country',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    // {
    //   title: 'The Rockafeller Skank',
    //   original_artist: 'Fatboy Slim',
    //   location: 'city, country',
    //   src: 'https://www.youtube.com/embed/5XVP03JmRaI'
    // },
    
])

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
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
            <Grid xs={12} sm={6} md={4} key={video.title} className='video-grid' >
              <Item className='video-gallery-paper' elevation={12} >

                <Grid item className='video-title-grid' >
                  {/* <h3 id='video-title'>"{video.title}" </h3> */}
                  <h3 id='video-title'>{(`"${video.title}"`)}</h3>
                </Grid>

                <Grid item>
                  <h4 id='video-original-artist'>{`(${video.original_artist})`}</h4>
                </Grid>

                <Grid item>
                  <h4 id='video-location'>{`${video.location}`}</h4>
            
                  <img width="64" alt={video.flag_alt} src={video.location_flag_src} className='nation-flag'></img>
                </Grid>

                {/* <Grid item>
                  <img src={worldOnFireGif} alt='burning earth' className='vid-gallery-logo'></img>
                </Grid> */}

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
                      allowFullScreen='true'
                    >
                    </iframe>
                  </div>
                </Grid>

                <Grid item>
                  <span className='video-caption'>
                    Life Expectancy Tour - {video.date}
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