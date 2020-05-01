import React from 'react'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <h1 className="text-white text-center mt-5">Welcome back, {this.props.user}</h1>
            </div>
        )
    }
}

export default Dashboard;
