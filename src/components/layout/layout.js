import React from "react"
import MobileNav from "../navbar/mobile-nav"
import DesktopNav from "../navbar/desktop-nav"
import "./layout.scss"
import PropTypes from "prop-types"
import {CartContext} from "../products/context/cart.context"
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
  /*
    props : {
      useCart?: false,
      sidePageDesign?: false,
      sidePageDesignNumber?: 0,
      sideBar?: true
    }
  */
  constructor(props){
    super(props);
    this.state = {
      showCheckoutComponent: false,
      showCart: this.props.useCart ? false : true
    }
    this.toggleCheckoutComponent =  this.toggleCheckoutComponent.bind(this)
    // Set timeout to avoid ui issues with safari browser
    setTimeout(() => {
      this.setState({
        showCart: true
      })
    }, 2000)
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
            {this.props.useCart && cart && this.state.showCart && (
              <Cart quantity={cart.productsInCart.length}/>
            )}
            <DesktopNav />
            <div className={`desktop-layout ${this.props.sidePageDesign && 'display-column'}`}>
              {(
                <>
                  {this.props.sidePageDesign && <div className='side-page-design'>
                      {generateDesign(this.props.sidePageDesignNumber)}
                    </div>
                  }
                  <div className={'desktop-children'}>
                    {this.props.sideBar && cart && this.state.showCart && (
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
Layout.defaultProps = {
  useCart: false,
  sidePageDesign: false,
  sidePageDesignNumber: 0,
  sideBar: false,
}


Layout.propTypes = {
  useCart: PropTypes.bool,
  sidePageDesign: PropTypes.bool,
  sidePageDesignNumber: PropTypes.number,
  sideBar: PropTypes.bool
}

export default Layout
