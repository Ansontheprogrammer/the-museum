import React from "react"
import "./barberCard.styles.scss"
import {
  FaCut,
} from 'react-icons/fa'

export class BarberCard extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const barber = this.props.barber
    const exampleServicesList = [
      'Service example one',
      'Service example two',
      'Service example three',
    ]
    return (
      <div className="barber-card">
    
        <div>
          <div className='image-wrapper'>
            <div
              className="image"
              style={{
                backgroundImage: `${barber.pics ? `url(${barber.pics[0]})` : ''}`,
              }}
            />
          </div>
        <div className="text">
          <div className="title">
            <h4>{barber.name}</h4>
          </div>
          <p>
            {barber.bio}
          </p>

          <div className="services">
            <div className="services-title">
              <FaCut />
              <p>My Services</p>
              <FaCut />
            </div>
            <ul className="services-list">
              {exampleServicesList.map(service => <li key={service}>{service}</li>)}
            </ul>
          </div>

          <ul className="links-list">
              {barber.links.map(link => <li className='link-btn'><a href={'https://' + link}>{link}</a></li>)}
          </ul>
        </div>
        </div>

        <a>
          Book
        </a> 
      </div>
    )
  }
}

export default BarberCard
