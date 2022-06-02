import { CSSProperties, FC} from "react"
import Layout from "./layout"
import { BrowserRouter } from "react-router-dom"
// Efter vi installerade route-dom så imorterar vi BrowserRouter . Efter det går vi vidare till content-page

/* BrowserRouter - En kompoent som startar igång Router Processen */

const App: FC = () => {

    return (
      <BrowserRouter>
        <Layout/>
      </BrowserRouter>   
    )
}

export default App


const item: CSSProperties = {

} 

