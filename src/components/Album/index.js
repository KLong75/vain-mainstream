import React from 'react';
import AlbumTracks from '../AlbumTracks';


const Album = () => {
  return (
    <section id='album-div'>
      <h2 id='album-headline'>The New Album: "Your Likeness"</h2>
      <p>Info about the smash hit new album from international rock star  Vain Mainstream</p>
      <AlbumTracks />
    </section>
  );
};

export default Album;