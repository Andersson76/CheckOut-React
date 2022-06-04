import React from "react"
import { CSSProperties, FC } from "react"
import { colors } from "../../data/colors"
import { Product, productList } from '../../data/productlist' 
import ProductCard from "../products/productCard"


interface Props {
  product: Product
}

const Home: FC = (props) => {

  return ( 
    <div style={imgContainer}>
          {
               productList.map((product) => 
                    <ProductCard key={product.id} product={product} />
               ) 
            }
    </div>
  )
}


export default Home



/* const background: CSSProperties = {
    backgroundColor: colors.primary

} */
const imgContainer: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "1em",
  paddingTop: "3em",
  paddingBottom: "3em"
}
