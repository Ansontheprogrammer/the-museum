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
          // remove products without pics
          .filter((product) => !!product.node.images.length)
          // Filter products by vendor
          .filter(product => {
            return this.props.vendor && this.props.vendor !== 'all' ? product.node.vendor.toLowerCase() === this.props.vendor.toLowerCase() : true
          })  
          // Filter for product type. if none passed don't show art or seamoss
          .filter(product => {
            if(this.props.category && this.props.category !== 'all') {
              return product.node.productType.toLowerCase() === this.props.category.toLowerCase()
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
              /* Convert variants to object
                {
                  variantName : string[]
                }
              */
              variant.selectedOptions.forEach(option => {
                if(option.name.toLowerCase() === 'title') return 
                if(variants[option.name]) {
                  if(!variants[option.name].find(variant => variant === option.value)) {
                    variants[option.name].push(option.value)
                  }
                } else {
                  variants[option.name] = [option.value]
                } 
              })
            })
            // Convert variants to list
            const variantsToList = Object.keys(variants).map(optionName => {
            return {
                name: optionName,
                variants: variants[optionName],
                default: variants[optionName][0]
              }
            })
            return variantsToList
          }

          return (
          <div className={`productWrapper ${this.props.perRow === 2 ? 'productWrapper--2' : ''}`}>
            {products
            .map((product, i) => {
              const productNode = product.node;
              productNode._price = productNode.priceRange.minVariantPrice.amount
              productNode._variants = mapVariations(productNode)

              return (
                <div className="variations">
                  <SkuCard key={i} product={productNode} displayAddToCart={this.props.displayAddToCartBtn}/>
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