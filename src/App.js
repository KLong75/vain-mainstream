// import from React
import React, { useState } from 'react';

// import from react-helmet-async
// import { HelmetProvider } from 'react-helmet-async';

// import all components
import Header from './components/Header';
import Mainstream from "./components/TheMainstream";
import Tour from "./components/Tour";
import Album from "./components/Album";
import Footer from "./components/Footer";

const App = () => {

  const [currentPage, setCurrentPage] = useState('Mainstream');

  const renderView = () => {
    if (currentPage === 'Mainstream') {
      return <Mainstream />
    } else if (currentPage === 'Album') {
      return <Album />
    } else if (currentPage === 'Tour') {
      return <Tour />
    } 
  }

  return (
    <div className="App">
      <Header 
        setCurrentPage={setCurrentPage}
        currentPage={currentPage} 
      />
      <main className='main' id='main'>
        { renderView() }
      </main>
      <Footer />
    </div>
  );
}

export default App;
