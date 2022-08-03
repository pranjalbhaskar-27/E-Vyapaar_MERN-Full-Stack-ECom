import React from 'react'
import { Link } from 'react-router-dom'
import Rating from 'react-rating';

export default function Products({products}) {
  console.log(products._id,"productss")

  return (
    <div className='col-md-3 m-2 text-align-center card' key={products.i}>

      <Link to={`product/${products._id}`} style={{ textDecoration: 'none' }}>
        <h1>{products.name}</h1>
        <img src={products.image} alt='poor fellow using dummy images :(' />
        <div className='stars'>
        <Rating
          style={{color:"orange"}}
          initialRating={products.rating}
          emptySymbol="far fa-star fa-0.5x"
          fullSymbol="fa fa-star fa-0.5x"
          readonly={true}
        />
        </div>

        <h2>Price: ₹{products.price}</h2>

      </Link>
    </div>
  )
}

// hwc349hb
