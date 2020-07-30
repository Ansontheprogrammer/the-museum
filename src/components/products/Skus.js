import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"
import SkuCard from "./SkuCard"

import "./ProductWrapper.styles.scss"
import config from "../../../config/config"

class Skus extends Component {
  state = {
    stripe: null,
  }
  componentDidMount() {
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
          let products = allShopifyProduct.edges.filter(product => {
            // Filter products by vendor
            return product
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
                  <SkuCard key={i} product={product.node}/>
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

export default Skus