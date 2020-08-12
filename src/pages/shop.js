import React, { Component } from "react"
import Layout from "../components/layout/layout"
import PageLayout from "../components/layout/page-layout"
import Products from "../components/products/components/products"
import "../components/products/styles/ProductWrapper.styles.scss"
import { Menu, Segment, Grid, Dropdown } from 'semantic-ui-react'

export class SelectorMenu extends Component {
  state = { activeItem: 'TheMuseum' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  render() {
    const { activeItem } = this.state

    return (
      <div className='menu'>
      <Grid>
        <Grid.Column width={1}>
          <Menu horizontal attached={'top'} borderless >
            <Menu.Item
              name='TheMuseum'
              active={activeItem === 'TheMuseum'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='K-Butta'
              active={activeItem === 'K-Butta'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Clippers'
              active={activeItem === 'Clippers'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>
      </Grid>
      </div>
    )
  }
}

const Shop = () => (
  <Layout designNumber={0} displayAddToCartBtn={true} >
    <PageLayout title="Our Products">
      <SelectorMenu />
      <Products displayAddToCartBtn={true} />
    </PageLayout>
   </Layout> 
)

export default Shop
