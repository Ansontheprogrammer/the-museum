import React from "react"
import Layout from "../components/layout/layout"
import Gallery from "../components/gallery/gallery"
import Products from "../components/products/components/products"
import VideosComponent from "../components/videos/videos"
import Barbers from "../components/barbers/wrapper"
import { Hero } from "../components/hero/hero"
import ArtHeroSection from "../components/art/artHero"
import { Section, SectionHeader, OffSection, SpacingSm } from "../components/typographics"
import SeaMossHeading from "../components/seamoss/seamossHeading"
import Proptypes from 'prop-types'

const generateSection = (index, headings, contents) => {
  const offSection = (index + 1) % 2;
  
  return  (
    <Section>
      <div className={`section ${offSection && 'off-section'}`}>
        <SectionHeader>
          <h1>{headings.heading}</h1>
          {headings.subtitleHeading && <h2 className='section-subtitle'>{headings.subtitleHeading}</h2>}
        </SectionHeader>
        {contents}
      </div>
    </Section>
  )
}

const LandingPage = (props) => {
  const generateLandingPage = () => {
    return Object.keys(props.page)
    .filter(section => {
      return props.page[section].show
    })
    .map((section, index) => {
      const heading = props.page[section].heading
      const subtitleHeading = props.page[section].subtitleHeading
      return generateSection(index, { heading, subtitleHeading }, props.page[section].jsx)
    })
    .map(jsx => jsx)
  }

  return (
    <Layout 
      sidePageDesign={true} 
      useCart={true}
      sidePageDesignNumber={3}
      sideBar={true}
    >
      <Hero/>
      <Gallery/>
      {generateLandingPage()}
    </Layout> 
    )
} 

LandingPage.defaultProps = {
  page: {
    users: {
      show: true,
      heading: 'Our Barbers',
      subtitleHeading: '',
      jsx: <Barbers/>
    },
    seamoss: {
      show: true,
      heading: 'Sea Moss',
      subtitleHeading: 'W.Y.N (What You Need)',
      jsx: <>
        <SeaMossHeading/>
        <button className='section-button'>Read More</button>
        <Products type='seamoss' limit={1}/>
      </> 
    },
    videos: {
      show: true,
      heading: 'Videos',
      subtitleHeading: '',
      jsx: <VideosComponent/>
    },
    art: {
      show: true,
      heading: 'Art',
      subtitleHeading: '',
      jsx: <>
        <ArtHeroSection />
        <SpacingSm/>
        <Products type='art' limit={3}/>
      </>
    },
    shop: {
      show: true,
      heading: 'Shop',
      subtitleHeading: '',
      jsx: <Products limit={3}/>
    },
  }
}


LandingPage.propTypes = {
  page: {
    hero: {
      show: Proptypes.bool,
      heading: Proptypes.string,
      subtitleHeading: Proptypes.string,
      jsx: Proptypes.element
    },
    gallery: {
      show: Proptypes.bool,
      heading: Proptypes.string,
      subtitleHeading: Proptypes.string,
      jsx: Proptypes.element
    },
    users: {
      show: Proptypes.bool,
      heading: Proptypes.string,
      subtitleHeading: Proptypes.string,
      jsx: Proptypes.element
    },
    seamoss: {
      show: Proptypes.bool,
      heading: Proptypes.string,
      subtitleHeading: Proptypes.string,
      jsx: Proptypes.element
    },
    videos: {
      show: Proptypes.bool,
      heading: Proptypes.string,
      subtitleHeading: Proptypes.string,
      jsx: Proptypes.element
    },
    art: {
      show: Proptypes.bool,
      heading: Proptypes.string,
      subtitleHeading: Proptypes.string,
      jsx: Proptypes.element
    },
    shop: {
      show: Proptypes.bool,
      heading: Proptypes.string,
      subtitleHeading: Proptypes.string,
      jsx: Proptypes.element
    },
  }
}

export default LandingPage
