import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import "./about.styles.scss";

const AboutSection = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { eq: "about" } }) {
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
      aboutImage: file(relativePath: { eq: "museum.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const imageData = data.aboutImage.childImageSharp.fluid;
  const aboutContent = data.allFile.edges[0].node.childMarkdownRemark.html;
  return (
    <div className="About" id="about">
      <BackgroundImage
        Tag="div"
        fluid={imageData}
        className="About-img"
      ></BackgroundImage>
      <div
        className="About-text"
        dangerouslySetInnerHTML={{ __html: aboutContent }}
      />
    </div>
  );
};

export default AboutSection;
