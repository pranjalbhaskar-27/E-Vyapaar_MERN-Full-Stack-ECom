import React from 'react';
import Products from '../../components/Products/Products';
import { useParams } from 'react-router-dom';
import Rating from 'react-rating';
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProdsById } from '../../actions/product.actions';





export default function ProdDesc({ match }) {

    

    const prods=[]
    const prodId = useParams().id
    console.log(prodId, "----")
    const prod = prods.find(el => el.id === prodId) 
    // console.log(prod.name, "prod")
     
    const dispatch=useDispatch();

    useEffect(()=>{

        dispatch(getProdsById(prodId))
    
    }, [])

    return (
        <div className='descDiv'>
            {/* <div className='row '>
                <div className='col-md-6'>
                    <div className='card p-2'>

                        <h1>{prod.name}</h1>
                        <img className="img-fluid m-3 descImg" src={prod.image} alt='poor fellow using dummy images :(' />
                        <div className='stars'>
                            <Rating
                                style={{color:"orange"}}
                                initialRating={prod.rating}
                                emptySymbol="far fa-star fa-0.5x"
                                fullSymbol="fa fa-star fa-0.5x"
                                readonly={true}
                            />
                        </div>
                        <h2>Price: ₹{prod.price}</h2>
                        <p>{prod.description}</p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='m-2'>
                        <h2>Price: ₹{prod.price}</h2>
                        <hr />
                        <div className='flex' style={{ display: 'flex' }}><div style={{ display: "flex" }}>
                            <h2 style={{ marginLeft: '0px', marginBottom: '0px', padding: '0px', marginRight: "5px" }}>Quantity</h2><span><select>
                                {[...Array(prod.countInStock)].map((e, i) => {
                                    return <option value={i + 1}>{i + 1}</option>
                                })}
                            </select></span></div>
                            <p className='quant'>{prod.countInStock ? (<p className='quantTxt'>(Currently in Stock: {prod.countInStock})</p>) : (<p className='quantTxt' style={{ color: 'red' }}>(Out Of Stalk)</p>)}</p>
                        </div>
                        {prod.countInStock ? <button className='btn btn-dark '>Add To Cart</button> : <button className='btn btn-dark disabled '>Add To Cart</button>}
                    </div>
                </div>
            </div> */}
        </div>
    )
}

// 