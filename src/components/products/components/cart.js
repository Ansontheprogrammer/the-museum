import React, {useEffect, useRef} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {TweenMax} from 'gsap'
import '../styles/cart.styles.scss'

export const Cart = (props) => {
    const quantityRef = useRef(null)

    useEffect(() => {
      const tween = TweenMax.fromTo(quantityRef.current,0.5, { y: 10 }, { y: -10, yoyo: true, repeat: -1 });
      tween.play()
    }); 

    
    return (
        <div className='cart'>
          <div className='cart-container'>
              <FontAwesomeIcon icon={faShoppingCart} className='icon'/>
              <p ref={quantityRef} className='quantity'>{props.quantity}</p>       
          </div>
        </div>
    )
  }