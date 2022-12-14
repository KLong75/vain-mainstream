// import from react
import React, { useState } from 'react';

// import CSS
import './TourVideoGallery.css';

//  import from MUI
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2/Grid2';


const TourVideoGallery = () => {
  const [videos] = useState([

    {
      title: 'All I Really Want',
      original_artist: 'Alanis Morissette',
      location: 'Lisbon, Portugal',
      location_flag_src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/512px-Flag_of_Portugal.svg.png',
      flag_alt: 'Flag of Portugal',
      src: 'https://www.youtube.com/embed/I2WToQq4Pt8',
      date: '12/4/2022'
    },
    {
      title: 'Violent Pornography',
      original_artist: 'System Of A Down',
      location: 'Barcelona, Spain',
      location_flag_src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/512px-Bandera_de_Espa%C3%B1a.svg.png',
      flag_alt: 'Flag of Spain',
      src: 'https://www.youtube.com/embed/YSMddvEw0b0',
      date: '12/13/2022'
    },

   
    // {
    //   title: '',
    //   original_artist: '',
    //   location: 'Waco, TX',
    //   location_flag_src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Texas.svg/512px-Flag_of_Texas.svg.png',
    //   flag_alt: 'Flag of Texas',
    //   src: '',
    //   date: '10/17/2022'
    // },
   
    
])

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(0),
  textAlign: 'center',
}));

  return (
    <section id='video-gallery-section'>
      <Box sx={{ flexGrow: 1 }}> 
        <Grid container spacing={4} >
          {videos.map((video) => (  
            <Grid xs={12} sm={6} md={4} key={video.title} className='video-grid' >
              <Item className='video-gallery-paper' elevation={12} >

                <Grid item className='video-title-grid' >
                  <h3 id='video-title'>{(`"${video.title}"`)}</h3>
                </Grid>

                <Grid item>
                  <h4 id='video-original-artist'>{`(${video.original_artist})`}</h4>
                </Grid>

                <Grid item>
                  <h4 id='video-location'>{`${video.location}`}</h4>
            
                  <img width="64" alt={video.flag_alt} src={video.location_flag_src} className='nation-flag'></img>
                </Grid>

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