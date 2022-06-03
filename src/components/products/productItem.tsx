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
            <Link to={`/${props.product.id}`}>
            <img style={imgStyle} src={props.product.image}/>
            </Link>
            <h4 style={{display: "flex", justifyContent: "center"}}>{props.product.title}</h4>
            <p style={{display: "flex", justifyContent: "center"}}>{props.product.price + " " + "kr"}</p> 
            {/* Lägg till button */}
        </div>
    ) 
}

export default ProductItem



const imgStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  
    width: "250px",
    height: "350px",
    objectFit: "cover",
    
  }


