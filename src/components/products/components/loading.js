import React, {useEffect, useRef} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckMoving } from '@fortawesome/free-solid-svg-icons'
import {TweenMax} from 'gsap'

export const Loading = (props) => {
    const quantityRef = useRef(null)

    useEffect(() => {
      const tween = TweenMax.fromTo(quantityRef.current,0.5, { y: 10 }, { y: -10, yoyo: true, repeat: -1 });
      tween.play()
    }); 

    
    return (
        <div style={{display: "flex", alignItems: 'center', justifyContent: 'center', height: '70vh'}}>
          <div style={{paddingLeft: '50px', paddingBottom: '100px',  textAlign: 'center'}} ref={quantityRef}>
              <FontAwesomeIcon icon={faTruckMoving}/>
              <p>Loading Checkout...</p>       
          </div>
        </div>
    )
}