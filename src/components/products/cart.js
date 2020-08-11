export const Cart = (props) => {  
    return (
        <div className='cart'>
          <div className='cart-container'>
              <FontAwesomeIcon icon={faShoppingCart} className='icon'/>
              <p>{props.quantity}</p>       
          </div>
        </div>
    )
  }