import React from 'react';
import './App.css';
import Navbar from './Navbar'
import Footer from './Footer'
import NewUser from './NewUser'
import Dashboard from './Dashboard'
import { BrowserRouter, Route } from 'react-router-dom'

function Wrapper() {
  return (
    <div className="App">
      <div id="jumbo">
        <Route exact={true} path="/" component={Home} />
        <Route path="/dashboard" component={Dash} />
      </div>
      <Footer />
    </div>
  );
}

const Home = () => (
  <div>
    <Navbar />
    <NewUser />
  </div>
)

const Dash = () => (
  <div>
    <Navbar />
    <Dashboard />
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <Wrapper />
    </BrowserRouter>
  )
}

export default App;
