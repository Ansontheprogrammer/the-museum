import React from "react"
import "../styles/Card.styles.scss"
import {CartContext} from '../context/cart.context'
import { Card } from "../../typographics"
import clip from 'text-clipper';

export const formatPrice = (amount) => {
  let price = amount
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: 'USD',
    currencyDisplay: "symbol",
  })
  return numberFormat.format(price)
}

const SkuCard = class extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    const product = this.props.product
    Object.keys(product._variants).forEach(attribute => {
      const option = product._variants[attribute][0]
      this.setState({
        [attribute] : option
      })
    })
  }

  toggleSelectedVariation(attribute){
    return e => {
      this.setState({
        [attribute]: e.target.value
      })
    }
  }

  generateProductDescription(){
    let productDescription = '';
    Object.keys(this.state).forEach(key => {
      productDescription = productDescription.concat(this.state[key], ' ')
    })
    return productDescription
  }

  render() {
    const product = this.props.product
    const productImage = this.props.product.images.length ? this.props.product.images[0].originalSrc : null
    return (
      <Card>
        <div
          className="image"
          style={{
            backgroundImage: `${productImage ? `url(${productImage})` : ''}`,
            background: `${!productImage ? '#eee;' : null}`
          }}
        />
        <div className="text">
          <div className="title">
            <h4 style={{ color: "#333" }}>{product.title}</h4>
          </div>
          <p className="price">{formatPrice(product._price, product.currency)}</p>
          <p>
            {clip(product.description, 175) || "No description available"}
          </p>
        </div>
        
        {(
        <CartContext.Consumer>
          { cart => {
            if(!cart) return 
            return (
              <button className='cart-btn' onClick={cart.addToCart(product)}>Add To Cart</button>
            )}}
        </CartContext.Consumer> 
        )}
      </Card>
    )
  }
}

export default SkuCard