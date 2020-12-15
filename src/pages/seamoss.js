import React from "react"
import Layout from "../components/layout/layout"
import PageLayout from "../components/layout/page-layout"
import Products from "../components/products/components/products"
import SeaMossHeading from "../components/seamoss/seamoss-heading"
import { SpacingSm } from "../components/typographics"

const Shop = () => (
  <Layout designNumber={0} useCart={false} >
    <PageLayout title="Sea Moss">
      <SeaMossHeading />
      <div className='spacing'/>
      <h2>Seamoss Products</h2>
      <Products category='seamoss' displayAddToCartBtn={true} />
      <SpacingSm/>
    </PageLayout>
   </Layout> 
)

export default Shop
