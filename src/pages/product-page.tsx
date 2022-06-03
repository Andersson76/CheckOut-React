import { CSSProperties, FC } from "react"
import { useParams, Navigate } from "react-router-dom";
import { Product, productList } from '../data/productlist' 

interface Props{}


const ProductPage : FC<Props> = (props) => {

    /* Find i productList */
    const { productId } = useParams()

    const foundProduct = productList.find((product) => Number(productId) == product.id)

    if(!foundProduct) {
        return <Navigate to ="/" />
    }

    return (
        <div style={container}>
            <img src={foundProduct!.image} alt="" />
        </div>
        )

}


export default ProductPage

const container: CSSProperties = {
    position: "relative"
}

const imageSize: CSSProperties = {
    position: "absolute",
    width: "50%",
    height: "50%"
}




   
