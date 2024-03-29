import React from "react";
import "./barber-card.styles.scss";
import { FaCut, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import clip from "text-clipper";

export class BarberCard extends React.Component {
  constructor(props) {
    super(props);
  }

  getIcon(link) {
    if (link.includes("instagram")) {
      return <FaInstagram />;
    } else if (link.includes("facebook")) {
      return <FaFacebook />;
    } else if (link.includes("twitter")) {
      return <FaTwitter />;
    } else {
      return <span>Booksy</span>;
    }
  }
  render() {
    const barber = this.props.barber;

    return (
      <div className="barber-card">
        <div className="row-card">
          <div className="image-wrapper">
            <div
              className="image"
              style={{
                backgroundImage: `${
                  barber.pics ? `url(${barber.pics[0]})` : ""
                }`,
              }}
            />
          </div>
          <div className="text">
            <div className="title">
              <h4>{barber.name}</h4>
            </div>
            <p>
              {this.props.onLandingPage ? clip(barber.bio, 300) : barber.bio}
            </p>

            <div className="services">
              <div className="services-title">
                <button
                  onClick={() => {
                    alert(
                      barber.serviceList
                        .map((service) => `${service} \n`)
                        .reduce((a, b) => (a += b))
                    );
                  }}
                >
                  <FaCut />
                  <p>My Services</p>
                  <FaCut />
                </button>
              </div>
            </div>

            <ul className="links-list">
              {barber.links.map((link) => (
                <li className="link-btn">
                  <a href={"https://" + link}>{this.getIcon(link)}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {barber.name === "Tyreese" ? (
          <a className="book-btn" href={`sms:${barber.bookLink}`}>
            Text
          </a>
        ) : (
          <a className="book-btn" href={barber.bookLink}>
            Book
          </a>
        )}
      </div>
    );
  }
}

export default BarberCard;
