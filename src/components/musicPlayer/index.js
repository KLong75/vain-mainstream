import React from 'react';
// import ReactDOM from 'react-dom';
// import ReactAudioPlayer from 'react-audio-player';

import cultOfP from '../../assets/audio/cult_of_personality.mp3';

const MusicPlayer = () => {
  return (
    <>
    <div id='music-box'>
    <h4>Vain Mainstream Radio</h4>
    <audio id='music-player' autoPlay controls loop >
        <source src={cultOfP}></source>
    </audio>
    </div>
    </>
        
  );
};

export default MusicPlayer;
