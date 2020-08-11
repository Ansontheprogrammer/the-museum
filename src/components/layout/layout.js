import React, {useState} from "react"
import { Link } from "gatsby"
import MobileNav from "../navbar/mobile-nav"
import DesktopNav from "../navbar/desktop-nav"
import "./layout.scss"
import {Cart, CartContext} from "../../context/cart.context"
import {formatPrice} from "../products/SkuCard"
import Application from '../../../application'
import Sidebar from "react-sidebar";
import PaymentForm from "../../pages/checkout"

const generateDesign = (numberOfDesigns) => {
  const designJSX = [];
  for(let i=0; i <= numberOfDesigns - 1; i++){
    designJSX.push((
      <>
      <span className='circle first'/>
      <span className='circle'/>
      <span className='circle'/>
      <span className='circle last'/>
      {numberOfDesigns === 1 ? <div /> : <span className='line' /> }
      </>
    ))
  }
  return designJSX.map(jsx => jsx)
}


export const SideBar = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  let total = 0;

  const Products = props.products.map(product => {
    total += parseInt(product._price)
    return (
      <div style={{display: 'block'}}>
        <div style={{padding: '15px', paddingBottom: '20px'}}>
          <img style={{height: '150px', width:'150px'}} src={product.images[0].originalSrc}/>
          <p>{product.title}</p>
          <p>{formatPrice(product._price)}</p>
        </div>
      </div>
    )
  }).map(jsx => jsx)
  return (
    <Sidebar
      sidebar={
        <div style={{textAlign: 'center'}}>
          <p style={{paddingTop: '20px', fontSize: '22px'}}>Products</p>
          {Products}
          <p style={{paddingTop: '16px', paddingBottom: '16px', fontSize: '22px'}}>Total: {formatPrice(total)}</p>
          
              <button style={{marginBottom: '20px'}} onClick={() => props.toggleCheckoutComponent()}>Go to Checkout</button>
         
        </div>
      }
      open={sidebarOpen}
      onSetOpen={setSidebarOpen}
      styles={{ sidebar: { background: "white", minWidth: '25%', position: 'fixed', zIndex: 100}}}
    >
      <button className='sidebar-btn' onClick={() => {
        if(props.showingCheckout) props.toggleCheckoutComponent();
        if(!props.showingCheckout) setSidebarOpen(true)
      }}>
        {props.showingCheckout ? 'Shop' : 'Checkout'}
      </button>
    </Sidebar>
  )
}

class Layout extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showCheckoutComponent: false
    }
    this.toggleCheckoutComponent =  this.toggleCheckoutComponent.bind(this)
  }

  toggleCheckoutComponent(){
    this.setState({
      showCheckoutComponent: !this.state.showCheckoutComponent
    })
  }
  render(){
    return (
      <CartContext.Consumer>
        {cart => {
          console.log(cart, 'cart')
          (
          <>
            {this.props.displayAddToCartBtn && (
              <Cart quantity={cart.productsInCart.length}/>
            )}
            <div className='desktop-layout'>
              <DesktopNav />
              { this.props.designNumber && (
                <div className='side-page-design'>
                    {generateDesign(this.props.designNumber)}
                  </div>
              )}
              <div className='desktop-children'>
                {this.state.showCheckoutComponent ? <PaymentForm />: this.props.children}
                {this.props.displayAddToCartBtn && (
                    <SideBar showingCheckout={this.state.showCheckoutComponent} toggleCheckoutComponent={this.toggleCheckoutComponent} products={cart.productsInCart} />
                )}
              </div>
            </div>
            <MobileNav />
          </>
        )
    }}      
      </CartContext.Consumer>
    )
  }
}

Layout.contextType = CartContext;
export default Layout
