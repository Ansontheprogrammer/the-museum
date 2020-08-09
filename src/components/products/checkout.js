import React, { Component } from "react"
import "./paymentForm.css"

const loadSquareSdk = () => {
  return new Promise((resolve, reject) => {
    const sqPaymentScript = document.createElement("script")
    sqPaymentScript.src = "https://js.squareup.com/v2/paymentform"
    sqPaymentScript.crossorigin = "anonymous"
    sqPaymentScript.onload = () => {
      console.log('Loaded square payments')
      resolve()
    }
    sqPaymentScript.onerror = () => {
      reject(`Failed to load ${sqPaymentScript.src}`)
    }
    document.getElementsByTagName("head")[0].appendChild(sqPaymentScript)
  })
}

export default class PaymentForm extends React.Component {
  config = {
    applicationId: "sq0idp-pKotYot0J7sR9TLQobsB0g",
    inputClass: "sq-input",
    autoBuild: false,
    googlePay: {
      elementId: "sq-google-pay",
    },
    cardNumber: {
      elementId: "sq-card-number",
      placeholder: "• • • •  • • • •  • • • •  • • • •",
    },
    cvv: {
      elementId: "sq-cvv",
      placeholder: "CVV",
    },
    expirationDate: {
      elementId: "sq-expiration-date",
      placeholder: "MM/YY",
    },
    postalCode: {
      elementId: "sq-postal-code",
      placeholder: "Zip",
    },
    callbacks: {
      methodsSupported : () => {return},
      createPaymentRequest: () => {
        return {
          requestShippingAddress: false,
          requestBillingInfo: true,
          currencyCode: "USD",
          countryCode: "US",
          total: {
            label: "MERCHANT NAME",
            amount: "100",
            pending: false,
          },
          lineItems: [
            {
              label: "T-shirt",
              amount: "100",
              pending: false,
            },
          ],
        }
      },
      cardNonceResponseReceived:  (errors, nonce, cardData) => {
        if (errors) {
          // Log errors from nonce generation to the JavaScript console
          console.log("Encountered errors:")
          errors.forEach(function (error) {
            console.log(" Error in card nonce respon " + error.message)
          })
          return
        }
        fetch('http://localhost:3000/api/checkout', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({
            nonce
          })
        }).then(() => console.log('success'))
      },
      unsupportedBrowserDetected: () => {
        console.log('Browser doesnt support square')
      },
      inputEventReceived: inputEvent => {
        switch (inputEvent.eventType) {
          case "focusClassAdded":
            break
          case "focusClassRemoved":
            break
          case "errorClassAdded":
            document.getElementById("error").innerHTML =
              "Please fix card information errors before continuing."
            break
          case "errorClassRemoved":
            document.getElementById("error").style.display = "none"
            break
          case "cardBrandChanged":
            if (inputEvent.cardBrand !== "unknown") {
              this.setState({
                cardBrand: inputEvent.cardBrand,
              })
            } else {
              this.setState({
                cardBrand: "",
              })
            }
            break
          case "postalCodeChanged":
            break
          default:
            break
        }
      },
   
    },
  }

  constructor(props) {
    super(props)
    this.state = {
      cardBrand: "",
      nonce: undefined,
      paymentFormLoaded: false, 
      paymentForm: null
    }
    this.requestCardNonce = this.requestCardNonce.bind(this)
  }

  requestCardNonce(e) {
    this.state.paymentForm.requestCardNonce()
  }

  componentDidMount() {
    loadSquareSdk().then(() => {
      const paymentForm =  new window.SqPaymentForm(this.config)
      paymentForm.build()
      this.setState({
        paymentFormLoaded: true,
        paymentForm
      })
    })
  }

  render() {
    return (
      <div >
        <div id="form-container">
          <div id="sq-ccbox">
            <p>
              <span>Enter Card Info Below </span>
              <span>
                {this.state.cardBrand.toUpperCase()}
              </span>
            </p>
            <div id="cc-field-wrapper">
              <label>
                Card Number
                <div id="sq-card-number" />
              </label>
              <input type="hidden" id="card-nonce" name="nonce" />
              <label>
                Expiration Date
                <div id="sq-expiration-date" />
              </label>
              <label>
                CVV
                <div id="sq-cvv" />
              </label>
            </div>
            <label>
              Name
              <input
                id="name"
                type="text"
                placeholder="Name"
              />
            </label>
            <label>
              Postal Code
              <div id="sq-postal-code" />
            </label>
          </div>
          <button
            className="button-credit-card"
            onClick={this.requestCardNonce}
          >
            Pay
          </button>
        </div>
        <p id="error" />
      </div>
    )
  }
}
