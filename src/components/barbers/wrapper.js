import React, { Component, useState } from "react"
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
          <div className="productWrapper">
            {barbers.map((barber, i) => {
              return (
                <div className="variations">
                  <BarberCard key={i} barber={barber.node.frontmatter}/>
                </div>
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