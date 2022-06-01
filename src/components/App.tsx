/* import React from 'react' */
import { productList } from '../data/productlist' 
import { FC } from "react"
import ProductItem from "./productItem"
import { Container } from '@mui/material'
/* import { Container, Grid } from '@mui/material' */

const App: FC = (props) => {

  return (
    <Container>
        {productList.map((products) => <ProductItem key={products.id} product={products} /> )}
    </Container>
  )
}

export default App 
