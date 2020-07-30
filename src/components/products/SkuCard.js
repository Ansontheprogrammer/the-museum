import React from "react"
import "./Card.styles.scss"
import config from '../../../config/config'
import StripeCheckout from './StripeCheckout'

const formatPrice = (amount, currency) => {
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
      <div className="cardStyles">
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
            {product.description || "No description available"}
          </p>
          {Object.keys(product._variants).length > 1 && (
            <div className='variations'>
              {Object.keys(product._variants).map(attribute => {
                return (
                  <>
                <select className='shop-selection' onChange={this.toggleSelectedVariation(attribute).bind(this)}>
                  <option defaultValue disabled>{attribute}</option>
                  {product._variants[attribute].map(option => {
                      return (
                        <>
                          <option className='variation-name'>{option}</option>
                        </>
                      )
                    })
                  }
                </select>
              </>
                )
              })}
              
              {product.variants.map(variation => {
                return <div
                    className="variation-image"
                    style={{
                      backgroundImage: `url(${variation.image})`,
                    }}
                  />
              }).slice(1)
            }
          </div>
        )}
        </div>
        
        <StripeCheckout productName={this.props.product.title} productDescription={this.generateProductDescription()} amount={this.props.product._price}/>
      </div>
    )
  }
}

export default SkuCard
