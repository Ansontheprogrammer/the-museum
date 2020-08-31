import React, { Component } from "react"
import Layout from "../components/layout/layout"
import PageLayout from "../components/layout/page-layout"
import Products from "../components/products/components/products"
import "../components/products/styles/ProductWrapper.styles.scss"

// export class SelectorMenu extends Component {
//   state = { activeItem: 'Shirts' }

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
//   render() {
//     const { activeItem } = this.state

//     return (
//       <div className='menu'>
//       <Grid>
//         <Grid.Column>
          
//             <div className='col-divider-right'>
//             <Grid.Column width={1}>
//               <Menu vertical borderless >
//                 <Menu.Item
//                   name='Shirts'
//                   active={activeItem === 'Shirts'}
//                   onClick={this.handleItemClick}
//                 />
//                 <Menu.Item
//                   name='Clipperz'
//                   link='https://k-butta.com'
//                   active={activeItem === 'Clipperz'}
//                   onClick={this.handleItemClick}
//                 />
//               </Menu>
//             </Grid.Column>
//             </div>
//         </Grid.Column>
//       </Grid>
//       </div>
//     )
//   }
// }

// export class VendorMenu extends Component {
//   state = { activeItem: 'TheMuseum' }

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
//   render() {
//     const { activeItem } = this.state

//     return (
//       <div className='menu'>
//         <div className='vendor'>
//           <div className='col-divider'>
//         <Grid>
//               <Grid.Column width={1}>
//                 <Menu horizontal borderless >
//                   <Menu.Item
//                     name='TheMuseum'
//                     active={activeItem === 'TheMuseum'}
//                     onClick={this.handleItemClick}
//                   />
//                   <Menu.Item
//                     name='K-Butta'
//                     link='https://k-butta.com'
//                     active={activeItem === 'K-Butta'}
//                     onClick={this.handleItemClick}
//                   />
//                 </Menu>
//               </Grid.Column>
//         </Grid>
//       </div>
//     </div> 
//     </div>
//   )}
// }

const Shop = () => (
  <Layout designNumber={0} displayAddToCartBtn={true} >
    <PageLayout title="Our Products">
      {/* <VendorMenu/> */}
      <div className='shop-wrapper'>
        {/* <SelectorMenu /> */}
        <div className='spacer'>
        <Products displayAddToCartBtn={true} />
        </div>
      </div>
    </PageLayout>
   </Layout> 
)

export default Shop
