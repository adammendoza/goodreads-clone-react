import React from 'react'

function BookSlide(props) {

        return (
            props.books.length ? 
            <div>
                <h1>{props.books[0].title}</h1>
            </div>
            :
            null
        )
    
}

export default BookSlide
