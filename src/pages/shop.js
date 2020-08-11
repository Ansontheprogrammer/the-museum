import React from "react"
import Layout from "../components/layout/layout"
import PageLayout from "../components/layout/page-layout"
import Products from "../components/products/Skus"

const Shop = () => (
  <Layout designNumber={1} displayAddToCartBtn={true} >
    <PageLayout title="Our Products">
      <Products displayAddToCartBtn={true} />
    </PageLayout>
   </Layout> 
)

export default Shop
