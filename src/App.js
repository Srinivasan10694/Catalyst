import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import {Navigation} from './components/Navigation'
import {Section} from './components/Section'
import About from './components/About'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
      <Section /> <br />
      <About />
      </BrowserRouter>
      
      {/* <Forms /> */}
      {/* <Fetchdata /> */}
    </div>
  );
}

export default App;
