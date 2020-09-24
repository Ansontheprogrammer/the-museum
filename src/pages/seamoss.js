import React from "react"
import Layout from "../components/layout/layout"
import PageLayout from "../components/layout/page-layout"
import Products from "../components/products/components/products"
import SeaMossVideos from "../components/seamoss/seamossVideos"
import SeaMossHeading from "../components/seamoss/seamossHeading"

const Shop = () => (
  <Layout designNumber={0} useCart={false} >
    <PageLayout title="Sea Moss">
        <SeaMossHeading />
        <div className='spacing'/>
        <SeaMossVideos />
        <div className='spacing'/>
      <h1>Seamoss Products</h1>
      <Products category='seamoss' displayAddToCartBtn={true} />
    </PageLayout>
   </Layout> 
)

export default Shop
