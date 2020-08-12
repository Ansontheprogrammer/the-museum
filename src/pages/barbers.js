import React from "react"
import Layout from "../components/layout/layout"
import PageLayout from "../components/layout/page-layout"
import Products from "../components/products/components/products"
import Barbers from "../components/barbers/wrapper"

const Shop = () => (
  <Layout designNumber={1} displayAddToCartBtn={true} >
    <PageLayout title="Our Barbers">
      <Barbers/>
    </PageLayout>
   </Layout> 
)

export default Shop
