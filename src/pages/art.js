import React, { useEffect, useState } from "react";
import Layout from "../components/layout/layout";
import PageLayout from "../components/layout/page-layout";
import Products from "../components/products/components/products";
import ArtHeroSection from "../components/art/art-hero";
import { SpacingSm } from "../components/typographics";
import { getKbuttaProducts } from "../api/multiVendor";

const Shop = () => {
  const [kButtaProducts, setkButtaProducts] = useState([]);
  useEffect(() => {
    getKbuttaProducts().then((products) => {
      setkButtaProducts(products);
    });
  }, []);
  return (
    <Layout designNumber={0} displayAddToCartBtn={true}>
      <PageLayout title="Art">
        <div>
          <ArtHeroSection />
          <SpacingSm />
        </div>
        <Products
          multiVendor={kButtaProducts}
          category="art"
          displayAddToCartBtn={true}
        />
        <SpacingSm />
      </PageLayout>
    </Layout>
  );
};

export default Shop;
