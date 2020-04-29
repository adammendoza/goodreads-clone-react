import React from 'react';
import './App.css';
import Navbar from './Navbar'
import Footer from './Footer'
import NewUser from './NewUser'

function App() {
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

export default App;
