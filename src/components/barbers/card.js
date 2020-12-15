import React from "react";
import "./barber-card.styles.scss";
import { FaCut } from "react-icons/fa";
import clip from "text-clipper";

export class BarberCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const barber = this.props.barber;
    return (
      <div className="barber-card">
        <div>
          <div className="image-wrapper">
            <div
              className="image"
              style={{
                backgroundImage: `${
                  barber.pics ? `url(${barber.pics[0]})` : ""
                }`
              }}
            />
          </div>
          <div className="text">
            <div className="title">
              <h4>{barber.name}</h4>
            </div>
            <p>
              {this.props.onLandingPage ? clip(barber.bio, 50) : barber.bio}
            </p>

            <div className="services">
              <div className="services-title">
                <FaCut />
                <p>My Services</p>
                <FaCut />
              </div>
              <ul className="services-list">
                {this.props.onLandingPage ? (
                  <>
                    {barber.serviceList
                      .map(service => <li key={service}>{service}</li>)
                      .slice(0, this.props.serviceListLimit)}
                  </>
                ) : (
                  <>
                    {barber.serviceList.map(service => (
                      <li key={service}>{service}</li>
                    ))}
                  </>
                )}
              </ul>
            </div>

            <ul className="links-list">
              {barber.links.map(link => (
                <li className="link-btn">
                  <a href={"https://" + link}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {barber.name === "Tyreese" ? (
          <a href={`sms:${barber.bookLink}`}>Text {barber.bookLink}</a>
        ) : (
          <a href={barber.bookLink}>Book</a>
        )}
      </div>
    );
  }
}

export default BarberCard;
