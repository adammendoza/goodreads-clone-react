import React, { Component } from 'react'
// import $ from 'jquery';
import axios from 'axios';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        // this.state = [

        // ],
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault()

        const data = {
            email: 'hayden.nesbit@campusoutreach.org',
            password: 'sankey37'
        };

        axios.post('http://127.0.0.1:8000/api/login', data)
            .then(response => {
                console.log(response.data);
            })
            .catch(errors => {
                console.log(errors)
            });
    }

    render() {
        return (
            <div >
                <nav className="navbar navbar-expand-lg navbar-light px-5 pt-3">
                    <a id="brand" className="navbar-brand text-light" href="#">good<b>reads</b></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#"></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"></a>
                            </li>
                        </ul>
                        <form>
                            <div class="form-row align-items-center">
                                <div class="col-auto">
                                    <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Name"></input>
                                </div>
                                <div class="col-auto">
                                    <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Email address"></input>
                                </div>
                                <div class="col-auto">
                                    <button onClick={this.handleClick} type="submit" class="btn btn-secondary mb-2">Sign in</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </nav>

            </div>
        )
    }
}

export default Navbar;