import React, { Fragment } from "react"
import "../components/products/styles/ProductWrapper.styles.scss"
import { CartContext } from "../components/products/context/cart.context"
import { formatPrice } from "../components/products/components/productCard"
import Layout from "../components/layout/layout"
import { Loading } from "../components/products/components/loading"
import PageLayout from "../components/layout/page-layout"

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
    return total.toFixed(2)
  }

  generatePaypalButtons(productsList){
    const total = this.getTotal(productsList)
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
          return actions.order.capture().then(async function(details) {
              // const { email_address: email} = details.payer;
              const { value: saleAmount } = details['purchase_units'][0].amount
              const shipping = details['purchase_units'][0].shipping
              const {address_line_1: street, admin_area_1: state, admin_area_2: city, postal_code: zipcode } = shipping.address
              const { full_name: name } = shipping.name
              const checkoutDetails = {
                name, 
                address: {
                  street,
                  state,
                  city,
                  zipcode
                },
                saleAmount
              }
              new Checkout().sendVendorConfirmation(productsList, checkoutDetails)
              alert('Transaction successful!');
          });
      }
  }).render('#paypal-button-container');
    return <div/>
  }
  
  productsJSX = cart => {
    if(!this.state.paypal) return
    const products = {}
    cart.productsInCart.forEach(product => {
      if(!products[product.title]) {
        products[product.title] = product
        products[product.title].quantity = 1
      } else {
         products[product.title].quantity++
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
          <p>{formatPrice(products[product.title]._price)}</p>
        <p>Quantity: {product.quantity}</p>
        </div>
      </div>
    ))
  }

  sendVendorConfirmation(productList, customerDetails){
    const body = JSON.stringify({
      content: 'Hello, World',
      pushContent: 'You got a new sale 🔥',
      pushTitle: 'New Sale!',
      pushToFollowers: 'anson_ervin9102'
    })
    
    const phoneNumberToSendToo = process.env.NODE_ENV === 'develop' ? '9082097544' : '3027455878'
    const emailToSendToo = process.env.NODE_ENV === 'develop' ? 'ansonervin@gmail.com' : 'esko831@gmail.com'
    const textUrl = `http://localhost:80/v1/send/text/${phoneNumberToSendToo}`
    const emailUrl = `https://application-form-server.glitch.me/`
    const generateMessage = () => {
      let message = "Here are the client's cart details:";
      const products = {}
      productList.forEach(product => {
        if(!products[product.title]) {
          products[product.title] = product
          products[product.title].quantity = 1
        } else {
           products[product.title].quantity++
        }
      })
      Object.values(products).forEach(product => {
        message += ' ' + product.quantity + ' ' + product.title
      })
      return message
    }
  
    // send text to john that someone started checking out
    // await fetch(textUrl, {
    //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //   mode: 'cors', // no-cors, *cors, same-origin
    //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //   credentials: 'same-origin', // include, *same-origin, omit
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   redirect: 'follow', // manual, *follow, error
    //   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //   body: JSON.stringify({
    //     ...this.state.formData,
    //     message: this.generateMessage(productList)
    //   }) // body data type must match "Content-Type" header
    // })
    // send email to john that someone started checking out
    // email notification
    fetch(emailUrl, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({
        ...customerDetails,
        message: generateMessage(productList),
        sendTo: emailToSendToo
      })
    })
    // push notification
    fetch('https://api.spontit.com/v3/push',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': 'EEN2F3SMK31E5DUO5MZKHS3K0EGHBLY2ME8CRRBMIT8Q1LEEW6OFSS9A963833RQAL2CF6ZO0B4DBBI50ILYKAC9ZRYPEXD0KCGA',
        'X-UserId': 'aer'
      },
      body
    }, function (error, response, body) {
      console.log('Status:', response.statusCode);
      console.log('Headers:', JSON.stringify(response.headers));
      console.log('Response:', body);
    }).catch(console.error)
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
                <div style={{marginTop: '10%', display: "block"}}>
                  <div style={{
                          textAlign: "center",
                          minWidth: '300px',
                          maxWidth: '300px',
                          margin: 'auto'
                        }} id='paypal-button-container'/>
                  {this.state.paypal ?
                      <div>
                        {this.generatePaypalButtons(cart.productsInCart)}

                        <p style={{paddingBottom: '25px', fontSize: '18px', textAlign: 'center'}}>Total: ${this.getTotal(cart.productsInCart)}</p>
                        
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