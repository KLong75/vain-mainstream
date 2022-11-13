import React from 'react';
// import ReactDOM from 'react-dom';
// import ReactAudioPlayer from 'react-audio-player';

import cultOfP from '../../assets/audio/cult_of_personality.mp3';
import boombox from '../../assets/images/pixel_boombox.png';

const MusicPlayer = () => {
  return (
    <>
    <div id='music-box'>
      <h4>Vain Mainstream Radio</h4>
      <img src={boombox} alt='pixelated boombox' id='boombox-img'></img>
      <audio id='music-player' controls loop >
        <source src={cultOfP}></source>
      </audio>
    </div>
    </>
        
  );
};

export default MusicPlayer;
