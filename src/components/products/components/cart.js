import React, {useEffect, useRef, useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import '../styles/cart.styles.scss'

export const Cart = (props) => {
    const quantityRef = useRef(null)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
      setTimeout(() => setLoading(false), 600)
    }, [])


    
    return (
        <div className='cart'>
          <div className='cart-container'>
            <span 
              key={props.quantity}
              className='add-cart'
              style={{visibility: loading ? 'hidden' : 'visible'}}
            />
            <FontAwesomeIcon icon={faShoppingCart} className='icon'/>
            <p ref={quantityRef} className='quantity'>{props.quantity}</p>       
          </div>
        </div>
    )
  }