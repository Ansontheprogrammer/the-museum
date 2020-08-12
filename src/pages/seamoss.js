import React from "react"
import Layout from "../components/layout/layout"
import PageLayout from "../components/layout/page-layout"
import Products from "../components/products/components/products"

const Shop = () => (
  <Layout designNumber={1} displayAddToCartBtn={true} >
    <PageLayout title="Sea Moss">
      <Products displayAddToCartBtn={true} />
    </PageLayout>
   </Layout> 
)

export default Shop
