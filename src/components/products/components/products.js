import React, { Component, useState } from "react";
import { graphql, StaticQuery } from "gatsby";
import SkuCard from "./product-card";
import "../styles/product-wrapper.styles.scss";

class Products extends Component {
  constructor(props) {
    super(props);
  }

  mapVariations = (node) => {
    const variants = {};
    node.variants.forEach((variant) => {
      /* Convert variants to object
                {
                  variantName : string[]
                }
              */
      variant.selectedOptions.forEach((option) => {
        if (option.name.toLowerCase() === "title") return;
        if (variants[option.name]) {
          if (
            !variants[option.name].find((variant) => variant === option.value)
          ) {
            variants[option.name].push(option.value);
          }
        } else {
          variants[option.name] = [option.value];
        }
      });
    });
    // Convert variants to list
    const variantsToList = Object.keys(variants).map((optionName) => {
      return {
        name: optionName,
        variants: variants[optionName],
        default: variants[optionName][0],
      };
    });
    return variantsToList;
  };

  render() {
    return (
      <StaticQuery
        query={graphql`
          query shopifyProduct {
            allShopifyProduct {
              edges {
                node {
                  id
                  title
                  vendor
                  productType
                  priceRange {
                    minVariantPrice {
                      amount
                    }
                  }
                  description
                  images {
                    originalSrc
                  }
                  availableForSale
                  variants {
                    selectedOptions {
                      name
                      value
                    }
                    image {
                      originalSrc
                    }
                    title
                    availableForSale
                  }
                }
              }
            }
          }
        `}
        render={({ allShopifyProduct }) => {
          let products;

          products = allShopifyProduct.edges.map((edge) => edge.node);
          if (this.props.multiVendor)
            products = [].concat.apply(products, this.props.multiVendor);
          // Filter products by vendor
          products = products
            .filter((product) => {
              return this.props.vendor && this.props.vendor !== "all"
                ? product.vendor.toLowerCase() ===
                    this.props.vendor.toLowerCase()
                : true;
            })
            // Filter for product type. if none passed don't show art or seamoss
            .filter((product) => {
              if (this.props.category && this.props.category !== "all") {
                return (
                  product.productType.toLowerCase() ===
                  this.props.category.toLowerCase()
                );
              } else {
                // return false
                return (
                  product.productType.toLowerCase() !== "art" &&
                  product.productType.toLowerCase() !== "seamoss"
                );
              }
            });

          // remove products without pics
          products = products.filter((product) => !!product.images.length);
          // Limit products returned
          products = this.props.limit
            ? products.slice(0, this.props.limit)
            : products;

          return (
            <div
              className={`productWrapper ${
                this.props.perRow === 2 ? "productWrapper--2" : ""
              }`}
            >
              {products.map((product, i) => {
                const productNode = product.node ? product.node : product;
                productNode._price =
                  productNode.priceRange.minVariantPrice.amount;
                productNode._variants = this.mapVariations(productNode);

                return (
                  <div className="variations">
                    <SkuCard
                      key={i}
                      product={productNode}
                      useMultiVendor={this.props.multiVendor ? true : false}
                      displayAddToCart={this.props.displayAddToCartBtn}
                    />
                  </div>
                );
              })}
            </div>
          );
        }}
      />
    );
  }
}

export default Products;
