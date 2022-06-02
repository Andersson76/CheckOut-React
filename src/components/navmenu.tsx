import { CSSProperties, FC} from 'react'
import { Link } from "react-router-dom"
import Productpage from "../pages/product-page"
import Startpage from "../pages/startpage"
import CheckOut from "../pages/checkout-page"

/* Tips: Anänd callback props i Navbar och NavigationItem för att uppdatera statet i layouten */

interface Props {}

const Navmenu: FC<Props> = (props) => {
    return (
        <div>
            
            <Link to={"/"}>Björn Borg</Link> {/* Representerar loggan */}
            <Link to={"/"}>Hem</Link>

            <Link to={"/:productId"}>Produkt</Link>
            <Link to={"/checkout-page"}>Varukorg</Link>
        </div>
    )
}

export default Navmenu

const item: CSSProperties = {

}