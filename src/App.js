import React from 'react';
import './App.css';
import Navbar from './Navbar'
import Footer from './Footer'
import NewUser from './NewUser'
import Dashboard from './Dashboard'
import DashNav from './DashNav'
import BookSlide from './BookSlide'
import axios from 'axios';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: ''
    }
    this.handler = this.handler.bind(this);
  }

  // componentDidMount() {
  //   axios.get('http://127.0.0.1:8000/api/books')
  //     .then(response => {
  //       this.setState({
  //         books: response.data.data
  //       })

  //     })
  //     .catch(errors => {
  //       console.log(errors)
  //     });
  // }

  handler() {
    this.setState({
      user: this.state.user
    })
    console.log('here')
  }

  render() {

    return (
      <div>
        <div id="jumbo">
          <Switch>
            <Route exact={true} path="/">
              <Home state={this.state.books}/>
            </Route>
            <Route path="/dashboard">
              <Dash handler={this.handler} />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

const Home = () => (
  <div>
    <Navbar />
    <NewUser />
  </div>
)

const Dash = () => (
  <div>
    <DashNav />
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
