import { useStaticQuery } from "gatsby";
import React from "react";
import "./seamoss.styles.scss";

const SeaMossHeading = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "content" }
          name: { eq: "seamoss" }
        }
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

  const seamossContent = "data.allMarkdownRemark.edges[0].node.html";

  return (
    <div
      className="section-text"
      dangerouslySetInnerHTML={{ __html: seamossContent }}
    />
  );
};

export default SeaMossHeading;
