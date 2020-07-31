import React from "react"
import Product from "./Product"
import productsData from "./Data"


function App()
{
  const productComponents=
  productsData.map(item => <Product key={item.id} product={item}/>)

  return(
    <div>
      {productComponents}
    </div>
  )
}
export default App