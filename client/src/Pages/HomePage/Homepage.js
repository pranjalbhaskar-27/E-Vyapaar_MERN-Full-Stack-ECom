import React from 'react'
import prod from '../../prod'
import prods from '../../prod'
import Products from '../../components/Products/Products'

export default function Homepage() {
  return (
    <div className='row justify-content-center '>
      {prods.map((e,i)=>{
        return(
          <Products e={e} key={i}/>
        )
      })}
    </div>
  )
}
