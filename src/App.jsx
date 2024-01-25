import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomeProducts from './Components/products/HomeProducts'
import AddProductFormMen from './Components/products/AddProductFormMen'
import AddProductFormWomen from './Components/products/AddProductFormWomen'

const App = () => {
  return (
    <div>
      <HomeProducts />
      <AddProductFormMen />
      <AddProductFormWomen />
      
    </div>
  )
}

export default App