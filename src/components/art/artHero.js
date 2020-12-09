import { useStaticQuery } from "gatsby";
import React from "react";

const ArtHeroSection = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { name: { eq: "art" } }
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

  const artContent = data.allFile.edges[0].node.childMarkdownRemark.html;
  return (
    <div
      className="section-text"
      dangerouslySetInnerHTML={{ __html: artContent }}
    />
  );
};

export default ArtHeroSection;
