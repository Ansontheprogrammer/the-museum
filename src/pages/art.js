import React from "react";
import Layout from "../components/layout/layout";
import PageLayout from "../components/layout/page-layout";
import Products from "../components/products/components/products";
import ArtHeroSection from "../components/art/artHero";
import { SpacingSm } from "../components/typographics";

const Shop = () => (
  <Layout designNumber={0} displayAddToCartBtn={true}>
    <PageLayout title="Art">
      <div>
        <ArtHeroSection />
        <SpacingSm />
      </div>
      <Products category="art" displayAddToCartBtn={true} />
      <SpacingSm />
    </PageLayout>
  </Layout>
);

export default Shop;
