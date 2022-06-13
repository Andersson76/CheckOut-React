import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Layout from './layout'

const App: FC =() => {

  /* Renderar ut de som ligger i layouten */

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App