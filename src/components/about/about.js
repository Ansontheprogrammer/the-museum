import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import "./about.styles.scss"

const AboutSection = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     aboutImage: file(relativePath: { eq: "zooty-about.jpeg" }) {
  //       childImageSharp {
  //         fluid(quality: 90, maxWidth: 1920) {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }
  //   }
  // `)

  // const imageData = data.aboutImage.childImageSharp.fluid

  return (
    <div className="About" id="about">
      {/* <BackgroundImage
        Tag="div"
        fluid={imageData}
        className="About-img"
      ></BackgroundImage> */}
      <div className="About-text">
        <h2 className="custom-font">About Us</h2>
        <p>
          ​Born in this industry, literally learning from the floor up as a
          young child sweeping hair in his uncle's shop, Zooty the Barber has
          over 15 years of experience in the industry.
        </p>
        <p>
          His ambitious spirit and knowledge of hair, coupled with his
          creativity and high degree of customer service allows him to
          understand his customers’ needs on a deeper level. Having such a
          diverse background in hair, along with his hungry nature, Zooty the
          Barber can be found either perfecting his craft or learning new trends
          to better serve all individuals in the community.
        </p>
        <p>
          He genuinely cares about servicing clients among other things, but his
          love for raising expectations and self-esteems continue to make him a
          well sought after barber.
        </p>
      </div>
    </div>
  )
}

export default AboutSection
