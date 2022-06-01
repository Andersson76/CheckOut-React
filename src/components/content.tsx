import { productList } from '../data/productlist' 
import { FC } from "react"
import ProductItem from "./productItem"
//import { Container } from '@mui/material'

const Content: FC = (props) => {

  return (
    <div>
        {productList.map((products) => <ProductItem key={products.id} product={products} /> )}
    </div>
  )
}

export default Content