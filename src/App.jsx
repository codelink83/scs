import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './compnents/Nav'
import Shop from './page/Shop'
import ShopCategory from './page/ShopCategory'
import Product from './page/Product'
import Cart from './page/Cart'
import LoginSignup from './page/LoginSignup'
import SkinCare from './pages/SkinCare'
import MakeUp from './pages/MakeUp'

const App = () => {
  return (
    <div>
       <Nav/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/skin-care' element={<SkinCare category="skin-care" />} />
        <Route path='/make-up' element={<MakeUp category="make-up" />} />
        <Route path='/bath-body' element={<ShopCategory category="bath-body" />} />
        <Route path='/hair' element={<ShopCategory category="hair" />} />
        <Route path='/fragnance' element={<ShopCategory category="fragnance" />} />
        <Route path='/accessories' element={<ShopCategory category="accessories" />} />
        <Route path='/kids-baby' element={<ShopCategory category="kids-baby" />} />
        <Route path='product' element={<Product/>}>
          <Route path=':productId' element={<Product/>} />
        </Route>
        <Route path='cart' element={<Cart/>} />
        <Route path='login' element={<LoginSignup/>} />
      </Routes>
      
      
     
    </div>
  )
}

export default App
