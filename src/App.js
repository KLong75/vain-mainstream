import React from "react";

// import all css files
import '../src/components/Header/style.css';
import '../src/components/Nav/style.css';
import '../src/components/Tour/style.css';
import '../src/components/Album/style.css';
import '../src/components/CallToAction/style.css';
import '../src/components/Main/style.css';
import '../src/components/MusicPlayer/style.css';
import '../src/components/Footer/style.css';


import Header from './components/Header';
import Tour from "./components/Tour";
import Album from "./components/Album";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Main from "./components/Main";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Tour></Tour>
      <Album></Album>
      <CallToAction></CallToAction>
      {/* <MusicPlayer></MusicPlayer> */}
      {/* <Main></Main> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
