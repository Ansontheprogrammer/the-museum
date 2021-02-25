import React from "react";
import Fade from "react-reveal/Fade";
import { useStaticQuery, graphql } from "gatsby";
import "../products/styles/product-wrapper.styles.scss";
import FirstVideo from "../../videos-tmp/customer-vid.mp4";
import SecondVideo from "../../videos-tmp/customer-vid2.mp4";

const VideosComponent = () => {
  const data = useStaticQuery(graphql`
    query getPosts {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(videos)/" } }) {
        edges {
          node {
            html
            frontmatter {
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

  return <div className="productWrapper videoWrapperGrid">
    {/* {eventPosts} */}
          <Fade>
            <div>
              <video
                style={{
                  objectFit: "cover",
                }}
                width="100%"
                height="450"
                controls
                autoPlay
                muted={true}
              >
                <source src={FirstVideo} type="video/mp4" />
              </video>
            </div>
          </Fade>
          <Fade>
            <div>
              <video
                style={{
                  objectFit: "cover",
                }}
                width="100%"
                height="450"
                controls
                muted={true}
              >
                <source src={SecondVideo} type="video/mp4" />
              </video>
            </div>
          </Fade>
    </div>
};

export default VideosComponent;
