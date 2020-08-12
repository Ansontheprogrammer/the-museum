import React from "react"

export const CartContext = React.createContext();


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
              productsInCart: this.state.productsInCart.concat(product)
          })
      }
  }

  removeItemFromCart(productIdToRemove){
      const indexToRemove = this.state.productsInCart.findIndex(product => product.id === productIdToRemove )
      this.setState({
          productsInCart: this.state.productsInCart.slice(indexToRemove, 1)
      })
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
           productsInCart: this.state.productsInCart,
      }}>
          {this.props.children}
      </CartContext.Provider>
  );
  }
};
