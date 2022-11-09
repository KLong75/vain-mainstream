import React from "react";

// import './App.css'
import '../src/components/Header/style.css';
import '../src/components/Main/style.css';
import './components/musicPlayer/style.css';
import '../src/components/Footer/style.css';


import Header from './components/Header';
import Footer from "./components/Footer";
import Main from "./components/Main";
import MusicPlayer from "./components/musicPlayer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MusicPlayer></MusicPlayer>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
