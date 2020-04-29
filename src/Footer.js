import React, { Component } from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer className="footer mt-auto pt-3 bg-light pb-2">
                    <div className="container text-left text-muted">
                        <h6><b>COMPANY</b></h6>
                        <ul className="list-unstyled">
                            <li>About us</li>
                            <li>Careers</li>
                            <li>Terms</li>
                            <li>Help</li>
                        </ul>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;
