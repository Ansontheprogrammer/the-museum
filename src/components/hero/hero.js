import React from 'react'
import Fade from "react-reveal/Fade"
import PropTypes from 'prop-types'
import { Section, Container, HeroWrapper } from '../typographics'

export const Hero = props => ( 
    <Section>
        <Container>
          <HeroWrapper>
            <Fade bottom cascade delay={200} distance={'20px'}>
              <h1>{props.smallHeading}</h1>
            </Fade>
            <Fade bottom cascade distance={'70px'}>
							<h1>{props.heading}</h1>
						</Fade>
						<Fade delay={400}>
            	<h3 className="description">{props.subtitle}</h3>
						</Fade>
            
            
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
