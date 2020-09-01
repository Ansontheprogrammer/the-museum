import React from "react"
import "./gallery.styles.scss"
import GalleryImages from "./gallery-images"
import { Section, SectionHeader, SectionRow } from "../typographics"

const Gallery = () => {
  return (
    <div className='section'>
      <SectionRow>
        <SectionHeader>
          <h1>Gallery</h1>
        </SectionHeader>
        <GalleryImages/>  
      </SectionRow>   
    </div>
  )
}

export default Gallery
