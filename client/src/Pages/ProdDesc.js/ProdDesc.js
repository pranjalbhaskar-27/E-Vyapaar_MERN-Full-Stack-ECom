import React from 'react';
import Products from '../../components/Products/Products';

export default function ProdDesc({match}) {
    // const prodId=match.params.id;
    console.log(match)
  return (
    <div>
        {match}
    </div>
  )
}
 