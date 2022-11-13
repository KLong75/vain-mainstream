import React, { useState } from 'react';

// import all css files
import '../src/components/Header/style.css';
import '../src/components/Nav/style.css';
import '../src/components/TheMainstream/style.css';
import '../src/components/Tour/style.css';
import '../src/components/Album/style.css';
import '../src/components/CallToAction/style.css';
import '../src/components/Main/style.css';
import '../src/components/MusicPlayer/style.css';
import '../src/components/Footer/style.css';

// import all components
import Header from './components/Header';
import Mainstream from "./components/TheMainstream";
import Tour from "./components/Tour";
import Album from "./components/Album";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

// import Main from "./components/Main";
// import MusicPlayer from "./components/MusicPlayer";

const App = () => {

  const [currentPage, setCurrentPage] = useState('Mainstream');

  const renderView = () => {
    if (currentPage === 'Mainstream') {
      return <Mainstream />
    } else if (currentPage === 'Album') {
      return <Album />
    } else if (currentPage === 'Tour') {
      return <Tour />
    } else if (currentPage === 'CallToAction') {
      return <CallToAction />
    }
  }

  return (
    <div className="App">
      <Header 
        setCurrentPage={setCurrentPage}
        currentPage={currentPage} 
      />
      <main>
        { renderView() }
      </main>
      <Footer />
    </div>
  );
}

export default App;
