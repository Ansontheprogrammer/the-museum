import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import Logo from "../../images/zooty-logo.svg"

export default class Checkout extends React.Component {
    onToken = (token) => {
        
      }
     
  constructor(props){
    super(props)
  }

  render() {
    return (
      <StripeCheckout
        amount={parseInt(this.props.amount) * 100}
        billingAddress
        description={this.props.productDescription !== 'Default Title ' ? this.props.productDescription : ''}
        image={Logo}
        locale="auto"
        label="Buy Now"
        name={this.props.productName}
        stripeKey="pk_live_51H8uJ7Gf6ZJJv2J9mwy5FPxT4f08XOkQM93Hpt49DmP6o6Fh38LddxAVMSPp65hn2PWtpGwhBnmuWhzZuOUXmpXR007kGX0Fk7"
        token={this.onToken}
        panelLabel="Buy"
        allowRememberMe
        zipCode
      >
        <button>Buy Now</button>
      </StripeCheckout>
    )
  }
}