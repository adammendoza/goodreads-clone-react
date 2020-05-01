import React from 'react';
import './App.css';
import Navbar from './Navbar'
import Footer from './Footer'
import NewUser from './NewUser'
import Dashboard from './Dashboard'
import BookSlide from './BookSlide'
import axios from 'axios';


class App extends React.Component {
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
  }

  render() {

    return (
      <div>
        <div id="jumbo">
          <Navbar handler={this.handler} user={this.state.user} />
          {!this.state.user.name ?
          <NewUser />
          :
          <Dashboard user={this.state.user} />
          }
        </div>
        <div>
          {this.state.books && this.state.user.name ?
          <BookSlide books={this.state.books} />
          :
          null}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
