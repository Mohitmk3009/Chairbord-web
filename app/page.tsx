import React from 'react'
import Header from './src/components/Header'
import TeamMembers from './src/components/TeamMembers'
import ProductsSection from './src/components/ProductsSection'
import SubCompany from './src/components/SubCompany'
import Footer from './src/components/Footer'
import AboutUs from './src/components/AboutUs'
import ImageCarousel from './src/components/ImageCarousel'

const page = () => {
  return (
    <>
      <Header />
      <ImageCarousel />
      <AboutUs/>
      <TeamMembers />
      <ProductsSection />
      <SubCompany />
      <Footer />
    </>
  )
}

export default page