import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import './seamoss.styles.scss'


const SeaMossHeading = () => {
  const data = useStaticQuery(graphql`
    query getPageContent {
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

    if(page === 'seamoss'){
        jsxToRender = (
            <div className='seamoss-heading'>
                <p>{paragraphOne}</p>
                <p>{paragraphTwo}</p>
            </div>
          )
    }
  })

  return jsxToRender
}

export default SeaMossHeading
