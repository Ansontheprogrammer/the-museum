import React, { Fragment } from "react";
import "../components/products/styles/product-wrapper.styles.scss";
import { CartContext } from "../components/products/context/cart.context";
import Layout from "../components/layout/layout";
import { Loading } from "../components/products/components/loading";
import PageLayout from "../components/layout/page-layout";
import axios from "axios";
import { formatPrice } from "../components/products/components/product-card";
import config from "../../config/config";
import { navigate } from "gatsby";

export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardBrand: "",
      nonce: undefined,
      paymentFormLoaded: false,
      paymentForm: null,
      paypal: null,
      showSquareCheckoutForm: null,
      checkoutSuccess: false,
      products: null
    };
    this.generatePaypalButtons = this.generatePaypalButtons.bind(this);
    this.setPaypalScripts = this.setPaypalScripts.bind(this);
  }

  componentDidMount() {
    this.setPaypalScripts();
    this.setState({
      paypal: window.paypal
    });
  }

  setPaypalScripts() {
    if (!window.paypal) {
      const script = document.createElement("script");
      script.src = `https://www.paypal.com/sdk/js?client-id=AZswhoudLfZvanXDERMGG-oA1yXUvo3C0v4co0E-uUIrp8qAfPUS_RcYpxXjodM57c4nHyn2cw1DarZW&currency=USD`;
      script.async = true;

      document.body.appendChild(script);
    }
  }

  getTotal(productsList) {
    let total = 0;
    productsList.forEach(product => {
      total += parseFloat(product._price);
    });

    return {
      total: total.toFixed(2),
      ae: (total * 0.02).toFixed(2)
    };
  }

  generatePaypalButtons(cart) {
    const productsList = cart.productsInCart;
    const order = new Checkout().generateMessage(productsList);
    const calculations = this.getTotal(productsList);
    const total = calculations.total;
    if (this.state.paypal)
      this.state.paypal
        .Buttons({
          style: {
            shape: "rect",
            color: "gold",
            layout: "vertical",
            label: "paypal"
          },
          createOrder: function(data, actions) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: total,
                    breakdown: {
                      item_total: {
                        currency_code: "USD",
                        value: total
                      }
                    }
                  },
                  items: new Checkout().generateItems(productsList)
                }
              ]
            });
          },
          onApprove: function(data, actions) {
            return actions.order.capture().then(async function(details) {
              const { email_address: email } = details.payer;
              const { value: saleAmount } = details["purchase_units"][0].amount;
              const shipping = details["purchase_units"][0].shipping;
              const {
                address_line_1: street,
                admin_area_1: state,
                admin_area_2: city,
                postal_code: zipcode
              } = shipping.address;
              const { full_name: name } = shipping.name;
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
                }
              };
              new Checkout().sendConfirmationEmailToVendor(checkoutDetails);
              new Checkout().sendConfirmationEmailToAEInc(
                calculations.ae,
                checkoutDetails
              );
              navigate("/confirmation", {
                state: {
                  order: order,
                  cart: JSON.stringify(cart)
                }
              });
            });
          }
        })
        .render("#paypal-button-container");
    return <div />;
  }

  async sendConfirmationEmailToVendor(customerDetails) {
    return await this.sendEmail(customerDetails, config.vendorEmail);
  }

  async sendConfirmationEmailToAEInc(ourIncome, checkoutDetails) {
    const messageBody = {
      checkoutDetails,
      message: "Customer just checked and we made for $" + ourIncome
    };
    return await this.sendEmail(messageBody, config.aeEmail);
  }

  async sendEmail(messageBody, toEmail) {
    const url = `${config.aeSystemURL}/api/send/email`;
    try {
      await axios({
        url,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        data: JSON.stringify({
          ...messageBody,
          to: toEmail
        })
      });
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  }

  generateItems(productList) {
    const products = {};
    productList.forEach(product => {
      const productID = `${product.title} ${product._selectedVariant}`;
      if (!products[productID]) {
        products[productID] = product;
        products[productID].quantity = 1;
      } else {
        products[productID].quantity++;
      }
    });

    return Object.keys(products).map(product => {
      return {
        name: product,
        unit_amount: {
          value: products[product]._price,
          currency_code: "USD"
        },
        description: products[product].body_html,
        quantity: products[product].quantity.toString()
      };
    });
  }

  generateMessage(productList) {
    let message = "Checkout details: ";
    const products = {};
    productList.forEach(product => {
      const productID = `${product.title} ${product._selectedVariant}`;
      if (!products[productID]) {
        products[productID] = product;
        products[productID].quantity = 1;
      } else {
        products[productID].quantity++;
      }
    });

    for (let product in products) {
      message += products[product].quantity + " " + product + " | ";
    }
    return message;
  }

  productsJSX = cart => {
    if (!this.state.paypal) return;
    const products = {};
    cart.productsInCart.forEach(product => {
      // generate option string
      const productID = `${product.title} ${product._selectedVariant}`;
      if (!products[productID]) {
        products[productID] = product;
        products[productID].quantity = 1;
      } else {
        products[productID].quantity++;
      }
    });

    return Object.values(products).map(product => (
      <div style={{ display: "block" }}>
        <div style={{ padding: "15px", paddingBottom: "20px" }}>
          {product.images.length && (
            <img
              style={{ height: "150px", width: "150px" }}
              src={product.images[0].originalSrc}
            />
          )}
          <p>{product.title}</p>
          <p>{product.vendor}</p>
          <p>{formatPrice(product._price)}</p>
          <p>{product._selectedVariant}</p>
          <p>Quantity: {product.quantity}</p>
        </div>
      </div>
    ));
  };

  render() {
    return (
      <Layout useCart={false}>
        <PageLayout title="Checkout">
          <CartContext.Consumer>
            {cart => {
              if (!cart) return <Loading />;
              if (cart.productsInCart.length === 0) {
                return (
                  <div
                    style={{
                      display: "flex",
                      padding: "15px",
                      justifyContent: "center",
                      height: "50vh",
                      alignItems: "center"
                    }}
                  >
                    <p style={{ textAlign: "center", fontSize: "20px" }}>
                      There are currently no products in your cart
                    </p>
                  </div>
                );
              } else {
                return (
                  <div style={{ display: "block" }}>
                    <div
                      style={{
                        textAlign: "center",
                        minWidth: "300px",
                        maxWidth: "300px",
                        margin: "auto"
                      }}
                      id="paypal-button-container"
                    />
                    {this.state.checkoutSuccess && (
                      <div
                        style={{
                          display: "flex",
                          padding: "15px",
                          justifyContent: "center",
                          height: "50vh",
                          alignItems: "center"
                        }}
                      >
                        <p style={{ textAlign: "center", fontSize: "20px" }}>
                          Checkout Successful
                        </p>
                      </div>
                    )}
                    {this.state.paypal ? (
                      <>{this.generatePaypalButtons(cart)}</>
                    ) : (
                      <Loading />
                    )}
                    <div>
                      <p
                        style={{
                          paddingBottom: "25px",
                          fontSize: "18px",
                          textAlign: "center"
                        }}
                      >
                        Total: ${this.getTotal(cart.productsInCart).total}
                      </p>
                      {this.state.paypal && (
                        <h2
                          style={{
                            fontSize: "32px",
                            marginTop: "3vh",
                            marginBottom: "3vh",
                            color: "black",
                            textAlign: "center"
                          }}
                        >
                          Cart
                        </h2>
                      )}
                    </div>
                    <div className="productWrapper">
                      {this.productsJSX(cart)}
                    </div>
                  </div>
                );
              }
            }}
          </CartContext.Consumer>
        </PageLayout>
      </Layout>
    );
  }
}
