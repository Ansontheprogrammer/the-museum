import React from "react"
import Layout from "../components/layout/layout"
import PageLayout from "../components/layout/page-layout"
import Products from "../components/products/components/products"
import ArtHeroSection from "../components/art/artHero"

const Shop = () => (
  <Layout designNumber={0} displayAddToCartBtn={true} >
    <PageLayout title="Art">
      <div>
        <ArtHeroSection />
      </div>
      <Products type='art' displayAddToCartBtn={true} />
    </PageLayout>
   </Layout> 
)

export default Shop
