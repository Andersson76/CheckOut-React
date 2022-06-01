import { Product } from '../data/productlist' 
import { FC } from "react"
//import { Container } from '@mui/material'

interface Props {
    product: Product
}

const ProductItem: FC<Props> = (props) => {

    return (
        <div>
            <img src={props.product.image}/>
            <h1>{props.product.title}</h1>
            <p>{props.product.price + " " + "kr"}</p>
        </div>
    )

}

export default ProductItem