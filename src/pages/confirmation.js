import React from "react"
import "../components/products/styles/ProductWrapper.styles.scss"
import Layout from "../components/layout/layout"
import PageLayout from "../components/layout/page-layout"
import { formatPrice } from "../components/products/components/productCard"
import { SpacingSm } from "../components/typographics"

export default ({ location }) => {
    // const order = location.state.order
    let cart;
    if(location.state)  cart = JSON.parse(location.state.cart)

  const getTotal = (productsList) => {
    let total = 0;
    productsList.forEach(product => {
      total += parseFloat(product._price)
    })

    return {
      total: total.toFixed(2),
      ae: (total * 0.02).toFixed(2)
    }
  }

    const productsJSX = cart => {
    const products = {}
    cart.productsInCart.forEach(product => {
        // generate option string
        const productID = `${product.title} ${product._selectedVariant}`;
        if(!products[productID]) {
        products[productID] = product
        products[productID].quantity = 1
        } else {
        products[productID].quantity++
        }
    })

    return Object.values(products).map(product => (
        <div style={{display: 'block'}}>
        <div style={{padding: '15px', paddingBottom: '20px'}}>
            { product.images &&
            <img style={{height: '150px', width:'150px'}} src={product.images[0].originalSrc}/>
            }
            <p>{product.title}</p>
            <p>{product.vendor}</p>
            <p>{formatPrice(product._price)}</p>
            <p>{product._selectedVariant}</p>
        <p>Quantity: {product.quantity}</p>
        </div>
        </div>
        ))
    }

    return (
      <Layout useCart={false}>
        <PageLayout title='Confirmation'>
            {!cart? (
                <div style={{ display: "block"}}>
                    <div style={{display: 'flex', padding: '15px', justifyContent: 'center', height: '50vh', alignItems: 'center'}}>
                        <p style={{textAlign: 'center', fontSize: '20px'}}>No Products Cart</p>
                    </div>
                </div>
            ) : (
            <div style={{ display: "block"}}>
                <p style={{textAlign: 'center', fontSize: '20px'}}>Checkout Successful!</p>
                <SpacingSm/>
            <p style={{textAlign: 'center'}}>Today you paid ${getTotal(cart.productsInCart).total}</p>
            <div>
                <h2 style={{fontSize: '32px', marginTop: '3vh', marginBottom: '3vh', color: 'black', textAlign: 'center'}}>Cart</h2>
                {productsJSX(cart)}
            </div>
            </div> 
            )}
        </PageLayout>
      </Layout>
    )
  }