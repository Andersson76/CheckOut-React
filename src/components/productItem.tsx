import { Products } from '../data/productlist' 
import { FC } from "react"
import { Container } from '@mui/material'

interface Props {
    product: Products
}

const ProductItem: FC<Props> = (props) => {

    return (
        <Container>
            <img src={props.product.image}/>
            <h1>{props.product.title}</h1>
            <p>{props.product.price + " " + "kr"}</p>
        </Container>
    )

}

export default ProductItem