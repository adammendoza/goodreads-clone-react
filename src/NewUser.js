import React, { Component } from 'react'

class NewUser extends React.Component {
    render() {
        return (

            <div class="jumbotron jumbotron-fluid bg-white mt-2">
                <div class="container">
                    <div className="row">
                        <div className="col-md-7 text-center">
                            <h1 class="display-4 pt-4">Meet your next <br/> favorite book.</h1>
                        </div>
                        <div className="col-md-4">
                            <form>
                            <h6><b>New here? Create a free account!</b></h6>
                                <div class="form-group">
                                    <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"></input>
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"></input>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                                </div>
                                <button type="submit" class="btn btn-warning">Sign up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewUser
