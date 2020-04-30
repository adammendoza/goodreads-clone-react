import React, { Component } from 'react'
import './NewUser.css'
import axios from 'axios'


class NewUser extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e) {
        e.preventDefault()

        const data = {
            name: 'carl',
            email: 'carl@gmail.com',
            password: 'carl1234'
        };

        axios.post('http://127.0.0.1:8000/api/register', data)
            .then(response => {
                console.log(response.data);
            })
            .catch(errors => {
                console.log(errors)
            });

    }
    render() {
        return (
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-7 text-center">
                        <h1 className="display-4 pt-4 text-warning"> Meet your next <br /> favorite book.</h1>
                    </div>
                    <div className="col-md-4">
                        <form>
                            <h6 className="text-warning"><b>New here? Create a free account!</b></h6>
                            <div className="form-group">
                                <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"></input>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"></input>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                            </div>
                            <button onClick={this.handleClick} type="submit" className="btn btn-warning">Sign up</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewUser
