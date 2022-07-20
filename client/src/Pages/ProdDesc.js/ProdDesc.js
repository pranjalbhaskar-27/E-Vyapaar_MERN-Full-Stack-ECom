import React from 'react';
import Products from '../../components/Products/Products';
import { useParams } from 'react-router-dom';
import prods from '../../prod';

export default function ProdDesc({ match }) {
    const prodId = parseInt(useParams().id)
    console.log(prodId,"----")
    const prod = prods.find(el => el.id === prodId)
    console.log(prod,"prod")
    return (
        <div>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='card'>
                        {prodId.id}
                        <h1>{prod.name}</h1>
                        <img src={prod.image} alt='poor fellow using dummy images :(' />
                        <h2>Rating: {prod.rating}</h2>
                        <h2>Price: ₹{prod.price}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
