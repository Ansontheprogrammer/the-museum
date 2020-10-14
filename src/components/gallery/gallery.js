import React from "react"
import "./gallery.styles.scss"
import GalleryImages from "./gallery-images"
import { SectionColumn, SectionHeader, SectionRow, SectionWrapperRow } from "../typographics"
import { Link } from "gatsby"

const Gallery = () => {
  return (
    <div className='section'>
      <SectionRow>
        <SectionHeader>
          <h1>Gallery</h1>
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
