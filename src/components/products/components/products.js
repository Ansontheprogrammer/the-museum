import React, { Component, useState } from "react"
import { graphql, StaticQuery } from "gatsby"
import SkuCard from "../components/productCard"
import "../styles/ProductWrapper.styles.scss"


class Products extends Component {
  state = {
    stripe: null,
  }

  constructor(props){
    super(props);
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
        query shopifyProduct {
          allShopifyProduct{
            edges{
              node{
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
                images{
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
          let products = allShopifyProduct.edges
          // Filter products by vendor
          .filter(product => {
            return this.props.vendor ? product.node.vendor.toLowerCase() === this.props.vendor.toLowerCase() : true
          })  
          // Filter for product type. if none passed don't show art or seamoss
          .filter(product => {
            if(this.props.type) {
              return product.node.productType.toLowerCase() === this.props.type.toLowerCase()
            } else {
              // return false
              return product.node.productType.toLowerCase() !==  'art' && product.node.productType.toLowerCase() !==  'seamoss' 
            }
          })  
          // Limit products returned
          products = this.props.limit ? products.slice(0, this.props.limit) : products
          const mapVariations = (node) => {
            const variants = {}
            node.variants.forEach(variant => {
              variant.selectedOptions.forEach(option => {
                if(variants[option.name]) {
                  if(!variants[option.name].find(variant => variant === option.value)) {
                    variants[option.name].push(option.value)
                  }
                } else {
                  variants[option.name] = [option.value]
                } 
              })
            })
            return variants
          }

          return (
          <div className="productWrapper">
            {products.map((product, i) => {
              product.node._price = product.node.priceRange.minVariantPrice.amount
              product.node._variants = mapVariations(product.node)
              return (
                <div className="variations">
                  <SkuCard key={i} product={product.node} displayAddToCart={this.props.displayAddToCartBtn}/>
                </div>
              )
           })}
          </div>
        )}
      }
      />
    )
  }
}

export default Products