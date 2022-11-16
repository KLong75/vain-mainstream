import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import pixelRecord from '../../assets/images/pixel_record.png';

const AlbumTracks = () => {
  const [tracks] = useState([
    {
      title: 'Cult of Personality',
      src: 'cult_of_personality.mp3'
    },
    {
        title: 'Dancing Queen',
        src: 'DQ_no_vox.mp3'
    },
    {
        title: 'Basket Case',
        src: 'bst_no_vox.mp3'
    },
  ])

  return (
    <section id='album-tracks-section'>
      {tracks.map((track) => (
        <div key={track.title}>
          <div>
           
            <h3 id='track-title'>{track.title}</h3>
            <img src={pixelRecord} alt='pixelated vinyl record' className='pixel-record'></img>
            <audio controls>
            <source src={require(`../../assets/audio/${track.src}`)}></source>
            </audio>
           
          </div>
        </div>

      ))} 
    </section>
  );
};
  
export default AlbumTracks;