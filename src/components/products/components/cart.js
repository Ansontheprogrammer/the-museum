import React, {useEffect, useRef, useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {TweenMax} from 'gsap'
import '../styles/cart.styles.scss'

export const Cart = (props) => {
    const quantityRef = useRef(null)

    const [items, setItems] = useState(0)
    const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //   const tween = TweenMax.fromTo(quantityRef.current,0.5, { y: 10 }, { y: -10, yoyo: true, repeat: -1 });
    //   tween.play()
    // }); 

    useEffect(() => {
      setTimeout(() => setLoading(false), 1000)
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