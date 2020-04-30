import React from 'react'
import DashNav from './DashNav'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ''
        }
    }

    


    render() {
        return (
            <div>
                <h1 className="text-white text-center mt-5">Hello</h1>
            </div>
        )
    }
}

export default Dashboard;
