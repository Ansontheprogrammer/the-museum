import React from "react";
import "../styles/cart.styles.scss";
import { CartContext } from "../context/cart.context";
import { Card } from "../../typographics";
import clip from "text-clipper";

export const formatPrice = amount => {
  let price = amount;
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: "USD",
    currencyDisplay: "symbol"
  });
  return numberFormat.format(price);
};

const SkuCard = class extends React.Component {
  product;
  constructor(props) {
    super(props);
    this.state = {};
    this.product = this.props.product;
  }

  generateOptionString(name, value, index, lengthOfList) {
    if (index + 1 === lengthOfList) {
      return name + " " + value;
    } else {
      return name + " " + value + " -- ";
    }
  }

  getVariations = () => {
    if (!this.product._variants) return "";
    else if (Object.keys(this.state).length > 0) {
      let selectedVariantString = "";

      this.product._variants.forEach((option, index) => {
        Object.keys(this.state).forEach(optionInState => {
          const findOptionInState = Object.keys(this.state).find(
            optionInState => optionInState === option.name
          );
          if (!findOptionInState) {
            selectedVariantString += this.generateOptionString(
              option.name,
              option.default,
              index,
              this.product._variants.length
            );
          } else {
            selectedVariantString += this.generateOptionString(
              optionInState,
              this.state[optionInState],
              index,
              this.product._variants.length
            );
          }
        });
      });

      return selectedVariantString;
    } else {
      let selectedVariantString = "";
      this.product._variants.forEach((option, index) => {
        selectedVariantString += this.generateOptionString(
          option.name,
          option.default,
          index,
          this.product._variants.length
        );
      });
      return selectedVariantString;
    }
  };

  toggleSelectedVariation(attribute) {
    return e => {
      this.setState({
        [attribute]: e.target.value
      });
    };
  }

  render() {
    const product = this.product;
    const productImage = this.product.images.length
      ? this.product.images[0].originalSrc
      : null;
    return (
      <Card>
        <div
          className="image"
          style={{
            backgroundImage: `${productImage ? `url(${productImage})` : ""}`,
            background: `${!productImage ? "#eee;" : null}`
          }}
        />
        <div className="text">
          <div className="title">
            <h4 style={{ color: "#333" }}>{product.title}</h4>
          </div>
          <p>{clip(product.description, 175) || "No description available"}</p>
          <p className="price">
            {formatPrice(product._price, product.currency)}
          </p>
        </div>
        {!!product._variants &&
          product._variants.map((option, index) => (
            <select
              key={index}
              select={"true"}
              className="shop-selection"
              id={`variation-${option.name}`}
              onChange={this.toggleSelectedVariation(option.name).bind(this)}
            >
              <option defaultValue disabled>
                {option.name}
              </option>
              {option.variants.map((variation, index) => (
                <option key={index} className="variation-name">
                  {variation}
                </option>
              ))}
            </select>
          ))}
        {
          <CartContext.Consumer>
            {cart => {
              if (!cart) return;
              return (
                <button
                  className="cart-btn"
                  onClick={cart.addToCart({
                    // set variants equal to default if state is set
                    // if state set reset current state
                    ...product,
                    _selectedVariant: this.getVariations()
                  })}
                >
                  Add To Cart
                </button>
              );
            }}
          </CartContext.Consumer>
        }
      </Card>
    );
  }
};

export default SkuCard;
