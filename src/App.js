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
      user: { name: '' },
      books: []
    }
    this.handler = this.handler.bind(this);
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/books')
      .then(response => {
        this.setState({
          books: response.data.data
        })

      })
      .catch(errors => {
        console.log(errors)
      });
  }

  handler(newUser) {
    this.setState({
      user: newUser
    })
    console.log('here')
  }

  render() {

    return (
      <div>
        <div id="jumbo">
          <Navbar handler={this.handler} user={this.state.user} />
          <Switch>
            <Route exact={true} path="/">
              <Home handler={this.handler} user={this.state.user} />
            </Route>
            <Route path="/dashboard">
              <Dash user={this.state.user} books={this.state.books} />
            </Route>
          </Switch>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

const Home = (props) => (
  <div>
    {!props.user.name ?
      <NewUser />
      :
      null
    }

  </div>
)

const Dash = (props) => (
  <div>
    {props.user.name ?
      <div>
        <Dashboard user={props.user} />
        <BookSlide books={props.books} />
      </div>
      :
      null
    }

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
