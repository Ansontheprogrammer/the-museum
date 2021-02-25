import React, { Component } from "react";
import "./footer.styles.scss";
import {
  FaFacebookMessenger,
  FaFacebook,
  FaInstagram,
  FaPhone
} from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__container">
          <div className="footer__contact-section">
            <h4 className="white-text">Contact</h4>
            <a href="mailto:esko831@gmail.com">
              <p className="white-text footer__contact-text">
                esko831@gmail.com
              </p>
            </a>
            <a href="tel:+252 4327739">
              <div className="footer__social-info">
                <FaPhone />
                <p className="white-text footer__contact-text">Call Us</p>
              </div>
            </a>
            <a href="https://www.instagram.com/the1museum_/">
              <div className="footer__social-info">
                <FaInstagram />
                <p className="white-text footer__contact-text">@the1museum_/</p>
              </div>
            </a>
            <a href="https://m.me/The1Museum">
              <div className="footer__social-info">
                <FaFacebookMessenger />
                <p className="white-text footer__contact-text">Message us</p>
              </div>
            </a>
            <a href="https://www.facebook.com/The1Museum/">
              <div className="footer__social-info">
                <FaFacebook />
                <p className="white-text footer__contact-text">@The1Museum</p>
              </div>
            </a>
          </div>
          <div>
            <h4 className="white-text">Hours</h4>
            <ul className="footer__hours-list">
              <li>
                <p className="white-text">Monday: Closed</p>
              </li>
              <li>
                <p className="white-text">Tuesday: 9:00 AM - 7:00 PM</p>
              </li>
              <li>
                <p className="white-text">Wednesday: 9:00 AM - 7:00 PM</p>
              </li>
              <li>
                <p className="white-text">Thursday: 9:00 AM - 7:00 PM</p>
              </li>
              <li>
                <p className="white-text">Friday: 9:00 AM - 7:00 PM</p>
              </li>
              <li>
                <p className="white-text">Saturday: 9:00 AM - 6:00 PM</p>
              </li>
              <li>
                <p className="white-text">Sunday: Closed</p>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="white-text">Location</h4>
            <p className="white-text mb-1">2 N. Pettigrew St. Raleigh, NC</p>
            <a
              className="white-text"
              href="https://wego.here.com/directions/mix//The-Museum,-2-N.-Pettigrew-St.,-Raleigh,-NC:e-eyJuYW1lIjoiVGhlIE11c2V1bSIsImFkZHJlc3MiOiIyIE4uIFBldHRpZ3JldyBTdC4sIFJhbGVpZ2gsIE5DIiwibGF0aXR1ZGUiOjAuMDI3NzEwMjYyNjg3Njg3LCJsb25naXR1ZGUiOjAuMDY1MTU4ODIyOTgwNTY4LCJwcm92aWRlck5hbWUiOiJmYWNlYm9vayIsInByb3ZpZGVySWQiOjEyMjQ2ODgwOTE0MjA0NX0=?map=0.02771,0.06516,15,normal&fb_locale=en_US"
            >
              Get Directions
            </a>
          </div>
        </div>
        <div className="footer__signature">
          <a href="https://ansonervin.com">
            <p className="white-text">Created By @AnsonErvin Inc.</p>
          </a>
        </div>
      </div>
    );
  }
}
