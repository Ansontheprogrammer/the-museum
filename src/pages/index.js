import React, { Component } from "react"
import Layout from "../components/layout/layout"
import Gallery from "../components/gallery/gallery"
import Products from "../components/products/components/products"
import VideosComponent from "../components/videos/videos"
import { Menu, Segment, Grid, Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import GalleryImages from "../components/gallery/gallery-images"

const DropdownMenu = () => (
  <Menu vertical>
    <Dropdown item text='Categories'>
      <Dropdown.Menu>
        <Dropdown.Item>Electronics</Dropdown.Item>
        <Dropdown.Item>Automotive</Dropdown.Item>
        <Dropdown.Item>Home</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Menu>
)

class BarberCard extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Segment>
          <img src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
          {/* <img src={''}/>
          <p>Barber description</p> */}
        </Segment>
      </div>
    )
  }
}

class BarberComponent extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  componentToRender = () => {
    switch(this.state.activeItem){
      case 'bio': 
        return (
          <Segment>
            <BarberCard/>
          </Segment>
        )
      case 'pics':
        return (
          <GalleryImages />
        )
      case 'links':
        return (
          <a>booksy.com</a>
        )
    }
  }
  render() {
    const { activeItem } = this.state

    return (
      <div className='bio'>
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name='bio'
              active={activeItem === 'bio'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='pics'
              active={activeItem === 'pics'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='links'
              active={activeItem === 'links'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>
          {this.componentToRender()}
        <Grid.Column stretched width={12}>
          
        </Grid.Column>
      </Grid>
      </div>
    )
  }
}

const SeaMoss = () => (
  <div className='section'>
    <h1 className='section-header'>Sea Moss</h1>
    <h2 className='section-subtitle spacing'>W.Y.N (What You Need)</h2>
    <p className='section-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
    <p className='section-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      <button className='section-button'>Read More</button>
    <div className='section-content'><Products limit={1}/></div>
  </div>
)

const Videos = () => {
  return (
    <div className='off-section'>
      <h1 className='section-header spacing'>My Videos</h1>
      <div className='section-content'>
      <VideosComponent />
      </div>
    </div>
  )
}
const GalleryPage = () => {
  return (
  <Layout designNumber={4}>
    <Gallery />
    <div className='off-section'>
      <h1 className='section-header spacing'>Our Barbers</h1>
      <div className='section-content'><DropdownMenu/><BarberComponent/></div>
    </div>
    <SeaMoss/>
    <Videos />
    <div className='section'>
      <h1 className='section-header spacing'>Art</h1>
      <p className='section-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      <p className='section-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      <div className='section-content'><Products/></div>
    </div>
    <div className='off-section'>
      <h1 className='section-header spacing'>Our Products</h1>
      <div className='section-content'><Products/></div>
    </div>
  </Layout> 
    )
  } 
export default GalleryPage
