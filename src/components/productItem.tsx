import { productList, Products } from '../data/productlist' 
import { FC } from "react"

interface Props {
    product: Products
}

const ProductItem: FC<Props> = (props) => {

    return (
        <div>
            <img src={props.product.image}/>
            <h1>{props.product.title}</h1>
            <p>{props.product.price}</p>
        </div>
    )

}

export default ProductItem