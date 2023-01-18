// import from react
import React from 'react';

// import CSS
import './ShareComponent.css';

// import from mui

import Grid from '@mui/material/Unstable_Grid2';

import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';

// import from react-share
import FacebookShareButton from 'react-share/lib/FacebookShareButton';
// import TwitterShareButton from 'react-share/lib/TwitterShareButton';
import { EmailShareButton } from 'react-share';


const ShareComponent = () => {

    return (
      <Grid container spacing={1} >
        <Grid item xs={12} ><span className='share-text'>Share:</span></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={2}>
          <FacebookShareButton
            url={'https://vainmainstream.com/'}
            hashtag='#PleaseGiveMeADollar'
          >
            <FacebookIcon className='social-media-share-links' />
          </FacebookShareButton>
        </Grid>

        {/* <Grid item xs={2}>
          <TwitterShareButton
            url={'https://vainmainstream.com/'}
            title='Vain Mainstream'
            hashtags={['PleaseGiveMeADollar', 'VainMainstream', 'LifeExpectancyTour', 'YourLikeness']}
            via={'VainMainstream'}
          >
            <TwitterIcon className='social-media-share-links'/>
          </TwitterShareButton>
        </Grid> */}

        <Grid xs={2}>
          <a href='https://twitter.com/intent/tweet?url=vainmainstream.com&text=Follow%20Vain%20Mainstream%20on%20the%20Life%20Expectancy%20Tour%20@&via=VainMainstream&hashtags=PleaseGiveMeADollar,YourLikeness,LifeExpectancyTour,VainMainstream' target="_blank" rel="nofollow noreferrer noopener">
            <TwitterIcon className='social-media-share-links'/>
          </a>
        </Grid>

        <Grid item xs={2}>
          <EmailShareButton
            url={`Support on Patreon:\npatreon.com/vainmainstream\n\nFollow on social media:\ntwitter.com/vainmainstream\ninstagram.com/vainmainstream\nyoutube.com/@VainMainstream\n#PleaseGiveMeADollar\n#YourLikeness\n#LifeExpectancyTour\n#VainMainstream\n\n`}
            subject='Follow Vain Mainstream on the Life Expectancy Tour @ vainmainstream.com'
            body={`Follow Vain Mainstream on the Life Expectancy Tour @ vainmainstream.com\n`}
            separator={`\n`}
          >
            <EmailIcon className='social-media-share-links' />
          </EmailShareButton>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    )
}

export default ShareComponent;