import React, { useContext, useEffect } from "react"

export const CartContext = React.createContext({});

export const Cart = (props) => {  
  return (
      <div className='cart-container'>
        <button>
          <img/>
              <div className='cart-quantity'>
                  <p>{props.quantity}</p>
              </div>
          
        </button>
      </div>
  )
}