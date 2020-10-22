import React, { Component, useState } from "react"
import Fade from "react-reveal/Fade"
import { graphql, StaticQuery } from "gatsby"
import "../products/styles/ProductWrapper.styles.scss"
import BarberCard from "./card"


class Barbers extends Component {
  state = {
    stripe: null,
  }

  constructor(props){
    super(props);
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
        query getBarbers {
          allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/(barbers)/" } }
          ) {
            edges {
              node {
                frontmatter {
                  name
                  links
                  bio
                  pics
                }
              }
            }
          }
        }
        `}
        render={({allMarkdownRemark}) => {
          let barbers = allMarkdownRemark.edges
          return (
          <div className="productWrapper barbersWrapperGrid">
            {barbers.map((barber, i) => {
              return (
                <Fade key={i}>
                  <div className="variations">
                    <BarberCard barber={barber.node.frontmatter}/>
                  </div>
                </Fade>
              )
            })}
          </div>
        )}
      }
      />
    )
  }
}

export default Barbers