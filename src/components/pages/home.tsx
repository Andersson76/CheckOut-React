import React from "react"
import { CSSProperties, FC } from "react"
import { productList } from '../../data/productlist' 
import ProductCard from "../products/productCard"
import { imgContainer} from "../../css/common"
import { fontFamily, styleHeader } from "../../css/common"
import { colors } from "../../data/colors";

interface Props {}
 
 const Home : FC<Props> = (props) => {

        return (
         <>
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

export default Home
