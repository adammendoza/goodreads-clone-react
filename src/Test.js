import React, { Component } from 'react'
import axios from 'axios';

class Test extends React.Component {
    render() {
        const data = {
            name: 'Client Name',
            redirect: 'http://localhost:3000'
        };
        
        let response = axios.post('/oauth/clients', data)
            .then(response => {
                console.log(response.data);
            })
            .catch (response => {
                // List errors on response...
            });


        return (
            <div>
                {response}
            </div>
        )
    }
}

export default Test;
