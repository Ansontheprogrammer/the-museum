import React from "react"
import "./barberCard.styles.scss"

export class BarberCard extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const barber = this.props.barber
    return (
      <div className="barberCardStyles">
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
            {barber.bio}
          </p>
          <ul>
              {barber.links.map(link => <li className='link-btn'><a href={'https://' + link}>{link}</a></li>)}
          </ul>
        </div>
        <a>
          Book
        </a> 
      </div>
    )
  }
}

export default BarberCard
