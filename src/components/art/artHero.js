import { useStaticQuery } from "gatsby";
import React from "react";

const ArtHeroSection = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { sourceInstanceName: { eq: "content" }, name: { eq: "art" } }
      ) {
        edges {
          node {
            childMarkdownRemark {
              html
              frontmatter {
                title
              }
            }
          }
        }
      }
    }
  `);

  // const artContent = data.allMarkdownRemark.edges[0].node.html;

  return (
    <div
      className="section-text"
      dangerouslySetInnerHTML={{ __html: "artContent" }}
    />
  );
};

export default ArtHeroSection;
