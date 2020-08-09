import React from "react"
import MobileNav from "../navbar/mobile-nav"
import DesktopNav from "../navbar/desktop-nav"
import "./layout.scss"
import {Cart, CartContext} from "../products/cart.context"
import Application from '../../../application'

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
  render(){
    return (
      <Application>
        { this.props.addCart &&
          <CartContext.Consumer>
            {cart => <Cart quantity={cart.productsInCart.length}/>}
          </CartContext.Consumer> 
        }
          <div className='desktop-layout'>
            <DesktopNav />
            <div className='side-page-design'>
              {generateDesign(this.props.designNumber)}
            </div>
            <div className='desktop-children'>
              {this.props.children}
            </div>
          </div>
          <MobileNav />
      </Application>
    )
  }
}

Layout.contextType = CartContext;
export default Layout
