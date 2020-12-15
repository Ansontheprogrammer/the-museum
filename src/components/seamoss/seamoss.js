import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "../products/styles/ProductWrapper.styles.scss";

const SeaMoss = () => {
  const data = useStaticQuery(graphql`
    query getSeaMossContent {
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

  const seaMossVideos = data.allMarkdownRemark.edges
    .map((edge, index) => {
      const { title, description, url } = edge.node.frontmatter;

      return (
        <div id={title.replace(/ /g, "")} key={title + index}>
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
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      );
    })
    .map(post => post);

  return <div className="productWrapper">{seaMossVideos}</div>;
};

export default SeaMoss;
