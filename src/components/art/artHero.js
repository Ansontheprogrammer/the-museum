import React from "react"
import { useStaticQuery, graphql } from "gatsby"


const ArtHeroSection = () => {
  const data = useStaticQuery(graphql`
    query getArtPageContent {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(content)/" } }
      ) {
        edges {
          node {
            frontmatter {
              page
              paragraphOne
              paragraphTwo
            }
          }
        }
      }
    }
  `)

  let jsxToRender;
  data.allMarkdownRemark.edges.forEach((edge, index) => {
    const { page, paragraphOne, paragraphTwo } = edge.node.frontmatter 

    if(page === 'art'){
        jsxToRender = (
            <div className='seamoss-heading'>
                <p className='section-description'>{paragraphOne}</p>
                <p className='section-description'>{paragraphTwo}</p>
            </div>
          )
    }
  })

  return jsxToRender
}

export default ArtHeroSection
