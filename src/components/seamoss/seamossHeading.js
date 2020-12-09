import { useStaticQuery } from "gatsby";
import React from "react";
import "./seamoss.styles.scss";

const SeaMossHeading = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
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

  const seamossContent = data.allFile.edges[0].node.childMarkdownRemark.html;
  return (
    <div
      className="section-text"
      dangerouslySetInnerHTML={{ __html: seamossContent }}
    />
  );
};

export default SeaMossHeading;
