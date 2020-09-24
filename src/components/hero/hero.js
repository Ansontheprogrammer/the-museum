import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Section, Container } from '../typographics'

const HeroWrapper = styled.div`
    height: 95vh;
    width: 100%;
    padding-left: 7vw;
    padding-top: 15vh;
    background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(43,43,43,.75))),url("https://res.cloudinary.com/dhgnvzmi3/image/upload/v1598888656/IMG_3049_d12gio.jpg");
    background-size: cover;
    color: #fff;
    @media only screen and (max-width: 600px) {
        padding-left: 0vw;
        .description {
            padding-left: 5vw;
            padding-right: 5vw;
        }
    }
    h1 {
        max-width: 700px;
        font-size: 72px;
        font-weight: normal;
        color: #eee;      
    }

    h2 {
        font-size: 36px;
        font-weight: 100;
        color: #eee;
    }

    h3 {
        color: #eee;
        margin-bottom: 25px;
        font-size: 28px;
    }
    .description {
        margin-top: 20vh;
        margin-bottom: 7.5vh;
        font-weight: lighter;
        font-family: "Lato";
    }
`

export const Hero = props => ( 
    <Section>
        <Container>
          <HeroWrapper>
            <h2>{props.smallHeading}</h2>
            <h1>{props.heading}</h1>
            <h3 className="description">{props.subtitle}</h3>
            <a
            className="btn"
            href={props.buttonLink}
            >
                {props.buttonText}
            </a>
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
