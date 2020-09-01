import React, { Component } from "react"
import Layout from "../components/layout/layout"
import PageLayout from "../components/layout/page-layout"
import Products from "../components/products/components/products"
import "../components/products/styles/ProductWrapper.styles.scss"

const Shop = () => (
  <Layout useCart={true} >
    <PageLayout title="Our Products">
      <div className='shop-wrapper'>
        <div className='spacer'>
          <Products displayAddToCartBtn={true} />
        </div>
      </div>
    </PageLayout>
   </Layout> 
)

export default Shop
