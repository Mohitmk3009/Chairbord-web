import React from 'react'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Products from '../src/components/ProductsItems'

const page = () => {
  return (
    <div>
<Header/>
{/* <ProductsCarousel/> */}
<Products/>
<Footer/>
    </div>
  )
}

export default page