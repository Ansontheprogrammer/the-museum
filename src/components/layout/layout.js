import React, {useState} from "react"
import { Link } from "gatsby"
import MobileNav from "../navbar/mobile-nav"
import DesktopNav from "../navbar/desktop-nav"
import "./layout.scss"
import {CartContext} from "../products/context/cart.context"
import {formatPrice} from "../products/components/productCard"
import PaymentForm from "../../pages/checkout"
import { Cart } from "../products/components/cart"
import { SideBar } from "../products/components/sidebar"

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
         {cart => (
          <>
            {cart && (
              <Cart quantity={cart.productsInCart.length}/>
            )}
            <DesktopNav />
            <div className={`desktop-layout ${!this.props.designNumber && 'display-column'}`}>
              {(
                <>
                  <div className='side-page-design'>
                      {generateDesign(this.props.designNumber)}
                    </div>
                  <div className={'desktop-children'}>
                    {cart && (
                        <SideBar showingCheckout={this.state.showCheckoutComponent} toggleCheckoutComponent={this.toggleCheckoutComponent} products={cart.productsInCart} />
                    )}
                    {this.props.children}
                  </div>
                </>
                )
            }
    
            </div>
            <MobileNav />
          </>
        )
    }      
       </CartContext.Consumer>
    )
  }
}

Layout.contextType = CartContext;
export default Layout
