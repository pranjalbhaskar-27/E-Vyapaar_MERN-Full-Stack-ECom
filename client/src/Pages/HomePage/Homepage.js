import React from 'react'

import axios from "axios";
import Products from '../../components/Products/Products'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProds } from '../../actions/product.actions';


export default function Homepage() {


  const getAllProdsState = useSelector(state => state.getAllProdsReducer)

  const { loading, products, error } = getAllProdsState

  const dispatch = useDispatch()

  useEffect(() => {



    dispatch(getAllProds())

  }, [])
  // console.log(prods,"prodssssss")
  return (
    <div className='row justify-content-center '>
      {loading ? (<h1>Loading...</h1>) : products ? (
      
        products.map((el,i)=>{
          return <Products products={el} key={i} />
        })

      ) : error? (<h1>Something Went Wrong!</h1>) : (<h1>Just Wait haan..!</h1>)}
    </div>
  )
}
