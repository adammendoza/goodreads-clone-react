import React from 'react'

function BookSlide(props) {


    return (
        <div className="container bg-light">
            <div className="row">
                {props.books.length ?
                    props.books.map((item, index) => {
                        console.log(item.url)
                        return (
                            <div className="col">
                                <div key={index} className="card mt-4" style={{ width: "18rem" }}>
                                    <img className="card-img-top" src={item.url} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{item.title}</h5>
                                        <p className="card-text">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )
                    :
                    null
                }
            </div>
        </div>
    )
}

export default BookSlide
