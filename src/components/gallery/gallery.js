import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./gallery.styles.scss"

const Gallery = () => {
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
    <div className="Gallery">
      <div className="Gallery-text">
        <div>
          <h2>The</h2>
          <h1>Museum</h1>
          <h3 className="description">Invest in your hair, it's the only crown you never take off.</h3>
          <a
            className="btn"
            href="https://squareup.com/appointments/book/EJCF1CF5DXN4W/zooty-at-procutz-sports-barbershop-lewes-de"
          >
            Book an appointment now
          </a>
        </div>
      </div>
      <div className="Gallery-section">
        <h1 className='section-header'>Gallery</h1>
        <div className="Gallery-images">
          {generateGallery()}
        </div>
      </div>
    </div>
  )
}

export default Gallery
