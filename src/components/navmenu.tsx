
import { CSSProperties, FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { colors } from '../data/colors';
import { Product } from '../data/productlist';
import { fontLogo, fontFamily } from "../css/common"
import logotext from "../assets/logotext.jpg"
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import { CartContext } from "./context/cart-context" 

interface Props {
  product: Product
}

const Navmenu: FC<Props> = (props) => {

  const { itemInCart, addProductToCart } = useContext(CartContext)
  /* const totalPrice = itemInCart.reduce((acc,item) => acc + item.price, 0); */

    return (
        <div style={{position: "sticky"}}>
          <div style={{...styleNavmenu, ...fontFamily, paddingBottom: "30px"}}>
              <div>
                <Link style={{color: "black", textDecoration: "none", ...fontLogo}} to={"/"}><img src={logotext} width="40" height="25"></img></Link>
              </div> 
              
              <div>
                <Link style={navLinks} to={"/"}>HEM</Link>
                <Link style={navLinks} to={"/product"}>{}PRODUKTER</Link>
                <Link style={navLinks} to={"/category"}>{}HERR</Link>
                <Link style={navLinks} to={"/category1"}>{}DAM</Link>
                <Link style={navLinks} to={"/category2"}>{}ASSEC</Link>
              </div>
         
              <div> 
                <Link style={navLinks} to={"/checkout"} >{<ShoppingBagOutlinedIcon/>}</Link> 
               
                <span style={qtyStyle}>{itemInCart.length}</span> {/* Detta ska vi ändra & göra en funktion istället som gör att varukorgen uppdateras vaje gång vi lägger till en produkt, + 1.. */}

                 {/* onClick={() => 
                            addProductToCart(props.product)} */}


                {/*   <span>Total price: {totalPrice}</span>  */}
                <Link style={navLinks} to={"/checkout"}>{<FacebookOutlinedIcon/>}</Link>
                <Link style={navLinks} to={"/checkout"}>{<SubscriptionsOutlinedIcon/>}</Link>
              </div>
          </div>
        </div>
    );
}


export default Navmenu


/* const header: CSSProperties = {
  position: "absolute"
}
 */

const qtyStyle: CSSProperties = {
  fontSize: "8px",
  transform: "translate(150%, -220%)",
  backgroundColor: "#044778",
  color: "white",
  borderRadius: "50%",
  zIndex: "1",
  width: "15px",
  height: "15px",
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer"
  /* Fixa hover */

}

const navLinks: CSSProperties = {
    textDecoration: "none",
    margin: "8px",
    fontSize: "12px",
    color: colors.third,
  }
  
  const styleLogo: CSSProperties = {
    fontSize: "22px"
  }
  
  const styleNavmenu: CSSProperties = {
    width: "100%",
    height: "70px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-end",
    borderBottom: "1px solid #D0D0D0",
    marginBottom: "20px"
  }

