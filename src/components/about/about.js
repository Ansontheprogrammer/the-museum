import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import "./about.styles.scss"

const AboutSection = () => {
  
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { 
          fileAbsolutePath: { regex: "/(content)/" },
          frontmatter: {page: {eq: "about" }}
        }
      ) {
        edges {
          node {
            html
          }
        }
      }
      aboutImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const imageData = data.aboutImage.childImageSharp.fluid
  const aboutContent = data.allMarkdownRemark.edges[0].node.html
  return (
    <div className="About" id="about">
      <BackgroundImage
        Tag="div"
        fluid={imageData}
        className="About-img"
      ></BackgroundImage>
      <div className="About-text" dangerouslySetInnerHTML={{__html: aboutContent}} />
    </div>
  )
}

export default AboutSection
