import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../videos/videos.scss"
import "../products/styles/Card.styles.scss"
import '../products/styles/ProductWrapper.styles.scss'
import '../layout/layout.scss'


const SeaMossVideos = () => {
  const data = useStaticQuery(graphql`
    query getSeamossContent {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(seamoss)/" } }
      ) {
        edges {
          node {
            frontmatter {
              name
              links
              bio
            }
          }
        }
      }
    }
  `)

  let client = {
    name: '',
    bio: '',
    links: ''
  }

  const seaMossVideos = data.allMarkdownRemark.edges
  .filter((edge) => edge.node.frontmatter.name)
  .map((edge, index) => {
    const { name, bio, links } = edge.node.frontmatter 
    if(!client.name) client = { name, bio, links }

    return (
      <div 
        key={name + index}
        className=""
      >
        <iframe
        className=""
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        width="200"
        height="115"
        // Requires youtube embed link
        src={links ? links[index] : ''}
        title={name}
      />
      </div>
    )
  }).map(post => post)

  const clientJSX = (
    <div>
      <div className="text video-text">
        <h3 className="title video-title">{client.name}</h3>
        <p className='video-description'>{client.bio}</p>
      </div>
    </div>
  )

  return (
    <div className='seamoss-heading' >
      <h1>Clients</h1>
      {clientJSX}
      <div className='spacing'></div>
      {seaMossVideos}
    </div>
  )
}

export default SeaMossVideos
