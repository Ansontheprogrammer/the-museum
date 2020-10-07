import React from "react"
import Layout from "../components/layout/layout"
import PageLayout from "../components/layout/page-layout"
import Barbers from "../components/barbers/wrapper"
import { SpacingSm } from "../components/typographics"

const Shop = () => (
  <Layout designNumber={1} displayAddToCartBtn={true} >
    <PageLayout title="Our Barbers">
      <Barbers/>
      <SpacingSm/>
    </PageLayout>
   </Layout> 
)

export default Shop
