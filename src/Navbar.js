import React, { Component } from 'react'
// import $ from 'jquery';


class Navbar extends React.Component {

    // componentDidMount() {
    //     $('.collapse').collapse()
    // }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light border-bottom">
                    <a className="navbar-brand" href="#"><h2>good<b>reads</b></h2></a>
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
                                    <button type="submit" class="btn btn-secondary mb-2">Sign in</button>
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