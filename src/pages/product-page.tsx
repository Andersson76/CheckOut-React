import { CSSProperties, FC } from "react"
import { Product } from '../data/productlist' 

/* Productsidan När vi klickar på en produkt kommer vi till detta elementet... 
Victors Detailview*/ 

interface Props {
    product: Product
}

const ProductPage: FC<Props> = (props) => {

    return (
        <div style={container}>
            <img style={imageSize} src={props.product.image} alt=""/>
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


/* const element: CSSProperties = {
    zIndex: 1 = h1 ligger över bilden..
} */