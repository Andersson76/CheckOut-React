import React from "react"
import { CSSProperties, FC } from "react"
import { productList } from '../../data/productlist' 
import { imgContainer} from "../../css/common"
import { fontFamily, styleHeader } from "../../css/common"
import { colors } from "../../data/colors";
/* import AutoPlaySwipeableViews from "../heroslider" */
import ProductCard from "../pages-cards/productCard"

interface Props {}
 
 const Home : FC<Props> = (props) => {

        return (
         <>
     {/*     <AutoPlaySwipeableViews/> */}
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
