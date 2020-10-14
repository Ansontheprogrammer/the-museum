import React from 'react'
import PropTypes from 'prop-types'
import { Section, Container, HeroWrapper } from '../typographics'

export const Hero = props => ( 
    <Section>
        <Container>
          <HeroWrapper>
            <h2>{props.smallHeading}</h2>
            <h1>{props.heading}</h1>
            <h3 className="description">{props.subtitle}</h3>
            {/* <a
            className="btn"
            href={props.buttonLink}
            >
                {props.buttonText}
            </a> */}
         </HeroWrapper>
        </Container>
    </Section>
)

Hero.defaultProps = {
    smallHeading: 'The',
    heading: 'Museum',
    subtitle: "Invest in your hair, it's the only crown you never take off.",
    buttonLink: "https://squareup.com/appointments/book/EJCF1CF5DXN4W/zooty-at-procutz-sports-barbershop-lewes-de",
    buttonText: 'Book an appointment now',
  }
  
  
Hero.propTypes = {
    smallHeading: PropTypes.string,
    heading: PropTypes.string,
    subtitle: PropTypes.string,
    buttonLink: PropTypes.string,
    buttonText: PropTypes.string,
}
