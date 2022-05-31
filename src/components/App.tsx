/* import { List } from '@mui/material' */
/* import React from 'react' */

import { productList } from '../data/productlist' 
import { FC } from "react"
import ProductItem from "./productItem"


const App: FC = (props) => {

  return (
      <div>
          {productList.map((products) => <ProductItem key={products.id} product={products} />)}
      </div>
  )
}

export default App