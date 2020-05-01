import React from 'react'
import { Link } from 'react-router-dom'


class DashNav extends React.Component {
    render() {
        return (
            <div>
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
                        </ul>
                    </div>
                </nav>

            </div>
            </div>
        )
    }
}

export default DashNav;
