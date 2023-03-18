import React from 'react'
import {NavBar,PurchasePage,Footer} from './components'

const App = () => {
  return <>
  <div className="screen">
    <NavBar/> 
    <PurchasePage/>
    <Footer/>
  </div>
  </>
}

export default App