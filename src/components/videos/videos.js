import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./videos.scss"
import "../products/styles/Card.styles.scss"
import '../products/styles/ProductWrapper.styles.scss'



const VideosComponent = () => {
  const data = useStaticQuery(graphql`
    query getPosts {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(videos)/" } }
      ) {
        edges {
          node {
            html
            frontmatter {
              url
              title
              description
            }
          }
        }
      }
    }
  `)


  const eventPosts = data.allMarkdownRemark.edges.map((edge, index) => {
    const { title, description, url } = edge.node.frontmatter 

    return (
      <div
        id={title.replace(/ /g, "")}
        key={title + index}
        className="video cardStyles"
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
        src={url}
        title={title}
      />
      <div className="text video-text">
       <h1 className="title video-title">{title}</h1>
       <p className='video-description'>{description}</p>
       </div>
      </div>
    )
  }).map(post => post)

  return (
    <div className='productWrapper'>
       {eventPosts}
    </div>
  )
}

export default VideosComponent
