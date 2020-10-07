import React, { Component } from "react"
import Layout from "../components/layout/layout"
import PageLayout from "../components/layout/page-layout"
import Products from "../components/products/components/products"
import "../components/products/styles/ProductWrapper.styles.scss"
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { SpacingSm } from "../components/typographics"
 
// list of items
const categoryList = [
  { name: 'all' },
  { name: 'shirts' },
  { name: 'brushs' },
  { name: 'hats' },
];

// list of items
const vendorList = [
  { name: 'all' },
  { name: 'the one museum' },
  { name: 'k-butta' },
];
 
// One item component
// selected prop will be passed
// const MenuItem = ({text, selected}) => {
//   return <div
//     className={`menu-item ${selected ? 'active' : ''}`}
//     >{text}</div>;
// };
 
// All items component
// Important! add unique key
// export const Menu = (categoryList, selected, alignment) =>
//   categoryList.map(el => {
//     const {name} = el;
 
//     return <MenuItem text={name} key={name} selected={selected} alignment={alignment} />;
//   });

 
 
class ShopPageComponent extends Component {
  constructor(props) {
    super(props);
  }
  toggleSelectorMenus = (selector, value) => {
    return () => {
    this.setState({
      selectors : {
        ...this.state.selectors,
        [selector] : !this.state[selector]
      }
      })
    }
  }
  selectors = {
    category: {
      // displayedMenu: this.generateButtonList(categoryList, 'category'),
      nonDisplayed: <button onClick={this.toggleSelectorMenus('category')}>Show Category Menu</button>
    },
    vendor : {
      // displayedMenu: this.generateButtonList(vendorList, 'vendor'),
      nonDisplayed: <button onClick={this.toggleSelectorMenus('vendor')}>Switch Vendors</button>
    } 
  }

  state = {
    category: '',
    vendor: '',
    selectors: {
      category: false,
      vendor: false,
    }
  };
 
  onSelectorChoice = (selectorType) => {
    return (e) => {
      this.setState({
        [selectorType.name] : selectorType.btnName
      })
    }
  }
 
  render() {
    const { category, vendor } = this.state;
    // Create menu from items
    
    return (
      <div>
        <div className='spacer'/>
          <div className='top-category-menu'>
            {this.state.selectors.category ? (
              <>
              {categoryList
                .filter(btn => this.state.category && this.state.category !== 'all' ? btn.name === this.state.category || btn.name === 'all': true )
                .map(btn => {
                    return <button onClick={this.onSelectorChoice({name: 'category', btnName: btn.name}).bind(this)}>{btn.name}</button>
                })
                .map(jsx => jsx)
              }
              </>
            ): (
            <>
              {this.selectors.category.nonDisplayed}
            </>)}
          </div>
          <div className='left-category-menu'>
          {this.state.selectors.vendor ? (
              <>
              {vendorList
                .filter(btn => this.state.vendor && this.state.vendor !== 'all' ? btn.name === this.state.vendor || btn.name === 'all': true )
                .map(btn => {
                    return <button onClick={this.onSelectorChoice({name: 'vendor', btnName: btn.name}).bind(this)}>{btn.name}</button>
                })
                .map(jsx => jsx)
              }
              </>
            ): (
            <>
              {this.selectors.vendor.nonDisplayed}
            </>)}
          </div>
          <SpacingSm/>
          <Products category={category} vendor={vendor} displayAddToCartBtn={true} />
          <SpacingSm/>
        </div>
    );
  }
}

const Shop = () => (
  <Layout useCart={true} >
    <PageLayout title="Our Products">
      <ShopPageComponent/>
    </PageLayout>
   </Layout> 
)

export default Shop
