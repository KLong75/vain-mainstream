// import from react
import React from 'react';

// import components
import ShareComponent from '../ShareComponent';

// import TrackList
import { TrackList } from '../../utils/TrackList';

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


const TourVideoGallery = () => {

  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(0),
    textAlign: 'center',
  }));

  return (
    <section id='video-gallery-section'>
      <Box sx={{ flexGrow: 1 }} className='video-share-box'>
        <Item className='vid-share-paper' elevation={12}>
          <ShareComponent />
          <a 
            href='https://www.patreon.com/vainmainstream' target='_blank' rel="noreferrer" className='vid-patreon-link'
          >
            <p className='font-effect-fire-animation vid-patreon-link'>Click Here To Give Me a Dollar</p>
          </a>
        </Item>
      </Box>

      <Box sx={{ flexGrow: 1 }}> 
        <Grid container spacing={4} >
          {TrackList.map((video) => (  
            <Grid xs={12} sm={6} md={4} key={video.title} className='video-grid' >
              <Item className='video-gallery-paper' elevation={12} >

                <Grid className='video-title-grid' >
                  <h4 className='video-title'>{(`"${video.title}"`)}</h4>
                </Grid>

                <Grid>
                  <h5 className='video-original-artist'>{`(${video.original_artist})`}</h5>
                </Grid>

                <Grid>
                  <h6 className='video-location'>{`${video.location}`}</h6>
                  <img width="64" alt={video.flag_alt} src={video.location_flag_src} className='nation-flag'></img>
                </Grid>

                <Grid id='iframe-grid'>
                  <div className='video-container'>
                    <iframe
                      className='video-frame' 
                      src={video.vid_src}
                      title="Vain Mainstream - Life Expectancy Tour" 
                      allowFullScreen={true}
                    >
                    </iframe>
                  </div>
                </Grid>

                <Grid>
                  <span className='video-caption font-effect-fire-animation'>
                    Life Expectancy Tour - {video.date}
                  </span>

                  <p className='share-video-text'>
                    Share Video:
                  </p>
                  <FacebookShareButton
                    url={`${video.share_url}`}
                    hashtag='#PleaseGiveMeADollar'
                    aria-label='Share this video on Facebook'
                  >
                    <FacebookIcon className='vid-social-media-share-links' />
                  </FacebookShareButton>
                  <a 
                    href={`https://twitter.com/intent/tweet?url=${video.share_url}&text=Vain%20Mainstream%20-%20${video.title}%20(${video.original_artist})%20${video.location}%20${video.date}&via=VainMainstream&hashtags=PleaseGiveMeADollar,YourLikeness,LifeExpectancyTour`} 
                    target="_blank" 
                    rel="nofollow noreferrer noopener"
                    aria-label='Share this video on Twitter'>
                      <TwitterIcon className='vid-social-media-share-links'/>
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