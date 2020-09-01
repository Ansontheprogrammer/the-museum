import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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

  let clients = []

  const seaMossVideos = data.allMarkdownRemark.edges
  .filter((edge) => !!edge.node.frontmatter.bio)
  .map((edge, index) => {
    const { name, bio, links } = edge.node.frontmatter 
    clients.push({name, bio, links})

    return links.map((link, index) => (
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
        width="250"
        height="150"
        // Requires youtube embed link
        src={links ? links[index] : ''}
        title={name}
      />
      </div>
    ))
  }).map(post => post)

  const clientJSX = clients.map(client => (
    <div>
      <div className="text video-text">
        <h3 className="title video-title">{client.name}</h3>
        <p className='video-description'>{client.bio}</p>
      </div>
    </div>
  )).map(jsx => jsx)

  return (
    <>
      <h1>Clients</h1>
      <div className='clients' >
      {clientJSX.map((client, index) => (
        <div className='spacing'>
          {seaMossVideos[index]}
          {client}
        </div>
      ))
    }
    </div>
    </>
  )
}

export default SeaMossVideos
