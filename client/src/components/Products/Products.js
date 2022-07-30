import React from 'react'
import { Link } from 'react-router-dom'
import Rating from 'react-rating';

export default function Products(props) {
  // console.log(props)

  return (
    <div className='col-md-3 m-2 text-align-center card' key={props.i}>

      <Link to={`product/${props.e.id}`} style={{ textDecoration: 'none' }}>
        <h1>{props.e.name}</h1>
        <img src={props.e.image} alt='poor fellow using dummy images :(' />
        <div className='stars'>
        <Rating
          style={{color:"orange"}}
          initialRating={props.e.rating}
          emptySymbol="far fa-star fa-0.5x"
          fullSymbol="fa fa-star fa-0.5x"
          readonly={true}
        />
        </div>

        <h2>Price: ₹{props.e.price}</h2>

      </Link>
    </div>
  )
}

// hwc349hb
