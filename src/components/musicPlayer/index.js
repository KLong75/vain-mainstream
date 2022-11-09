import React from 'react';

import cultOfP from '../../assets/audio/cult_of_personality.mp3';

const MusicPlayer = () => {
  return (
    <audio id='music-player' autoPlay='false'>
        <source src={cultOfP}></source>
    </audio>
        
  );
};

export default MusicPlayer;




