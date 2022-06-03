import { CSSProperties, FC} from 'react'
import { Link } from "react-router-dom"
import Productpage from "../pages/product-page"
import Startpage from "../pages/startpage"
import CheckOut from "../pages/checkout-page"


interface Props {}

const Navmenu: FC<Props> = (props) => {
    return (
        <div style={styleHeader}>

            <Link /* style={styleLogo} */ to={"/"}>Björn Borg</Link> {/* Representerar loggan */}

            <Link to={"/"}>Hem</Link>

            {/* <Link to={"/:productId"}>Produkt</Link> */}
            <Link to={"/checkout-page"}>Varukorg</Link> {/* Ikon?? */}
        </div>
    )
}



/* import { NavLink } from "react-router-dom" 

<NavLink to="./pages/startpage">Home</NavLink>  */

export default Navmenu


const styleLogo: CSSProperties = {

}

const styleHeader: CSSProperties = {
    width: "100%",
    height: "140px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px"

}