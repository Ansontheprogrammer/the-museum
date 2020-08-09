import React from "react"
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
    return imageData.allMarkdownRemark.edges.map(edge => {
      const imagePath = edge.node.frontmatter.image
      const imageTitle = edge.node.frontmatter.imageTitle
      const imageStyle = {
        background: `url(${imagePath})`,
        backgroundSize: "cover",
        backgroundPosition: "center 40%",
      }
      return (
        <div key={imageTitle} className="Gallery-image" style={imageStyle} />
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
