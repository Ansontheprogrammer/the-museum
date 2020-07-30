import React from "react"
import Layout from "../components/layout/layout"
import PageLayout from "../components/layout/page-layout"
import Products from "../components/products/Skus"

const Shop = () => (
  <Layout>
    <PageLayout title="Our Products">
      <Products />
    </PageLayout>
  </Layout>
)

export default Shop
