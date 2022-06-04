import React from 'react'
import { CSSProperties, FC } from 'react'
import { colors } from "../data/colors"
/* import Navmenu from "./navmenu" */
import Footer from "./footer"
import Home from "./pages/home"

/* Layout.tsx - representerar hela vår applikation - grund komponent till allt inkl header/navbar.   */

interface Props {}

const Layout: FC<Props> = (props) => {
    return (
        <div>
   {/*          <Navmenu/> */}
            <Home/>
            <Footer/>
        </div>
    )
}

export default Layout

const background: CSSProperties = {
    backgroundColor: colors.primary

}