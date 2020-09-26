import React, { Fragment } from "react"
import "../components/products/styles/ProductWrapper.styles.scss"
import { CartContext } from "../components/products/context/cart.context"
import Layout from "../components/layout/layout"
import { Loading } from "../components/products/components/loading"
import PageLayout from "../components/layout/page-layout"
import axios from 'axios'
import { formatPrice } from "../components/products/components/productCard"

export default class Checkout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cardBrand: "",
      nonce: undefined,
      paymentFormLoaded: false, 
      paymentForm: null,
      paypal: null,
      showSquareCheckoutForm: null,
      checkoutSuccess: null,
      products: null,
    }
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=AZswhoudLfZvanXDERMGG-oA1yXUvo3C0v4co0E-uUIrp8qAfPUS_RcYpxXjodM57c4nHyn2cw1DarZW&currency=USD`;
    script.async = true;

    document.body.appendChild(script);
    setTimeout(() => {
      this.setState({
        paypal: window.paypal
      })
    }, 2000 ) 
  }

  getTotal(productsList){
    let total = 0;
    productsList.forEach(product => {
      total += parseFloat(product._price)
    })

    return {
      total: total.toFixed(2),
      ae: (total * 0.02).toFixed(2)
    }
  }

  generatePaypalButtons(productsList){
     const calculations = this.getTotal(productsList)
    const total = calculations.total
    if(this.state.paypal) this.state.paypal.Buttons({
      style: {
          shape: 'rect',
          color: 'gold',
          layout: 'vertical',
          label: 'paypal',
          
      },
      createOrder: function(data, actions) {
          return actions.order.create({
              purchase_units: [{
                  amount: {
                      value: total
                  }
              }]
          });
      },
      onApprove: function(data, actions) {
        const order = new Checkout().generateMessage(productsList);
        return actions.order.capture().then(async function(details) {
            const { email_address: email} = details.payer;
            const { value: saleAmount } = details['purchase_units'][0].amount
            const shipping = details['purchase_units'][0].shipping
            const {address_line_1: street, admin_area_1: state, admin_area_2: city, postal_code: zipcode } = shipping.address
            const { full_name: name } = shipping.name
            const checkoutDetails = {
              customer: {
                name, 
                email,
                address: {
                  street,
                  state,
                  city,
                  zipcode
                },
              order
              },
            }
            new Checkout().sendConfirmationEmailToVendor(checkoutDetails)
            new Checkout().sendConfirmationEmailToAEInc(calculations.ae, order)
            alert('Transaction successful!');
        });
    }
}).render('#paypal-button-container');
  return <div/>
}

async sendConfirmationEmailToVendor(customerDetails){
  const url = `https://ae-api.glitch.me/api/send/email`
  try {
    await axios({
      url,
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify({
        ...customerDetails,
        to: 'zootythebarber@gmail.com'
      })
    })
    return Promise.resolve()
  } catch(err){
    return Promise.reject(err)
  }
}

async sendConfirmationEmailToAEInc(ourIncome, order){
  const url = `https://ae-api.glitch.me/api/send/email`
  try {
    await axios({
      url,
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify({
        order,
        message: 'Customer just checked and we made for $' + ourIncome,
        to: 'ansonervin@gmail.com'
      })
    })
    return Promise.resolve()
  } catch(err){
    return Promise.reject()
  }
}

generateMessage(productList){
  let message = "Here are the client's cart details: ";
  const products = {}
  productList.forEach(product => {
    let optionString = '- '
    // generate option string
    // product._variants.forEach(option => {
    //   if(!Object.values(option)[0] === undefined){
    //     for(let key in option){
    //       optionString += key + ' ' + option[key] + ' '
    //     }
    //   }
    // })
    const productID = `${product.title} ${optionString}`;
    if(!products[productID]) {
      products[productID] = product
      products[productID].quantity = 1
    } else {
       products[productID].quantity++
    }
  })
  
  for(let product in products){
    message += '\n' + product + ' ' +  products[product].quantity + ' -- '
  }
  return message
}

productsJSX = cart => {
  if(!this.state.paypal) return
  const products = {}
  cart.productsInCart.forEach(product => {
    let optionString = '---- '
    // generate option string
    Object.keys(product._variants).forEach(option => {
      console.log(option, 'option')
      for(let key in option){
        optionString += ' ' + option[key]
      }
    })
    const productID = `${product.title} ${optionString}`;
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
          <img style={{height: '150px', width:'150px'}} src={product.images[0].src}/>
        }
        <p>{product.title}</p>
        <p>{product.vendor}</p>
        <p>{formatPrice(product._price)}</p>
        {Object.keys(product._variants).map(attribute => {
          for(let key in attribute){
            if(!attribute[key]) return <div/>
            return <p>{key} - {attribute[key]}</p>
          }
        })}
      <p>Quantity: {product.quantity}</p>
      </div>
    </div>
    ))
  }

  render() {  
    return (
      <Layout 
        useCart={false}
      >
        <PageLayout title='Checkout'>
            <CartContext.Consumer>
            { cart => {
                if(!cart) return <Loading/> 
                return cart.productsInCart.length > 0 ? (
                <div style={{ display: "block"}}>
                  <div style={{
                          textAlign: "center",
                          minWidth: '300px',
                          maxWidth: '300px',
                          margin: 'auto'
                        }} id='paypal-button-container'/>
                  {this.state.paypal ?
                      <div>
                        {this.generatePaypalButtons(cart.productsInCart)}

                        <p style={{paddingBottom: '25px', fontSize: '18px', textAlign: 'center'}}>Total: ${this.getTotal(cart.productsInCart).total}</p>
                        
                        {this.state.paypal && <h2 style={{fontSize: '32px', marginTop: '3vh', marginBottom: '3vh', color: 'black', textAlign: 'center'}}>Cart</h2>}
                      </div>
                    : <Loading/>
                  }

                  <div className='productWrapper'>
                    {this.productsJSX(cart)}
                  </div>
                </div>
              ) :
              (
                <div style={{display: 'flex', padding: '15px', justifyContent: 'center', height: '2vh'}}>
                  <p style={{textAlign: 'center', fontSize: '20px'}}>There are currently no products in your cart</p>
                </div>
              )
            }}
          </CartContext.Consumer>
        <p id="error" />  
        </PageLayout>
      </Layout>
    )
  }
}