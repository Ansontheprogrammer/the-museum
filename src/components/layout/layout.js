import React from "react"
import MobileNav from "../navbar/mobile-nav"
import DesktopNav from "../navbar/desktop-nav"
import FloatingBookButton from '../floating-book-button/floating-book-button'

import "./layout.scss"

const Layout = props => {
  return (
    <>
    <div className='desktop-layout'>
      <DesktopNav />
      <div className='side-page-design'>
        <span className='circle first'/>
        <span className='circle'/>
        <span className='circle'/>
        <span className='circle last'/>
        <span className='line' />

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
