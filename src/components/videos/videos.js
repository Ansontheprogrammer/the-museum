import React from "react";
import Fade from "react-reveal/Fade";
import { useStaticQuery, graphql } from "gatsby";
import "../products/styles/product-wrapper.styles.scss";

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
              <video
                style={{
                  objectFit: "cover",
                }}
                width="100%"
                height="450"
                controls
              >
                <source src={"/" + url} type="video/mp4" />
              </video>
            </div>
          </Fade>
        </>
      );
    })
    .map((post) => post);

  return <div className="productWrapper videoWrapperGrid">{eventPosts}</div>;
};

export default VideosComponent;
