import { useStaticQuery } from "gatsby"
import React from "react"
import './seamoss.styles.scss'

const SeaMossHeading = () => {
  const data = useStaticQuery(graphql`
    query getSeamossPageContent {
      allMarkdownRemark(
        filter: { 
          fileAbsolutePath: { regex: "/(content)/" },
          frontmatter: {page: {eq: "Seamoss" }}
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
  
  const seamossContent = data.allMarkdownRemark.edges[0].node.html

  return <div className='section-text' dangerouslySetInnerHTML={{__html: seamossContent}}/>
}

export default SeaMossHeading
