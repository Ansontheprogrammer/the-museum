import { useStaticQuery } from "gatsby";
import React from "react"

const ArtHeroSection = () => {
  const data = useStaticQuery(graphql`
    query getArtPageContent {
      allMarkdownRemark(
        filter: { 
          fileAbsolutePath: { regex: "/(content)/" },
          frontmatter: {page: {eq: "art" }}
        }
      ) {
        edges {
          node {
            html
          }
        }
      }
    }
  `)

  const artContent = data.allMarkdownRemark.edges[0].node.html

  return <div className='section-text' dangerouslySetInnerHTML={{__html: artContent}}/>
}

export default ArtHeroSection
