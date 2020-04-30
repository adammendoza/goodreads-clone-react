import React from 'react';
import './App.css';
import Navbar from './Navbar'
import Footer from './Footer'
import NewUser from './NewUser'
import { BrowserRouter as Router } from 'react-router-dom'

function Wrapper(){
  return (
    <div className="App">
      <div id="jumbo">
        <Navbar />
        <NewUser />
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return(
    <Router>
      <Wrapper />
    </Router>
  )
}

export default App;
