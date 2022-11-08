import React from "react";

import './App.css'

import Header from './components/Header';
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className='font-link'>Vain Mainstream</h1>
      <h2 className='font-link'>"Life Expectancy Tour"</h2>
      <h3 className='font-link'> New Album Coming Soon: "Your Likeness"</h3>
      <Footer></Footer>
    </div>
  );
}

export default App;
