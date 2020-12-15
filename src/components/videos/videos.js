import React from "react";
import Fade from "react-reveal/Fade";
import { useStaticQuery, graphql } from "gatsby";
import "../products/styles/ProductWrapper.styles.scss";

const VideosComponent = () => {
  const data = useStaticQuery(graphql`
    query getPosts {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(videos)/" } }) {
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
  `);

  const eventPosts = data.allMarkdownRemark.edges
    .map((edge, index) => {
      const { title, description, url } = edge.node.frontmatter;

      return (
        <>
          <Fade>
            <div id={title.replace(/ /g, "")} key={title + index}>
              <video width="300" height="200" controls>
                <source src={"/" + url} type="video/mp4" />
              </video>
            </div>
          </Fade>
          <div className="text video-text">
            <h3 className="title video-title">{title}</h3>
            <p className="video-description">{description}</p>
          </div>
        </>
      );
    })
    .map(post => post);

  return <div className="productWrapper videoWrapperGrid">{eventPosts}</div>;
};

export default VideosComponent;
