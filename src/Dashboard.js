import React from 'react'
import BookSlide from './BookSlide'

function Dashboard(props) {
   
        return (
            <div>
                <h1 className="text-white text-center mt-5">Welcome back, {props.user.name}</h1>
            </div>
        )
    }


export default Dashboard;
