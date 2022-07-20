import React from 'react'
import { Link } from 'react-router-dom'

export default function Products(props) {
    // console.log(props)
    
  return (
    <div className='col-md-3 m-4 text-align-center card' key={props.i}>
        <Link to={`product/${props.e.id}`} style={{textDecoration:'none'}}>
            <h1>{props.e.name}</h1>
            <img src={props.e.image} alt='poor fellow using dummy images :(' />
            <h2>Rating: {props.e.rating}</h2>
            <h2>Price: ₹{props.e.price}</h2>
        </Link>  
    </div>
  )
}

// hwc349hb
