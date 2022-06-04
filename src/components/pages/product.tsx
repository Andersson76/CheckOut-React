import React from "react"
import { CSSProperties, FC } from "react"
import { useParams, Navigate } from "react-router-dom";
import { productList } from '../../data/productlist' 

interface Props {}

 const Product : FC<Props> = (props) => {

    const { productId } = useParams()

    const foundProduct = productList.find((product) => Number(productId) == product.id)

    if(!foundProduct) {
        return <Navigate to ="/" />
    }

    return (

        <div>
            <img src={foundProduct!.image} alt="" />
         </div>
    

        ) 

} 

export default Product





   
