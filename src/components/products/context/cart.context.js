import React from "react"

export const CartContext = React.createContext();

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

export class CartProvider extends React.Component {
  state = {
      productsInCart: [],
  }
  
  addToCart(product){
      return () => {
          const cartID = makeid(8)
          this.setState({
              productsInCart: this.state.productsInCart.concat({...product, cartID})
          })
      }
  }

  removeItemFromCart(cartIDNumber){
    const filteredArray = this.state.productsInCart.filter(product => {
        return product.cartID !== cartIDNumber 
    })

    return () => {
      this.setState({
          productsInCart: filteredArray.length ? filteredArray : []
      })
    }
  }

  removeAllItemsFromCart(){
      this.setState([])
  }

  cart = {
      addToCart: this.addToCart.bind(this),
      removeItemFromCart: this.removeItemFromCart.bind(this),
      removeAllItemsFromCart: this.removeAllItemsFromCart.bind(this),
  }

render () {
  return (
      <CartContext.Provider value={{
          ...this.cart,
           productsInCart: this.state.productsInCart ? this.state.productsInCart : [],
      }}>
          {this.props.children}
      </CartContext.Provider>
  );
  }
};
