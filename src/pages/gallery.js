import { useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/layout/layout"
import PageLayout from "../components/layout/page-layout"
import { SpacingSm } from "../components/typographics"

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
        maxHeight: '600px'
      }
      return (
        <div key={imageTitle} className="Gallery-page-image" style={imageStyle} />
      )
    })
  }

  return (
  <Layout designNumber={1} displayAddToCartBtn={true} >
    <PageLayout title="Our Gallery">
      <div className="Gallery-images no-margin">
        {generateGallery()}
      </div>
      <SpacingSm/>
    </PageLayout>
   </Layout> 
)}

export default Gallery
