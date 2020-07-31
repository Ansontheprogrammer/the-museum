import React from "react"
import MobileNav from "../navbar/mobile-nav"
import DesktopNav from "../navbar/desktop-nav"
import "./layout.scss"

const generateDesign = (numberOfDesigns) => {
  const designJSX = [];
  for(let i=0; i <= numberOfDesigns - 1; i++){
    designJSX.push((
      <>
      <span className='circle first'/>
      <span className='circle'/>
      <span className='circle'/>
      <span className='circle last'/>
      {numberOfDesigns === 1 ? <div /> : <span className='line' /> }
      </>
    ))
  }
  return designJSX.map(jsx => jsx)
}

const Layout = props => {
  return (
    <>
    <div className='desktop-layout'>
      <DesktopNav />
      <div className='side-page-design'>
        {generateDesign(props.designNumber)}
      </div>
      <div className='desktop-children'>
        {props.children}
      </div>
    </div>
      <MobileNav />
    </>
  )
}

export default Layout
