import { CSSProperties, FC } from "react"
import { colors } from "../data/colors"
import { productList } from '../data/productlist' 
import ProductItem from "../components/products/productItem"


interface Props {}

const Startpage: FC = (props) => {

  return ( 
    <div style={{...background, ...imgContainer}}>
        {productList.map((product) => <ProductItem key={product.id} product={product} /> )}
    </div>
  )
}


export default Startpage



const background: CSSProperties = {
    backgroundColor: colors.primary

}
const imgContainer: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "3em",
  paddingTop: "3em",
  paddingBottom: "3em"
}
