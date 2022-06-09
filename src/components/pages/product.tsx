import React from "react"
import { CSSProperties, FC } from "react"
import { productList } from '../../data/productlist' 
import ProductCard from "../pages-cards/productCard"
import { imgContainer} from "../../css/common"
import { fontFamily, styleHeader } from "../../css/common"
import { colors } from "../../data/colors";

interface Props {}
 
 const Products : FC<Props> = (props) => {

        return (
         <>
            <div>
                <h2 style={{...fontFamily, ...styleHeader, padding: "20px"}}>Alla Produkter</h2>
            </div>
    
            <div style={{...imgContainer}}>
                  {
                       productList.map((product) => 
                            <ProductCard key={product.id} product={product} /> /* Tar in Componenten ProductCard */
                       ) 
                    }
            </div>
        </>
      )
} 

export default Products



