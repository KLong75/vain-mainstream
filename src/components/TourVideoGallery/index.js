// import from react
import React, { useState } from 'react';

// import CSS
import './TourVideoGallery.css';

//  import from MUI
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

// import from react-share
import FacebookShareButton from 'react-share/lib/FacebookShareButton';
// import TwitterShareButton from 'react-share/lib/TwitterShareButton';


const TourVideoGallery = () => {
  const [videos] = useState([

    {
      title: 'All I Really Want',
      original_artist: 'Alanis Morissette',
      location: 'Lisbon, Portugal',
      location_flag_src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/512px-Flag_of_Portugal.svg.png',
      flag_alt: 'Flag of Portugal',
      src: 'https://www.youtube.com/embed/I2WToQq4Pt8',
      date: '12/4/2022',
      share_url: 'youtu.be/I2WToQq4Pt8'
    },
    {
      title: 'Violent Pornography',
      original_artist: 'System Of A Down',
      location: 'Barcelona, Spain',
      location_flag_src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/512px-Bandera_de_Espa%C3%B1a.svg.png',
      flag_alt: 'Flag of Spain',
      src: 'https://www.youtube.com/embed/YSMddvEw0b0',
      date: '12/13/2022',
      share_url: 'youtu.be/YSMddvEw0b0'
    },
    {
      title: 'Girl, You Have No Faith In Medicine',
      original_artist: 'The White Stripes',
      location: 'Vatican City',
      location_flag_src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_the_Vatican_City.svg/256px-Flag_of_the_Vatican_City.svg.png',
      flag_alt: 'Flag of Vatican City',
      src: 'https://www.youtube.com/embed/FXOcwC8uHgs',
      date: '12/25/2022',
      share_url: 'youtu.be/FXOcwC8uHgs'
    }

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
      {/* <Box sx={{ flexGrow: 1 }} className='audio-share-box'>
        <Item className='track-paper' elevation={12}>
          <ShareComponent />
        </Item>
      </Box> */}
      <Box sx={{ flexGrow: 1 }}> 
        <Grid container spacing={4} >
          {videos.map((video) => (  
            <Grid xs={12} sm={6} md={4} key={video.title} className='video-grid' >
              <Item className='video-gallery-paper' elevation={12} >

                <Grid item className='video-title-grid' >
                  <h4 className='video-title'>{(`"${video.title}"`)}</h4>
                </Grid>

                <Grid item>
                  <h5 className='video-original-artist'>{`(${video.original_artist})`}</h5>
                </Grid>

                <Grid item>
                  <h6 className='video-location'>{`${video.location}`}</h6>
            
                  <img width="64" alt={video.flag_alt} src={video.location_flag_src} className='nation-flag'></img>
                </Grid>

                <Grid item id='iframe-grid'>
                  <div className='video-container'>
                    <iframe
                      className='video-frame' 
                      src={video.src}
                      title="Vain Mainstream - Life Expectancy Tour" 
                      allowFullScreen={true}
                    >
                    </iframe>
                  </div>
                </Grid>

                <Grid item>
                  <span className='video-caption'>
                    Life Expectancy Tour - {video.date}
                  </span>

                  <p className='share-video-text'>
                    Share Video:
                  </p>

                  <FacebookShareButton
                    url={`${video.share_url}`}
                    hashtag='#PleaseGiveMeADollar'
                  >
                    <FacebookIcon className='social-media-share-links' />
                  </FacebookShareButton>

                  {/* <TwitterShareButton
                    url={`${video.share_url}`}
                    title={`Vain Mainstream - ${video.title} (${video.original_artist}) ${video.location}`}
                    hashtags={['PleaseGiveMeADollar', 'VainMainstream', 'LifeExpectancyTour', 'YourLikeness']}
                    via={`VainMainstream`}
                  >
                    <TwitterIcon className='social-media-share-links'/>
                  </TwitterShareButton> */}

                  <a 
                    href={`https://twitter.com/intent/tweet?url=${video.share_url}&text=Vain%20Mainstream%20-%20${video.title}%20(${video.original_artist})%20${video.location}%20${video.date}&via=VainMainstream&hashtags=PleaseGiveMeADollar,YourLikeness,LifeExpectancyTour`} 
                    target="_blank" 
                    rel="nofollow noreferrer noopener">
                      <TwitterIcon className='social-media-share-links'/>
                  </a>
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