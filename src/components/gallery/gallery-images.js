import React from "react"
import Fade from "react-reveal/Fade"
import { useStaticQuery, graphql } from "gatsby"
import "./gallery.styles.scss"

const GalleryImages = () => {
  const imageData = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(gallery)/" } }
      ) {
        edges {
          node {
            frontmatter {
              imageTitle
              image
            }
          }
        }
      }
    }
  `)

  const generateGallery = () => {
    return imageData.allMarkdownRemark.edges.map((edge, i) => {
      const imagePath = edge.node.frontmatter.image
      const imageTitle = edge.node.frontmatter.imageTitle
      const imageStyle = {
        background: `url(${imagePath})`,
        backgroundSize: "cover",
        backgroundPosition: "center 40%",
        maxHeight: '350px'
      }
      return (
        <Fade key={imageTitle} delay={i * 300}>
          <div className="Gallery-image" style={imageStyle} />
        </Fade>
      )
    }).slice(0, 2)
  }

  return (
    <div className="Gallery-images">
        {generateGallery()}
        </div>
  
  )
}

export default GalleryImages
