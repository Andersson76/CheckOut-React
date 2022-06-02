import { CSSProperties, FC } from 'react'
import { colors } from "../data/colors"
import Navmenu from "./navmenu"
import Footer from "./footer"
import Startpage from "../pages/startpage"

/* Layout.tsx - representerar hela vår applikation - grund komponent till allt inkl header/navbar.   */

interface Props {}

const Layout: FC<Props> = (props) => {
    return (
        <div>
            <Navmenu/>
            <Startpage/>
            <Footer/>
        </div>
    )
}

export default Layout

const background: CSSProperties = {
    backgroundColor: colors.primary

}