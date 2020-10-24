import React from "react"
import Fade from "react-reveal/Fade"
import "./gallery.styles.scss"
import GalleryImages from "./gallery-images"
import { SectionColumn, SectionHeader, SectionRow, SectionWrapperRow } from "../typographics"
import { Link } from "gatsby"

const Gallery = () => {
  return (
    <div className='section'>
      <SectionRow>
        <SectionHeader>
          <Fade>
            <h1>Gallery</h1>
          </Fade>
          
        </SectionHeader>
        <GalleryImages/>  
      </SectionRow>  
      <SectionColumn>
      <Link to='/gallery'><button>View all</button></Link> 
      </SectionColumn>
    </div>
  )
}

export default Gallery
