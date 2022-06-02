import { Product } from '../../data/productlist' 
import { CSSProperties, FC } from "react"
import { Link } from 'react-router-dom';

interface Props {
    product: Product
}

/* Den gamla sectionItem som nu är NavigationItem - Detta visas på sidan*/

const ProductItem: FC<Props> = (props) => {

    return (
        <div> 
            <img style={imageSize} src={props.product.image}/>
            <h1>{props.product.title}</h1>
            <p>{props.product.price + " " + "kr"}</p>
        </div>
    )

}

export default ProductItem

const imageSize: CSSProperties = {
    width: "300px",
    height: "400px"
}


{/* <Link to={`/${props.product.id}`} >
<img style={imageSize} src={props.product.image}/>
<h1>{props.product.title}</h1>
</Link> */}