import React from "react"
import "./barberCard.styles.scss"

class BarberCard extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const barber = this.props.barber
    return (
      <div className="cardStyles">
        <div>
          <div className='image-wrapper'>
            <div
              className="image"
              style={{
                backgroundImage: `${barber.pics ? `url(${barber.pics[0]})` : ''}`,
              }}
            />
          </div>
        </div>
        <div className="text">
          <div className="title">
            <h4 style={{ color: "#333" }}>{barber.name}</h4>
          </div>
          <p>
            {barber.description}
          </p>
        </div>
        <a>
          <button className='cart-btn'>Book</button>
        </a> 
      </div>
    )
  }
}

export default BarberCard
