import { Product } from '../../data/productlist' 
import { CSSProperties, FC } from "react"
import { Link } from 'react-router-dom';
import AddToCart from "../buttons/addToCart"
import react, {useState} from "react"
import {Button} from '@mui/material'
import {colors} from '../../data/colors'



interface Props {
    product: Product
}

/* Den gamla sectionItem som nu är NavigationItem - Detta visas på sidan*/

const ProductItem: FC<Props> = (props) => {

    //Ska ligga i contextmappen
  //  const[count, setCart] = useState(0)

  //  const handleAddToCart = () => {(props.product.id, 1);}
    return (
        <div>
            <Link to={`/${props.product.id}`}>
            <img style={imgStyle} src={props.product.image}/>
            </Link>
            <h4 style={{display: "flex", justifyContent: "center"}}>{props.product.title}</h4>
            <p style={{display: "flex", justifyContent: "center"}}>{props.product.price + " " + "kr"}</p> 
            <Button style={{backgroundColor: colors.third, color: colors.secondary}}variant="contained" onClick={() => console.log(props.product.title)}>
            Lägg i varukorgen
            </Button>
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


