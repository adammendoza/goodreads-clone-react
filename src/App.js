import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Footer from './Footer'
import NewUser from './NewUser'

function App() {
  return (
    <div className="App">
      <Navbar />
      <NewUser />
      <Footer />
    </div>
  );
}

export default App;
