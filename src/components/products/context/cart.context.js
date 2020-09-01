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
  constructor(props){
      super(props)
  }

  state = {
      productsInCart: [],
  }
  
  addToCart(product){
      return () => {
          this.setState({
              productsInCart: this.state.productsInCart.concat({...product, cartID: makeid(8)})
          })
      }
  }

  removeItemFromCart(cartIDNumber){
      return () => {
        console.log(this.state.productsInCart, 'cart id number')
          this.setState({
            productsInCart: this.state.productsInCart.filter(product => product.cartID !== cartIDNumber)
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
