import { CSSProperties, FC } from "react"
import { colors } from "../data/colors"
import { productList } from '../data/productlist' 
import ProductItem from "../components/products/productItem"

interface Props {}

const Startpage: FC = (props) => {

  return ( 
    <div style={background}>
        {productList.map((products) => <ProductItem key={products.id} product={products} /> )}
    </div>
  )
}

export default Startpage


const background: CSSProperties = {
    backgroundColor: colors.primary

}